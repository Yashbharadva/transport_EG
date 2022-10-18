import { 
    TOAST_ERROR,
    TOAST_SUCCESS ,
    HIDE_TOAST,
    SET_SYSTEM_TIME,
    STORE_BROADCAST_MSG
  } from 'Constants/actionConstants';
  const common = (state={
    toast: {
      message: '',
      type: '',
    },
    systemTime: null,
    broadcastMsgs: []
  }, action)=> {
    let newState;
    if(action.type === TOAST_ERROR) {
      newState = {...state};
      newState.toast = {
          type: 'ERROR',
          message: action.message
      };
      if (action.duration) {
        newState.toast.duration = action.duration;
      }
    }
    else if(action.type === TOAST_SUCCESS) {
      newState = {...state};
      newState.toast = {
        type: 'SUCCESS',
        message: action.message
      }
    }
    else if(action.type === HIDE_TOAST) {
        newState = {...state};
        newState.toast = {
          type: null,
          message: ''
        }
    }
    else if(action.type === SET_SYSTEM_TIME) {
        newState = {...state};
        newState.systemTime = action.data;
    }
    else if (action.type === STORE_BROADCAST_MSG) {
      newState = {...state};
      newState.broadcastMsgs = action.broadcastMsgs;
    }  
    return newState || state;
  }
  
  export default common;
  