import React from 'react';
import { withRouter } from 'react-router';
import FormInput from 'Components/FormInput';
import { FORGOT_PASSWORD_DETAILS} from 'Constants/actionConstants';
import { connect } from 'react-redux';
import {SEEKER_VALUE, PROVIDER_VALUE} from 'Constants/commonConstants';
import TegLogoIcon from 'Icons/T_EG.jpg';
import ActionLoader from 'Components/ActionLoader/index';
import RCG from 'react-captcha-generator';
import Recaptcha from 'react-recaptcha';


class Forgotpassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newPassword:"",
            confirmPassword:"",
            expiryToken:window.location,
            actualCaptcha: '',
            captchaEntered: '',
            isVerified:false,
            errorMessage:"",
            showTag:false
        }
    }

      onChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
      }
      resetpassword = (e)=> {
        const { dispatch, history } = this.props;
        const { newPassword, confirmPassword } = this.state;
        dispatch({
            type: FORGOT_PASSWORD_DETAILS,
            data: {
                newPassword,
                confirmPassword,
                expiryToken:this.state.expiryToken.search.substr(1)
            },
            onSuccess: ((data) => {
                const path = (data.status===200) ? '/' : '/forgotpassword';
                history.push(path);
            })
        })
      }
      
      validate=()=>{
       let errorMessage=""; 
       const mediumRegex = new RegExp("^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{6,})");
        if (!mediumRegex.test(this.state.newPassword) || !mediumRegex.test(this.state.confirmPassword)) {
          errorMessage="Password should contain minimum 6 characters with 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.";
        }
       
       // if(this.state.newPassword.length<6 ||this.state.confirmPassword.length<6){
       //  errorMessage="Password should be minimum six characters!!";
       // }
       //if (this.state.actualCaptcha !== this.state.captchaEntered) {
         // errorMessage="Invalid Captcha entered." 
        //}
        if(!this.state.isVerified){
          errorMessage="Please verify you are not robot" ;
        }
       if(errorMessage){
           this.setState({errorMessage});
           return false;
       }
       return true;
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
      formSubmit = (e)=> { 
        e.preventDefault(); 
          if(this.validate()){    
            this.resetpassword(e);
            this.setState({
                errorMessage:""
            });
          }
      }
      
      componentDidMount() {
        setTimeout(function() { //Start the timer
          this.setState({showTag: true}) //After 1 second, set render to true
      }.bind(this), 1000)
      }
      render() {
        return(
         <form  onSubmit = {this.formSubmit}> 
             { this.props.forgotPswdSubmitting && <ActionLoader /> }
             <div className="wt-350 center pr mt-150 pt-50">
             <form className="form pt-50 flex flex-column" onSubmit = {this.formSubmit}>
             <div className="tCenter flex flex-center pt-50 pb-20 flex-self-center">
                <div style={{ backgroundImage: `url(${TegLogoIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '240px', height: '70px', marginBottom: '10px' }} />
            </div>
             <FormInput containerClassName="mb-20" name="newPassword" type="password" value={this.state.newPassword} placeholder="New Password" onChange={this.onChange}/>
             
             <FormInput containerClassName="mb-20" name="confirmPassword" type="password" value={this.state.confirmPassword} placeholder="Confirm New Password" onChange={this.onChange}/>

              {/* <FormInput name="captchaEntered" type="text" value={this.state.captchaEntered} onChange={this.onChange} placeholder="Captcha" ref={ref => this.captchaEnter = ref} />
                  <RCG
                    result={this.result} // Callback function with code
              />*/} 
              {this.state.showTag && <Recaptcha
                sitekey="6LcHtbwUAAAAAKkjbo7nNh9ajzF5GEHk9uC5skGG"
                render="explicit"
                verifyCallback={this.verifyCallback}
              />} 
              <br></br>
              <div className="error-color">{this.state.errorMessage}</div>
             <input type="submit" className="ht-40 br-20 white-color bg-theme fs-16 fBold pl-30 pr-30" value="submit"/>

             </form>
             </div>
         </form>

        );
      }
}

const mapStateToProps = ({authentication}) => {
    return {
      forgotPswdSubmitting: authentication.resetPassword.isLoading,
    }
  };
  export default connect(mapStateToProps)(withRouter(Forgotpassword));

