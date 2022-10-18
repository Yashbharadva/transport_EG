import { call, put } from 'redux-saga/effects';


import { postDataWithoutToken, SIGN_IN_URL, FORGOT_PASSWORD_URL, FORGOT_PASSWORD_DETAILS_URL ,postDataWithToken, RESET_PASSWORD_URL} from 'Utils/api';

import { storeToken, storeCompanyType, storeCompanyId, storeIsSettingsVisible, storeUser, setCookie, deleteToken } from 'Utils/storage';

import { SEEKER_ACCOUNTS_URL, PROVIDER_ACCOUNTS_URL, SEEKER_INDENT_URL, PROVIDER_INDENT_URL, REQUEST_OTP_URL, OTP_SIGNIN_URL, SSO_LOGIN_RESPONSE_URL, ssoGetDataWithToken, SSO_USER_VALIDATE, ssoPostDataWithoutToken, SSO_DELETE_TOKEN, postSSODelete, GET_BROADCAST_MSG_URL, logOutWithToken } from 'Utils/api';

import {
    TOAST_ERROR, 
    SIGN_IN_SUBMITTING,
    SIGN_IN_ERROR,
    FORGOT_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_SUBMITTING,
    CHANGE_PASSWORD_SUCCESS,
    REQUEST_OTP_SUBMITTING,
    REQUEST_OTP_SUCCESS,
    STORE_BROADCAST_MSG
} from 'Constants/actionConstants';

import User from 'Models/User';

import { 
    SEEKER_VALUE
} from 'Constants/commonConstants';
import { FORGOT_PASSWORD_SUBMITTING } from 'Constants/actionConstants';
import { TOAST_SUCCESS } from 'Constants/actionConstants';

import {RESET_PASSWORD_SUBMITTING, RESET_PASSWORD_SUCCESS} from 'Constants/actionConstants';

export function* signin(action) {
    const { email, password, device_type, companyType, force_logout } = action.data;
    try{
        yield put({
            type : SIGN_IN_SUBMITTING
        })
        const data = yield call(postDataWithoutToken, SIGN_IN_URL, {
            email,
            password,
            device_type,
            company_type: companyType,
            force_logout
        });
       
        const user = new User(data.data);
        storeToken(data.data.token);
        storeUser(user);
        storeCompanyType(companyType);
        storeCompanyId(data.data.id);
        if(data.data.is_visible) {
            storeIsSettingsVisible("true");
        } else {
            storeIsSettingsVisible("");
        }
        if(user.contracting || user.reports) {
            localStorage.setItem('teg-component', true);
            window.location.href = companyType===SEEKER_VALUE ? "/seeker" : "/transporters";
        } else if(user.indenting) {
            localStorage.setItem('teg-component', true);
            location.href = companyType===SEEKER_VALUE ? SEEKER_INDENT_URL : PROVIDER_INDENT_URL;
        } else if(user.accounts) {
            localStorage.setItem('teg-component', true);
            location.href = companyType===SEEKER_VALUE ? SEEKER_ACCOUNTS_URL : PROVIDER_ACCOUNTS_URL;
        }
        
    } catch(e) {
        console.log('ERROR', e);
        yield put({
            type: SIGN_IN_ERROR,
            error: ''
        });
        if(e && e.data && e.data == 1) {
            action.onError(e.data);
        }
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}


export function* forgotPassword(action) {
    const { email, companyType , urlLink} = action.data;
    try{
        yield put({
            type : FORGOT_PASSWORD_SUBMITTING
        })
        const data = yield call(postDataWithoutToken, FORGOT_PASSWORD_URL, {
            email,
            company_type: companyType,
            urlLink
        });
        yield put({
            type: TOAST_SUCCESS,
            message: (data && data.message) || "Password Reset Successfully"
        })
        yield put({
            type: FORGOT_PASSWORD_SUCCESS,
            error: ''
        })
    } catch(e) {
        console.log('ERROR', e);
        yield put({
            type: FORGOT_PASSWORD_SUCCESS,
            error: ''
        })
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}

export function* postForgotPasswordDetails(action) {
    try{
        yield put({
            type : RESET_PASSWORD_SUBMITTING
        })
        const data = yield call(postDataWithToken, FORGOT_PASSWORD_DETAILS_URL, action.data);
        yield put({
            type: TOAST_SUCCESS,
            message: data && data.message?data.message:"Oops! Something Went Wrong"
        })

        if(action.onSuccess) {
            action.onSuccess(data);
        }
        yield put({
            type : RESET_PASSWORD_SUCCESS
        })
    } catch(e) {
        yield put({
            type : RESET_PASSWORD_SUCCESS
        })
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
            
        })
    }
}

export function* resetPassword(action) {    
    try {
        yield put({
            type : CHANGE_PASSWORD_SUBMITTING
        })
        const data = yield call(postDataWithToken, RESET_PASSWORD_URL, action.data);
        
        if (data && data.status===200) {
            yield put({
                type: TOAST_SUCCESS,
                message: data && data.message?data.message:"Updated Successfully!"
            })
        } else {
            yield put({
                type: TOAST_ERROR,
                message: data && data.message?data.message:"Oops! Something Went Wrong"
            })
        }
        if(action.onSuccess) {
            action.onSuccess(data);
        }
        yield put({
            type : CHANGE_PASSWORD_SUCCESS
        })
        
    } catch(e) {
        yield put({
            type: CHANGE_PASSWORD_SUCCESS
        })
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}
export function* requestOTP(action) {
    try{
        yield put({
            type : REQUEST_OTP_SUBMITTING
        })
        const data = yield call(postDataWithoutToken, REQUEST_OTP_URL, action.data);
        console.log(data)
        yield put({
            type: TOAST_SUCCESS,
            message: (data && data.message) || "OTP Sent Successfully",
        })
        if(action.data.onSuccess) {
            action.data.onSuccess(data.data);
        }
        yield put({
            type: REQUEST_OTP_SUCCESS,
            error: ''
        })
    } catch(e) {
        console.log('ERROR', e);
        yield put({
            type: REQUEST_OTP_SUCCESS,
            error: ''
        })
        if(e && e.message) {
            action.data.onError(e.message);
        }
    }
}

export function* loginWithOTP(action) {
    const { companyType, contact_no, otp_number } = action.data;
    try{
        yield put({
            type : SIGN_IN_SUBMITTING
        })
        const data = yield call(postDataWithoutToken, OTP_SIGNIN_URL, {
            company_type: companyType,
            contact_no,
            otp_number
        });
        const user = new User(data.data);
        storeToken(data.data.token);
        storeUser(user);
        storeCompanyType(companyType);
        storeCompanyId(data.data.id);
        if(data.data.is_visible) {
            storeIsSettingsVisible("true");
        } else {
            storeIsSettingsVisible("");
        }
        if(user.contracting || user.reports) {
            localStorage.setItem('teg-component', true);
            window.location.href = companyType===SEEKER_VALUE ? "/seeker" : "/transporters";
        } else if(user.indenting) {
            localStorage.setItem('teg-component', true);
            location.href = companyType===SEEKER_VALUE ? SEEKER_INDENT_URL : PROVIDER_INDENT_URL;
        } else if(user.accounts) {
            localStorage.setItem('teg-component', true);
            location.href = companyType===SEEKER_VALUE ? SEEKER_ACCOUNTS_URL : PROVIDER_ACCOUNTS_URL;
        }
        
    } catch(e) {
        console.log('ERROR', e);
        yield put({
            type: SIGN_IN_ERROR,
            error: ''
        });
        if(e && e.message) {
            action.onError(e.message);
        }
        if(e && e.data && e.data == 1) {
            action.onError(e.data);
        }
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}

export function* loginWithSSO(action) {
    try{
        yield put({
            type : SIGN_IN_SUBMITTING
        })
        const data = yield call(ssoGetDataWithToken, SSO_LOGIN_RESPONSE_URL, {});
        const user = new User(data.data);
        storeToken(data.data.token);
        storeUser(user);
        storeCompanyType(data.data.company_type);
        storeCompanyId(data.data.id);
        if(data.data.is_visible) {
            storeIsSettingsVisible("true");
        } else {
            storeIsSettingsVisible("");
        }
        if(action.onSuccess) {
            action.onSuccess(data);
        }
        window.location.href = "/seeker";
        localStorage.setItem('sso-session', true);
        localStorage.setItem('teg-component', false);
    } catch(e) {
        console.log('ERROR', e);
        yield put({
            type: SIGN_IN_ERROR,
            error: ''
        });
        if(e && e.data && e.data == 1) {
            action.onError(e.data);
        }
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}

export function* ssoUserValidate(action) {
    try{
        const data = yield call(ssoPostDataWithoutToken, SSO_USER_VALIDATE, action.data);
        if(action.onSuccess){
            action.onSuccess(data);
        }
    } catch(e) {
        console.log('ERROR', e);
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}

export function* ssoDeleteToken(action) {
    try{
        console.log(action.params)
        const data = yield call (postSSODelete, SSO_DELETE_TOKEN, action.params);
        console.log(action.params)
        if(action.params.force_auth){
            // deleteToken();
        }
    } catch(e){
        console.log('ERROR', e);
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}

export function* getBroadcastMsg(action) {
    try {
        const data = yield call(ssoGetDataWithToken, GET_BROADCAST_MSG_URL, action.params);
        if (data && data.data && data.data.messages) {
            yield put({
                type: STORE_BROADCAST_MSG,
                broadcastMsgs: data.data.messages
            });
        }
        if (data && data.data && data.data.is_under_maintenance) {
            logOutWithToken();
            deleteToken();
        }
    } catch(e) {
        console.log('ERROR', e);
    }
}