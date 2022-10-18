import { 
  SIGN_IN_ERROR,
  SIGN_IN_SUBMITTING,

  FORGOT_PASSWORD_SUBMITTING,
  FORGOT_PASSWORD_SUCCESS,

  RESET_PASSWORD_SUBMITTING, 
  RESET_PASSWORD_SUCCESS,

  CHANGE_PASSWORD_SUBMITTING,
  CHANGE_PASSWORD_SUCCESS,
  
  REQUEST_OTP_SUBMITTING,
  REQUEST_OTP_SUCCESS,

} from 'Constants/actionConstants';
const authentication = (state={
  signin: {
    error: '',
    isSubmitting: false
  }, forgotPassword: {
    error: '',
    isSubmitting: false
  },
  resetPassword: {
    isLoading: false,
  },
  changePassword:{
    error: '',
    isLoading:false,
  },
}, action)=> {
  let newState;
  if(action.type === SIGN_IN_ERROR) {
    newState = {...state};
    newState.signin = {
      error: action.error,
      isSubmitting: false
    }
  }
  else if(action.type === SIGN_IN_SUBMITTING) {
    newState = {...state};
    newState.signin = {
      error: '',
      isSubmitting: true
    }
  }
  else if(action.type === FORGOT_PASSWORD_SUCCESS) {
    newState = {...state};
    newState.forgotPassword = {
      isSubmitting: false
    }
  }
  else if(action.type === FORGOT_PASSWORD_SUBMITTING) {
    newState = {...state};
    newState.forgotPassword = {
      isSubmitting: true
    }
  }
  else if(action.type === RESET_PASSWORD_SUBMITTING) {
    newState = {...state};
    newState.resetPassword.isLoading = true;
  }
  else if (action.type === RESET_PASSWORD_SUCCESS) {
    newState = {...state};
    newState.resetPassword.isLoading = false;
  }
  else if(action.type===CHANGE_PASSWORD_SUBMITTING){
    newState = {...state};
    newState.changePassword={
      isLoading:true
    }
  }else if(action.type===CHANGE_PASSWORD_SUCCESS){
    newState = {...state};
    newState.changePassword.isLoading = false;
  }
  else if(action.type === REQUEST_OTP_SUBMITTING) {
    newState = {...state};
    newState.requestOTP.isLoading = true;
  }
  else if (action.type === REQUEST_OTP_SUCCESS) {
    newState = {...state};
    newState.requestOTP.isLoading = false;
  }
  return newState || state;
}

export default authentication;
