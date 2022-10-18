import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import FormInput from 'Components/FormInput';
import ActionLoader from 'Components/ActionLoader';
import Tabs from 'Components/Tabs';
import Countdown from 'react-countdown-now';
import moment from 'moment';
import TegLogoIcon from 'Icons/T_EG.jpg';
import { ReactComponent as LogoIcon } from 'Icons/teg.svg';
import { ReactComponent as AlertIcon } from 'Icons/esclamation.svg';
import {SEEKER_VALUE, PROVIDER_VALUE, USER_ID, MOBILE_NO} from 'Constants/commonConstants';
import { SIGN_IN, FORGOT_PASSWORD, REQUEST_OTP, LOGIN_WITH_OTP, VALIDATE_SSO_USER } from 'Constants/actionConstants';
import { getToken, getCompanyType, setCookie, getUser } from 'Utils/storage';
import Recaptcha from 'react-recaptcha';
import { TOAST_ERROR } from 'Constants/actionConstants';
import OtpInput from 'react-otp-input';
import { SSO_BASE_URL, SSO_URL } from '../../utils/api';


const SIGN_IN_FORM = 'SIGN_IN_FORM';
const FORGOT_PASSWORD_FORM = 'FORGOT_PASSWORD_FORM';
const SSO_LOGIN_FORM = 'SSO_LOGIN_FORM';


class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email:"",
      password: "",
      companyType: window.location.hostname.includes('provider') ? PROVIDER_VALUE : SEEKER_VALUE,
      formType: SIGN_IN_FORM,
      urlLink:window.location.href,
      isVerified:false,
      errorMessage:"",
      showTag:false,
      force_logout:false,
      show_checkbox: false,
      tabType: USER_ID,
      contact_no: null,
      expire_time: null,
      start_time: null,
      hasExpired: false,
      invalidOTP: false,
      invalidContact: false,
      otp: ''
    };
  }
  onChange = (e)=> {
    if(e.target.name == "contact_no"){
      e.target.value.length <= 10 ?
      this.setState({
        [e.target.name]: e.target.value
      }) : null
    } 
    else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    
  }

  handleChange = (otp) => this.setState({ otp });

  signin = (e)=> {
    
    const { dispatch } = this.props;
    const { email, password, companyType, force_logout } = this.state;
    dispatch({
        type: SIGN_IN,
        data: {
            email,
            password,
            device_type: 3,
            companyType,
            force_logout
        },
        onError: () => {
          this.setState({ show_checkbox: true });
        }
    })
  }

  otpSignin = () => {
    const { dispatch } = this.props;
    const { companyType, contact_no, otp } = this.state;
    dispatch({
        type: LOGIN_WITH_OTP,
        data: {
          contact_no,
          companyType,
          otp_number: otp,
        },
        onError: (data) => {
          this.setState({ invalidOTP: true, errorMessage: data });
        }
    })
  }

  tabs = [
    {
        id: SEEKER_VALUE,
        value:'Seeker'
    }, {
        id: PROVIDER_VALUE,
        value: 'Provider'
    }
  ];
  subtabs = [
    {
        id: USER_ID,
        value:'User ID'
    }, {
        id: MOBILE_NO,
        value: 'Mobile No.'
    }
  ];
  selectCompanyType = (companyType)=> {
    this.setState({
        companyType
    })
  }
  selectTabType = (tabType)=> {
    this.setState({
      tabType
    })
  }
  componentDidMount() {
    const isSSOLogin = getUser().isSSOLogin;
    const token = getToken();
    setTimeout(function() { //Start the timer
      this.setState({showTag: true}) //After 1 second, set render to true
  }.bind(this), 1000)
    if (window.name && window.name.length > 0 && (!token || (JSON.parse(window.name))['teg-session-token'] !== token) && !(JSON.parse(window.name))['sso-logout-duration']) {
        Object.entries(JSON.parse(window.name)).map(([key, value]) => {
            setCookie(key, value, 200);
        });
        location.reload();
    }

    if(!token) {
      return;
    } else {
      if(isSSOLogin){
        localStorage.setItem('teg-component', false);
        localStorage.setItem('sso-session', true);
        localStorage.setItem('isSSOUser', true);
        localStorage.setItem('teg-sso-session', true);
      }
      this.props.history.push(getCompanyType()===SEEKER_VALUE?'/seeker':'/transporters')
    }
  }
  setFormType = (e)=> {
    this.setState({
      formType: e.target.getAttribute("name")
    })
  }
  forgotPassword = (e)=> {
    const { dispatch } = this.props;
    const { email, companyType , urlLink} = this.state;
    dispatch({
        type: FORGOT_PASSWORD,
        data: {
            email,
            companyType,
            urlLink
        }
    })
  }
  sendOTP = () => {
    const { dispatch } = this.props;
    const { contact_no, companyType } = this.state;
    dispatch({
      type: REQUEST_OTP,
      data: {
        contact_no,
        company_type: companyType,
        onSuccess: (data) => {
          this.setState({
            expire_time: data.expire_time, 
            start_time: data.created_on,
            hasExpired: false,
            invalidOTP: false,
            invalidContact: false,
            show_checkbox: false,
            otp: ''
          })
        },
        onError: (message) => {
          this.setState({
            invalidContact: true,
            show_checkbox: true,
            errorMessage: message
          })
        }
      }
    })
  }

  otpExpired = () => {
    const { expire_time, start_time} = this.state;
    const systemTime = new Date().getTime();
    if(expire_time && start_time && expire_time < systemTime){
      this.setState({hasExpired: true, otp: ''});
    }
    else {
      this.setState({hasExpired: false});
    }
  }

  formSubmit = (e)=> {
    const { formType, tabType, otp, email } = this.state;
    const { dispatch } = this.props;
    const isOTP = (tabType === 2);
    let {errorMessage} = this.state;
    e.preventDefault();
    if(formType === SIGN_IN_FORM) {
    /*  if(!this.state.isVerified){
        errorMessage="Please verify you are not robot" ;
      }
      if(errorMessage && errorMessage.length > 0){
        // this.state.errorMessage
        dispatch({
          type: TOAST_ERROR,
          message: errorMessage,
        })
        return false;
    }*/
    isOTP ? (otp ? this.otpSignin(e) : this.sendOTP()) :
      this.signin(e)
    } else if(formType === FORGOT_PASSWORD_FORM) {
    /*  if(!this.state.isVerified){
        errorMessage="Please verify you are not robot" ;
      }
      if(errorMessage && errorMessage.length > 0){
        // this.state.errorMessage
        
        dispatch({
          type: TOAST_ERROR,
          message: errorMessage,
        })
        return false;
    }*/
      this.forgotPassword(e);
    }else if (formType === SSO_LOGIN_FORM){
      this.validateSSOUser();
    }
  }
  verifyCallback =  (response)=> {
   if(response){
    this.setState({
      isVerified:true
     });
     this.setState({
      errorMessage:""
     });
   }
  };

  validateSSOUser = () => {
    const { email } = this.state;
    const { dispatch } = this.props;
    localStorage.clear();
    const data = {
      email
    }
    dispatch({
      type: VALIDATE_SSO_USER,
      data,
      onSuccess: () => {
        localStorage.setItem('isSSOUser', true);
        window.location.replace(`${SSO_BASE_URL}${SSO_URL}/?sso&email=${email}&next=${window.location.href}seeker`);
      }
    })
    
  }

  navigateToSSO = (e) => {
    this.setState({
      formType: e.target.getAttribute("name"),
      errorMessage: ''
    })
  }

  onGenerateAnotherSession = () => {
    const { show_checkbox, invalidContact, invalidOTP } = this.state;
    this.setState({
      show_checkbox: !show_checkbox,
      invalidContact: !invalidContact,
      invalidOTP: !invalidOTP,
      errorMessage: '',
      force_logout: true
    }, () => {
        this.signin();
    })
  }
  render() {
    const { isSubmitting } = this.props;
    const { formType, show_checkbox, tabType, start_time, expire_time, hasExpired, invalidOTP, otp, contact_no, invalidContact, errorMessage, isVerified } = this.state;
    const isSeeker = (window.location.hostname.includes('seeker') || window.location.hostname.includes('provider')) || window.location.hostname.includes('awl');
    const isOTP = (tabType === 2);
    const systemTime = new Date().getTime();
    const duration = expire_time ? moment(new Date(expire_time)) : moment(new Date());
    const disableLogin = (!otp ? (start_time && !hasExpired) : (isVerified ? otp.length != 6 : true));
    
    return ( 
    <div style={{ width: "100%", position: "fixed", top: "0", height: "100%", left: "0", background:"rgb(82 138 234 / 85%)", overflow: 'scroll'}}>
      <div>
        <Fragment>
          <div className="login-form pr" style={{ background: "#fff", width: "25rem", padding:"2rem 3rem", borderRadius:" 10px", "transform": "translate(0, 7%)",boxShadow: "0 0 20px 0px black" }} >
            {isSubmitting && <ActionLoader fixed={true}/>}
            <form className="form  flex flex-column col-1" onSubmit = {this.formSubmit}>
                <div className="tCenter flex flex-center pb-20 flex-self-center">
                    <div style={{ backgroundImage: `url(${TegLogoIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '240px', height: '70px', marginBottom: '10px' }} />
                </div>
                {
                  formType !== SSO_LOGIN_FORM && (!isSeeker ? 
                  <React.Fragment>
                    <div className="fs-14 theme-color fBold mb-10">I Am A</div>
                    <div className="mb-10">
                      <Tabs selectTab={this.selectCompanyType} activeTabId={this.state.companyType} tabs={this.tabs}/>
                    </div>
                    <div className="mb-30">
                      <Tabs selectTab={this.selectTabType} activeTabId={this.state.tabType} tabs={this.subtabs}/>
                    </div>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    <div className="mb-30">
                      <Tabs selectTab={this.selectTabType} activeTabId={this.state.tabType} tabs={this.subtabs}/>
                    </div>
                  </React.Fragment>
                  )}
                {isOTP ? 
                  <Fragment>
                    <div className="flex">
                      <FormInput containerClassName="mb-20 wt-100p" name="contact_no" type="number" onWheel={(e) => e.currentTarget.blur()} value={this.state.contact_no} length={'10'} placeholder="Mobile No." onChange={this.onChange}/>
                    </div>
                    {start_time && !hasExpired && 
                      <OtpInput
                        value={this.state.otp}
                        onChange={this.handleChange}
                        numInputs={6}
                        separator={<span className="mr-10 ml-10">-</span>}
                        containerStyle="mb-20 wt-100p"
                        name="otp"
                        inputStyle="otp-box"
                      />}
                    {/* // <FormInput containerClassName="mb-20 wt-100p" name="otp" type="number" value={this.state.otp} placeholder="Enter OTP" onChange={this.onChange}/>} */}
                  </Fragment>
                  :
                  <Fragment>
                    <FormInput containerClassName="mb-20" name="email" type="text" value={this.state.email} placeholder={formType === SSO_LOGIN_FORM ? "Email" : "Username"} onChange={this.onChange}/>
                    {formType === SIGN_IN_FORM && <FormInput containerClassName="mb-20" name="password" type="password" value={this.state.password} placeholder="Password" onChange={this.onChange}/>}
                  </Fragment>
                  }
                  <div className="flex flex-right mb-30 mt--10">
                    {isOTP && start_time && (!hasExpired ? 
                              (
                                duration && 
                                <Countdown
                                    date={duration.toDate()}
                                    renderer={
                                        ({ minutes, seconds, completed }) => {
                                            if (!completed && isOTP) {
                                                return (<span className="fs-14 lh-15p fBold danger-color">
                                                    OTP expires in {minutes}m {seconds}s
                                                </span>);
                                            }
                                            if(completed && isOTP) {
                                                this.otpExpired();
                                                
                                            }
                                            return null;
                                        }
                                    }
                                />
                    ) : <span className="fs-14 lh-15p fBold danger-color">OTP has expired</span>)}
                    
                    {formType === SIGN_IN_FORM && !isOTP && <span className="theme-color fs-12 fSemibold curP" name={FORGOT_PASSWORD_FORM} onClick={this.setFormType}>Forgot Password?</span>}
                    {formType === FORGOT_PASSWORD_FORM && <span className="theme-color fs-12 fSemibold curP" name={SIGN_IN_FORM} onClick={this.setFormType}>Back To Signin</span>}
                  </div>
                  <div className="flex flex-right mb-30 mt--20">
                    {isOTP && start_time && !hasExpired && invalidOTP && errorMessage &&<span className="fs-14 lh-15p fBold danger-color">{errorMessage}</span>}
                  </div>
                  
                  {this.state.showTag && isOTP && <Recaptcha
                    sitekey="6LcHtbwUAAAAAKkjbo7nNh9ajzF5GEHk9uC5skGG"
                    render="explicit"
                    verifyCallback={this.verifyCallback}
                  />} 
                <br></br>
                <br></br>  
                {formType===SIGN_IN_FORM && !isOTP ?
                  <button 
                    className="ht-40 br-20 white-color bg-theme fs-16 fBold pl-30 pr-30" 
                    style={{"margin": "0.75rem" }}
                  >Log In</button>: 
                  (contact_no && contact_no.length == 10 &&
                  <button 
                    className={disableLogin  ? "ht-40 br-20 white-color bg-button-gray fs-16 fBold pl-30 pr-30" : "ht-40 br-20 white-color bg-theme fs-16 fBold pl-30 pr-30"} 
                    disabled={disableLogin}
                    style={{"margin": "0.75rem", textAlign: 'center' }}
                    // onClick={otp ? this.formSubmit : this.sendOTP}
                    >{isOTP && (otp && otp.length == 6) ? "Log In" : (hasExpired ? "Resend OTP" : "Send OTP")}</button>)
                }
                {formType===FORGOT_PASSWORD_FORM && <input 
                            type="submit" 
                            className="ht-40 br-20 white-color bg-theme fs-16 fBold pl-30 pr-30 curP" 
                            value="Forgot Password"
                            />
                }
                {formType===SIGN_IN_FORM && <span className="theme-color fs-12 fBold tCenter curP mt-5" name={SSO_LOGIN_FORM} onClick={this.navigateToSSO}>Login with SSO</span>}
                {formType===SSO_LOGIN_FORM && <input type="submit" className="ht-40 br-20 white-color bg-theme fs-16 fBold pl-30 pr-30" style={{borderStyle: 'none'}} value="Login with SSO"/>}
                {formType === SSO_LOGIN_FORM && <span className="theme-color fs-12 fBold tCenter curP mt-5" name={SIGN_IN_FORM} onClick={this.setFormType}>Back To Signin</span>}
            </form>
            {/* {isSubmitting && <ActionLoader />} */}
          </div>
          {show_checkbox && formType === SIGN_IN_FORM && 
            <Fragment>
              <div className="fs-14 mt-10 flex flex-center col-1" style={{ marginTop: "2rem" }}>
                    {/* <input type="checkbox" className="ht-15 wt-10p tCenter mt-20" onClick={this.onGenerateAnotherSession}/> */}
                    <div className="theme-color fBold flex flex-center pt-5 mb-40 tCenter " style={{ background:"wheat", padding: "1rem", "border-radius": "5px", "margin-top": "1rem" }}>
                    <AlertIcon className="wt-20 flex ht-20 alert-icon"/>
                      <div style={{ "padding-left":"5rem" }}>
                      
                        {invalidContact ?
                        <span className="error-color flex flex-center" style={{ fontSize:"16px" }}>{errorMessage}</span> :
                        <Fragment>
                            <span className="error-color flex flex-center" style={{ fontSize:"16px" }}>
                            Your Previous Login / Session is still active and not closed properly.
                            To Logout previous sessions,
                            <a onClick={this.onGenerateAnotherSession} style={{ color: "white", "box-shadow": "0 0 5px 0 black", padding: "0.25rem", "margin-left":" 0.5rem" ,"border-radius": "5px", background: "green" }}> Click Here...</a>
                          </span>
                        </Fragment>}
                        {!invalidContact && <div className="error-color flex flex-center fBold mt-5" style={{ fontSize:"16px" }}>Note: Any unsaved data in previous sessions will be lost</div>}
                      </div>
                      
                    </div>
              </div>
            </Fragment>
          }
          <div className="footer flex flex-center ">
            <div className="mt-10 mb-10 ml-15 mr-15 tCenter fSemibold fs-14 curP" onClick={() => this.props.history.push('/infringementPolicy')}>IP & Infringement Policy</div>
            <div className="mt-10 mb-10 ml-15 mr-15 tCenter fSemibold fs-14 curP" onClick={() => this.props.history.push('/privacyPolicy')}>Privacy Policy</div>
            <div className="mt-10 mb-10 ml-15 mr-15 tCenter fSemibold fs-14 curP" onClick={() => this.props.history.push('/termsOfUse')}>Terms Of Use</div>
            <div className="mt-10 mb-10 ml-15 mr-15 tCenter fSemibold fs-14 curP" onClick={() => this.props.history.push('/liabilityDisclaimer')}>Liability Disclaimer</div>
            <div className="mt-10 mb-10 ml-15 mr-15 tCenter fSemibold fs-14 curP" onClick={() => this.props.history.push('/contactUs')}>Contact Us</div>
          </div>
        </Fragment>
      </div>
     </div>
    );
  }
}

const mapStateToProps = ({authentication}) => {
  return {
    signinError: authentication.signin.error,
    isSubmitting: authentication.signin.isSubmitting || authentication.forgotPassword.isSubmitting
  }
};


export default connect(mapStateToProps)(Signin);
