import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  TOAST_HIDE_TIME
} from 'Constants/commonConstants';
import Toast from 'Components/Toast';
import IdleTimer from 'react-idle-timer';

import 'react-dates/initialize';

import 'Styles/app.scss';
import 'react-dates/lib/css/_datepicker.css';
import { 
  GET_PACKING_TYPES, 
  GET_VEHICLE_TYPES, 
  GET_VEHICLE_BODY_TYPES,
  GET_PAYMENT_CYCLES,
  GET_BUSINESS_VOLUMES,
  GET_SLABS,
  GET_PRICING_BASIS,
  GET_PRODUCT_CATEGORIES,
  HIDE_TOAST,
  GET_FUEL_TYPES,
  SSO_DELETE_TOKEN,
  GET_BROADCAST_MSG
} from 'Constants/actionConstants';
import { deleteToken, getCompanyType, getUser, getToken, setCookie, getCookie, storeLogoutDuration, getLogoutTimeDuration } from 'Utils/storage';
import { GOOGLE_API_KEY, WEB_NOTIFICATION_URL, getDataForNotifWithToken } from 'Utils/api';
import { SEEKER_VALUE } from 'Constants/commonConstants';
// import webpush from 'web-push';
 

class App extends Component {
  

  onIdle = () => {
    deleteToken();
    if(location.pathname !== '/') {
      this.idleTimer.reset();
      location.href = '/';
    }
  }

  onSSOIdle = () => {
    deleteToken();
    localStorage.clear();
    this.idleTimer.reset();
  }

  endSession = () => {
    deleteToken();
    localStorage.clear();
  }

  render() {
    const { dispatch } = this.props;
    const { toast, broadcastMsgs } = this.props;
    const user = getUser();
    const isSSOUser = localStorage.getItem('isSSOUser');
    const isSessionActive = localStorage.getItem('sso-session');
    const lastLogoutTimeDuration = getLogoutTimeDuration();
    let currrentTime = new Date();
    const logoutTime = user.logoutTimeoutDuration;
    const diffMins = (Math.abs((currrentTime.getTime() - (new Date(lastLogoutTimeDuration).getTime())) / 1000)) > logoutTime;
    console.log(diffMins)
    this.timer = null;
    if(toast.type && toast.message) {
      if(this.timer) {
        clearTimeout(this.timer);
      }
      let hideTime = TOAST_HIDE_TIME*1000;
      if (toast.duration) {
        hideTime = toast.duration*1000;
      }
      this.timer = setTimeout(()=> {
        dispatch({
          type: HIDE_TOAST
        });
      }, hideTime);
    }
    if(isSSOUser && isSessionActive === 'false' && diffMins){
      this.endSession();
    }
    if(isSSOUser === 'true'){
      return (
        <div className="ct-app pr"> 
          <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            onIdle={this.onSSOIdle}
            timeout={1000 * (user.idleTimeoutDuration || (60*5))}
            // timeout={1000 * 60 * 5}
          >
          {/* {broadcastMsgs && broadcastMsgs.length > 0 && <Banner data={broadcastMsgs} close={this.closeBanner} islogin={location.pathname==='/'} />} */}
          <Toast type={toast.type} message={toast.message}/>
          {this.props.children}
          </IdleTimer>
        </div>
      );
    } else {
      return (
        <div className="ct-app pr"> 
          <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            onIdle={this.onIdle}
            timeout={1000 * 60 * 60}
          >
          {/* {broadcastMsgs && broadcastMsgs.length > 0 && <Banner data={broadcastMsgs} close={this.closeBanner} islogin={location.pathname==='/'} />} */}
          <Toast type={toast.type} message={toast.message}/>
          {this.props.children}
          </IdleTimer>
        </div>
      );
    }
  }
  componentWillMount() {
    if (window.parent.frames.length > 0) {
      var antiClickjack = document.getElementById("antiClickjack");
      antiClickjack.innerHTML = '';
    }
    if(this.notifTimer) {
      clearInterval(this.notifTimer);
    }
  }
  
  componentDidMount() {
    const isSSOUser = localStorage.getItem('isSSOUser');
    const isSessionActive = localStorage.getItem('sso-session');
    this.attachGoogleKeyScript();
    const user = getUser();
    let params = {
      module: 1,
      force_auth: user.forceAuthentication
    }
    const { dispatch } = this.props;
    if(isSSOUser === 'true' && isSessionActive === 'true'){
        window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        const isTEGComponent = localStorage.getItem('teg-component');
        if(isTEGComponent !== 'true'){
          localStorage.setItem('sso-session', false);
          dispatch({
            type: SSO_DELETE_TOKEN,
            params
          })
          storeLogoutDuration(new Date().valueOf());
        }  
        localStorage.setItem('teg-component', false);
      });
    }
  }

  attachGoogleKeyScript = () => {
    const script = document.createElement("script");
    script.src = 'https://maps.googleapis.com/maps/api/js?key='+ GOOGLE_API_KEY +'&v=3.exp&libraries=places';
    script.async = true;
    script.type = 'text/javascript';

    document.head.appendChild(script);
  }
}

const mapStateToProps = ({common}) => {
  return {
    toast: common.toast,
    broadcastMsgs: common.broadcastMsgs
  }
};

export default connect(mapStateToProps)(App);
