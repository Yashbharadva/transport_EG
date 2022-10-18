import { delay } from 'redux-saga';
import { call, put, all } from 'redux-saga/effects';

import { transformRfq } from 'Utils/transform';

import { 
    getDataWithToken, 
    postDataWithToken,
    putDataWithToken,
    uploadFile,
    uploadFileWithSyncCalls,
    deleteDataWithToken,
    getLPPDataWithoutToken,
    getDataWithoutToken,
    getDataSSPWithToken,
    getLCLDataWithToken,
    putLCLDataWithToken,

    postDataWithoutToken,

    postLPPDataWithoutToken,
    putDataWithTokenToIndents,

    CHALLENGE_PRICE_URL,
    CP_FORM_MEGA_SAVE_URL,
    SEEKER_TRANSPORTERS_LIST_URL,
    SEEKER_TRANSPORTER_BIDS_URL,
    SEND_LOI_URL,
    COUNTER_PRICE_URL,
    COUNTER_SEEKER_URL,
    ACCEPT_REJECT_LOI_URL,
    ACCEPT_REJECT_CP_URL,
    CHANGE_BID_END_URL,
    CHANGE_TRIP_BID_END_URL,

    DOWNLOAD_BIDDING_DETAILS_URL,
    UPLOAD_BIDDING_DETAILS_URL,
    DOWNLOAD_BIDDING_DETAILS_TRANSPORTER_URL,
    UPLOAD_BIDDING_DETAILS_TRANSPORTER_URL,
    CHALLENGE_PRICE_FORM_URL,
    LPP_GET_API_URL,
    CP_LPP_URL,
    EDIT_CONTRACT_TO_DATE_URL, 
    ADD_LOI_APPROVER_URL,
    SEND_APPROVER_LOI_MESSAGE_URL,
    EDIT_TK11_CONTRACT_DATA_URL,
    DELETE_TRIP_DETAILS_URL,
    CHANGE_TRIP_BASE_VOLUME_URL,
    POST_OTHER_COST_CP_URL,
    OTHER_COST_ACCEPT_REJECT_CP_URL,
    DOWNLOAD_BIDDING_SEEKER_TRAIL_URL,
    DOWNLOAD_BIDDING_PROVIDER_TRAIL_URL,
    DOWNLOAD_COURIER_BIDDING_PROVIDER_URL,
    UPLOAD_COURIER_BIDDING_PROVIDER_URL,
	PROVIDER_UPLOAD_SERVICE_CATEGORY_TEMPLATE_URL,
    PROVIDER_DOWNLOAD_SERVICE_CATEGORY_TEMPLATE_URL,
    DOWNLOAD_COURIER_TRIPS_TEMPLATE_URL,
    UPLOAD_COURIER_TRIPS_URL,
    FILE_UPLOAD_POST_API_URL,
    CLEAR_MESSAGE_URL,
    DOWNLOAD_MULTI_MODE_BID_DETAILS_TRANSPORTER_URL,
    UPLOAD_MULTI_MODE_BID_TRANSPORTER_URL,
    SYSTEM_SUGGESTED_PRICE_URL,
    CHECK_CONTRACT_EXIST_URL,
    FREIGHT_CALCULATATION_URL,
    GET_OTHERS_LPP_URL,
    AMMENDMENT_LIST_URL,
    AMMENDMENT_APPROVE_URL,
    DOWNLOAD_BID_RATE_TEMPLATE_URL,
    UPLOAD_BID_RATE_URL,
    DOWNLOAD_TRUCKS_DETAILS_TEMPLATE_URL,
    UPLOAD_TRUCKS_DETAILS_URL,
    NUMBER_OF_VEHICLE_PLACED_URL,
    EXISITING_CONTRACT_DETAILS_URL,
    GENERATE_CONTRACT_URL,
    DOWNLOAD_MULTIMODE_EXISITING_CONTRACT_URL,
    UPLOAD_MULTIMODE_EXISITING_CONTRACT_URL,
    GENERATED_CONTRACTS_LIST_URL,
    CLOSED_RFQ_URL,
    ACCEPTANCE_OF_CEILING_PRICE_URL,
    CANCELLED_LOI_URL,
    DOWNLOAD_AWL_MULTIMODE_TEMPLATE_URL,
    UPLOAD_AWL_MULTIMODE_EXCEL_URL,
    AIR_SHIPMENT_TRACKING_URL,
    CONTAINER_SHIPMENT_TRACKING_URL,
    REVOKE_WITHDRAW_BID_URL,
    BL_SHIPMENT_TRACKING_URL
} from 'Utils/api';

import {
    CHALLENGE_PRICE_SUCCESS,
    CHALLENGE_PRICE_SUBMITTING,

    GET_SEEKER_TRANSPORTERS_LOADING,
    GET_SEEKER_TRANSPORTERS_SUCCESS,

    GET_SEEKER_TRANSPORTER_BIDS_LOADING,
    GET_SEEKER_TRANSPORTER_BIDS_SUCCESS,

    TOAST_ERROR,
    TOAST_SUCCESS,

    SEND_LOI_SUBMITTING,
    SEND_LOI_SUCCESS,

    COUNTER_PRICE_SUBMITTING,
    COUNTER_PRICE_SUCCESS,

    ACCEPT_REJECT_LOI_SUBMITTING,
    ACCEPT_REJECT_LOI_SUCCESS,

    DOWNLOAD_BIDDING_DETAILS_SUCCESS,
    DOWNLOAD_BIDDING_DETAILS_SUBMITTING,
    UPLOAD_BIDDING_DETAILS_SUCCESS,
    UPLOAD_BIDDING_DETAILS_SUBMITTING,

    POST_CHALLENGE_PRICE_FORM_SUBMITTING,
    POST_CHALLENGE_PRICE_FORM_SUCCESS,

    LPP_DATA,
    UPDATE_LPP_DATA,
    SAVE_EXTEND_DATE_SUBMITTING,
    SAVE_EXTEND__DATE_SUCCESS,
    DELETE_TRIP_DETAILS,
    DELETE_TRIP_DETAILS_SUCCESS,
    ADD_LOI_SUCCESS,
    ADD_LOI_SUBMITTING,
    DOWNLOAD_BIDDING_TRAIL_SUCCESS,
    DOWNLOAD_BIDDING_TRAIL_SUBMITTING,
    CLEAR_MESSAGE_SUCCESS,
    GET_AMMENDMENT_STARTED,
    SAVE_AMMENDMENT_DATA_LIST,
    PUT_AMMENDMENT_APPROVE_STARTED,
    SAVE_AMMENDMENT_APPROVE_LIST,
    DOWNLOAD_BIDDING_RATE_SUBMITTING,
    DOWNLOAD_BIDDING_RATE_SUCCESS,
    UPLOAD_BIDDING_RATE_SUBMITTING,
    UPLOAD_BIDDING_RATE_SUCCESS,
    DOWNLOAD_TRUCKS_SUBMITTING,
    DOWNLOAD_TRUCKS_SUCCESS,
    UPLOAD_NUMBER_OF_TRUCKS_SUBMITTING,
    UPLOAD_NUMBER_OF_TRUCKS_SUCCESS,
    NUMBER_OF_VEHICLE_PLACED_SUBMITTING,
    NUMBER_OF_VEHICLE_PLACED_SUCCESS,
    GET_EXISTING_CONTRACT_DETAILS_SUBMITTING,
    GET_EXISTING_CONTRACT_DETAILS_SUCCESS,
    GET_GENERATED_CONTRACT_DETAILS_SUCCESS,
    END_LOADER,
    START_LOADER,
    REVOKE_WITHDRAW_BID_SUCCESS,
    REVOKE_WITHDRAW_BID_SUBMITTING,
    LOI_CANCELLED_SUBMITTING,
    LOI_CANCELLED_UPDATED_SUCCESS,
    SAVE_CARGO_SHIPMENT_TRACKING_DATA
} from 'Constants/actionConstants';

import Transporter from 'Models/Transporter';
import Trip from 'Models/Trip';
import RFQ from 'Models/RFQ';
import { TRANSPORTER } from 'Constants/commonConstants';

export function* postChallengePrice(action) {
    try{
        yield put({
            type: CHALLENGE_PRICE_SUBMITTING
        });
        const data = yield call(putDataWithToken, CHALLENGE_PRICE_URL,  action.data);
        yield put({
            type: CHALLENGE_PRICE_SUCCESS,
        });
        yield put({
            type: (data || {}).status === 200 ? TOAST_SUCCESS : TOAST_ERROR,
            message: (data || {}).message || "Challenge Price Submitted Successfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: CHALLENGE_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}
export function* postCPformMegaSave(action) {
    try{
        yield put({
            type: CHALLENGE_PRICE_SUBMITTING
        });
        const data = yield call(putDataWithToken, CP_FORM_MEGA_SAVE_URL,  action.data);
        yield put({
            type: CHALLENGE_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: data && data.message?data.message:"Oops! Something Went Wrong"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: CHALLENGE_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}
export function* sendLOI(action) {
    try{
        yield put({
            type: SEND_LOI_SUBMITTING
        });
        const data = yield call(putDataWithToken, SEND_LOI_URL,  action.data);
        yield put({
            type: SEND_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: "LOI Sent Successfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: SEND_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}
export function* getTransporters(action) {
    try{
        yield put({
            type: GET_SEEKER_TRANSPORTERS_LOADING
        });
        const data = yield call(getDataWithToken, SEEKER_TRANSPORTERS_LIST_URL,  action.params);
        const rfq = transformRfq(data.data.rfq);
        const transporters = data.data.list.map((transporter)=> {
            return new Transporter(transporter);
        });
        yield put({
            type: GET_SEEKER_TRANSPORTERS_SUCCESS,
            transporters,
            rfq
        });
        if(action.onSuccess) {
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: GET_SEEKER_TRANSPORTERS_SUCCESS,
            transporters: [],
            rfq: new RFQ()
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}
export function* getTransporterBids(action) {
    try{
        yield put({
            type: GET_SEEKER_TRANSPORTER_BIDS_LOADING
        });
        const data = yield call(getDataWithToken, SEEKER_TRANSPORTER_BIDS_URL,  action.params);
        const trips = data.data.list.map((trip)=> {
            return new Trip(trip);
        });
        const transporter = new Transporter(data.data.transporter_details);
        yield put({
            type: GET_SEEKER_TRANSPORTER_BIDS_SUCCESS,
            trips,
            transporter,
            otherCharges: data && data.data && data.data.other_charges_list || []
        });
        if(action.onSuccess) {
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}


export function* postCounter(action) {
    try{
        yield put({
            type: COUNTER_PRICE_SUBMITTING
        });
        const data = yield call(putDataWithToken, COUNTER_PRICE_URL,  action.params);
        yield put({
            type: COUNTER_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: (data || {}).message || "Counter Price Submitted Successfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: COUNTER_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* postCounterForSeeker(action) {
    try{
        yield put({
            type: COUNTER_PRICE_SUBMITTING
        });
        const data = yield call(putDataWithToken, COUNTER_SEEKER_URL,  action.params);
        yield put({
            type: COUNTER_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: data && data.message ? data.message : "Counter Price Updated Successfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: COUNTER_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* acceptRejectLoi(action) {
    try{
        yield put({
            type: ACCEPT_REJECT_LOI_SUBMITTING
        });
        const data = yield call(putDataWithTokenToIndents, ACCEPT_REJECT_LOI_URL,  action.data);
        yield put({
            type: ACCEPT_REJECT_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Updated The Status"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: COUNTER_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}
export function* acceptRejectCP(action) {
    try{
        yield put({
            type: ACCEPT_REJECT_LOI_SUBMITTING
        });
        const data = yield call(putDataWithToken, ACCEPT_REJECT_CP_URL,  action.data);
        yield put({
            type: ACCEPT_REJECT_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Updated The Status"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        // yield put({
        //     type: COUNTER_PRICE_SUCCESS,
        // });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}
export function* changeBidEnd(action) {
    try{
        const data = yield call(putDataWithToken, CHANGE_BID_END_URL,  action.data);
        yield put({
            type: ACCEPT_REJECT_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Updated Bid End Time"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}
export function* changeTripBidEnd(action) {
    try{
        const data = yield call(putDataWithToken, CHANGE_TRIP_BID_END_URL,  action.data);
        // yield put({
        //     type: ACCEPT_REJECT_LOI_SUCCESS,
        // });
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Updated Bid End Time"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* getDownloadBiddingDetails(action) {
    try{
        let data;
        yield put({
            type: DOWNLOAD_BIDDING_DETAILS_SUBMITTING
        });
        if(action.whoami === TRANSPORTER) {
            let url = (action.params.serviceType === 2) ? DOWNLOAD_COURIER_BIDDING_PROVIDER_URL : (action.params.serviceType === 4)? DOWNLOAD_MULTI_MODE_BID_DETAILS_TRANSPORTER_URL: DOWNLOAD_BIDDING_DETAILS_TRANSPORTER_URL;
            data = yield call(getDataWithToken, url, action.params);
        } else {
            let url =(action.params.serviceType === 3) ? DOWNLOAD_COURIER_TRIPS_TEMPLATE_URL : DOWNLOAD_BIDDING_DETAILS_URL;
            data = yield call(getDataWithToken, url, action.params);
        }
        yield put({
            type: DOWNLOAD_BIDDING_DETAILS_SUCCESS,
            url: data.data.link
        });
        if(action.onSuccess) {
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: DOWNLOAD_BIDDING_DETAILS_SUCCESS,
            url: '/'
        });
        
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}
export function* uploadBiddingDetails(action) {
    try{
        let data
        yield put({
            type: UPLOAD_BIDDING_DETAILS_SUBMITTING
        });
        if(action.whoami === TRANSPORTER) {
            let url = (action.params.serviceType === 2) ? UPLOAD_COURIER_BIDDING_PROVIDER_URL :(action.params.serviceType === 4)?UPLOAD_MULTI_MODE_BID_TRANSPORTER_URL: UPLOAD_BIDDING_DETAILS_TRANSPORTER_URL;
            data = yield call(uploadFile, url, action.file, action.params);
        } else {
            // data = yield call(uploadFileWithSyncCalls, UPLOAD_BIDDING_DETAILS_URL, action.file, action.params);
            let url = (action.params && action.params.serviceType === 3 ) ? UPLOAD_COURIER_TRIPS_URL : FILE_UPLOAD_POST_API_URL;
            data = yield call(uploadFileWithSyncCalls, url, action.file, action.params);
        }
        yield put({
            type: UPLOAD_BIDDING_DETAILS_SUCCESS
        });
        
        yield put({
            type: (data.status === 400) ? TOAST_ERROR : TOAST_SUCCESS,
            duration: 6,
            message: data && data.message ? data.message : "Bidding Details Uploaded Successfully"
        });
        if(action.onSuccess) {
            console.log('ON SUCCESS BIDDING DETASILS');
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: UPLOAD_BIDDING_DETAILS_SUCCESS
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}
export function* postChallengePriceForm(action) {
    try{
        yield put({
            type: POST_CHALLENGE_PRICE_FORM_SUBMITTING
        });
        const data = yield call(putDataWithToken, CHALLENGE_PRICE_FORM_URL, action.data);
        yield put({
            type: POST_CHALLENGE_PRICE_FORM_SUCCESS
        });
        // yield put({
        //     type: TOAST_SUCCESS,
        //     message: 'Challenge price successfully updated'
        // });
        if(action.onSuccess) {
            action.onSuccess(data);
        }

    } catch(e) {
        console.log('ERROR', e);
        yield put({
            type: POST_CHALLENGE_PRICE_FORM_SUCCESS
        });
        // yield put({
        //     type: TOAST_ERROR,
        //     message: e && e.message?e.message:"Oops! Something Went Wrong"
        // });
        if(action.onError) {
            action.onError(e);
        }
    }
}

export function* getLPPDetails(action) {
    try { 
        const data = yield call(postLPPDataWithoutToken, LPP_GET_API_URL, action.data);
        
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        console.log('ERROR', e);
        if(action.onError) {
            action.onError(e)
        }
    }
}


export function* getCPLPPDetails(action) {
    try { 
        const data = yield call(postDataWithoutToken, CP_LPP_URL, { ... action.data });

        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        if(action.onError) {
            action.onError(e)
        }
    }
}


export function* sendExtendDate(action) {
    try{
        yield put({
            type: SAVE_EXTEND_DATE_SUBMITTING
        });
        const data = yield call(putDataWithToken, EDIT_CONTRACT_TO_DATE_URL, action.data);
        yield put({
            type: SAVE_EXTEND__DATE_SUCCESS
        });
        yield put({
            type: TOAST_SUCCESS,
            message: data && data.message?data.message:"Oops! Something Went Wrong"
        });
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}


export function* sendLOIForApprover(action) {
    try{
        yield put({
            type: ADD_LOI_SUBMITTING
        });
        const data = yield call(putDataWithToken, ADD_LOI_APPROVER_URL,  action.data);
        yield put({
            type: ADD_LOI_SUCCESS,
        });
        
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Sent LOI For Approver"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: ADD_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* sendApproverMessageForUser(action) {
    try{
        const data = yield call(putDataWithToken, SEND_APPROVER_LOI_MESSAGE_URL,  action.data);
        yield put({
            type: ACCEPT_REJECT_LOI_SUCCESS,
        });
        
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Sent Message For User"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* updateTk11Data(action) {
    try {
        const data = yield call(putDataWithToken, EDIT_TK11_CONTRACT_DATA_URL, action.data);
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Sent Message For User"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        console.log('ERROR', e);
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }

    }
}
export function* deleteTripDetails(action) {
    try{
        const data = yield call(deleteDataWithToken, DELETE_TRIP_DETAILS_URL, action.data);
       yield put({
        type: DELETE_TRIP_DETAILS_SUCCESS
        });
        
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Delete Trip Details"
        });
        
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }

}
export function* changeTripBaseVolume(action) {
    try{
        const data = yield call(putDataWithToken, CHANGE_TRIP_BASE_VOLUME_URL,  action.data);
        // yield put({
        //     type: ACCEPT_REJECT_LOI_SUCCESS,
        // });
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Updated Base Volume"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* postOtherCostCP(action) {
    try{
        yield put({
            type: CHALLENGE_PRICE_SUBMITTING
        });
        const data = yield call(putDataWithToken, POST_OTHER_COST_CP_URL,  action.data);
        yield put({
            type: CHALLENGE_PRICE_SUCCESS,
        });
        yield put({
            type: (data || {}).status === 200 ? TOAST_SUCCESS : TOAST_ERROR,
            message: (data || {}).message || "Challenge Price Submitted Successfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: CHALLENGE_PRICE_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* otherCostAcceptRejectCP(action) {
    try{
        yield put({
            type: ACCEPT_REJECT_LOI_SUBMITTING
        });
        const data = yield call(putDataWithToken, OTHER_COST_ACCEPT_REJECT_CP_URL,  action.data);
        yield put({
            type: ACCEPT_REJECT_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully Updated The Status"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        // yield put({
        //     type: COUNTER_PRICE_SUCCESS,
        // });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}


export function* getDownloadBiddingTrailDetails(action) {
    try{
        let data;
        yield put({
            type: DOWNLOAD_BIDDING_TRAIL_SUBMITTING
        });
        if(action.whoami === TRANSPORTER) {
            data = yield call(getDataWithToken, DOWNLOAD_BIDDING_PROVIDER_TRAIL_URL, action.params);
        } else {
            data = yield call(getDataWithToken, DOWNLOAD_BIDDING_SEEKER_TRAIL_URL, action.params);
        }
        yield put({
            type: DOWNLOAD_BIDDING_TRAIL_SUCCESS,
            url: data.data.link
        });
        if(action.onSuccess) {
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: DOWNLOAD_BIDDING_TRAIL_SUCCESS,
            url: '/'
        });
        
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* getCourierServiceCategory(action) {
	try {
		let data;
		yield put({
			type: DOWNLOAD_BIDDING_DETAILS_SUBMITTING
		});
		let url = PROVIDER_DOWNLOAD_SERVICE_CATEGORY_TEMPLATE_URL;
		data = yield call(getDataWithToken, url, action.params);
		
		yield put({
			type: DOWNLOAD_BIDDING_DETAILS_SUCCESS,
			url: data.data.link
		});
		if (action.onSuccess) {
			action.onSuccess(data.data);
		}
	} catch (e) {
		yield put({
			type: DOWNLOAD_BIDDING_DETAILS_SUCCESS,
			url: '/'
		});

		yield put({
			type: TOAST_ERROR,
			message: e && e.message ? e.message : "Oops! Something Went Wrong"
		});
	}
}

export function* uploadCourierServiceCategory(action) {
	try {
		let data
		yield put({
			type: UPLOAD_BIDDING_DETAILS_SUBMITTING
		});
		let url = PROVIDER_UPLOAD_SERVICE_CATEGORY_TEMPLATE_URL
		data = yield call(uploadFile, url, action.file);
		yield put({
			type: UPLOAD_BIDDING_DETAILS_SUCCESS
		});
		yield put({
			type: TOAST_SUCCESS,
			duration: 6,
			message: data && data.message ? data.message : "File Uploaded Uploaded Successfully"
		});
		if (action.onSuccess) {
			action.onSuccess(data.data);
		}
	} catch (e) {
		yield put({
			type: UPLOAD_BIDDING_DETAILS_SUCCESS
		});
		yield put({
			type: TOAST_ERROR,
			message: e && e.message ? e.message : "Oops! Something Went Wrong"
		});
	}
}


export function* clearMessage(action) {
    try{
        let data;
        // yield put({
        //     type: CLEAR_MESSAGE_SUBMITTING
        // });
            data = yield call(putDataWithToken, CLEAR_MESSAGE_URL, action.params);
        yield put({
            type: CLEAR_MESSAGE_SUCCESS,
        });
        if(action.onSuccess) {
            action.onSuccess(data.message);
        }
    } catch(e) {
        yield put({
            type: CLEAR_MESSAGE_SUCCESS,
        });
        
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* getSystemSuggestedPrice(action) {
    try { 
        const data = yield call(getDataSSPWithToken, SYSTEM_SUGGESTED_PRICE_URL , action.data);
        
        if(action.onSuccess) {
            action.onSuccess(data.data);
        }
    } catch(e) {
        console.log('ERROR', e);
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* checkContractExist(action) {
    try {
        const data = yield call(getDataWithToken, CHECK_CONTRACT_EXIST_URL , action.data);
        
        if(action.onSuccess) {
            action.onSuccess(data.data || {});
        }

    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    } 
}

export function* calculateFreightRate(action) {
    try {
        const data = yield call(getDataWithToken, FREIGHT_CALCULATATION_URL, action.params);
        
        if(action.onSuccess) {
            action.onSuccess(data.data && data.data[0] || {});
        }

    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    } 
}

export function* getOtherLPPDetails(action) {
    try { 
        const data = yield call(getDataWithToken, GET_OTHERS_LPP_URL , action.data);
        
        if(action.onSuccess) {
            action.onSuccess(data.data || {})
        }
    } catch(e) {
        console.log('ERROR', e);
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* getAmmendentlist(action) {
    try{
         yield put({
             type: GET_AMMENDMENT_STARTED, 
             data: true
         });
        const data = yield call(getLCLDataWithToken, AMMENDMENT_LIST_URL, action.params);
        yield put({
            type: SAVE_AMMENDMENT_DATA_LIST,
            data: data.data || [],
            count: data.count || {}
        });
        /*if(action.onSuccess) {
            action.onSuccess();
        }*/
    } catch(e) {
        yield put({
            type: GET_AMMENDMENT_STARTED,
            data: false 
        })
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}
export function* getDownloadBiddingRate(action) {
    try{
        let data;
        yield put({
            type: DOWNLOAD_BIDDING_RATE_SUBMITTING
        });
        
            data = yield call(getDataWithToken, DOWNLOAD_BID_RATE_TEMPLATE_URL, action.params);
        
        yield put({
            type: DOWNLOAD_BIDDING_RATE_SUCCESS,
            url: data.data.link
        });
        if(action.onSuccess) {
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: DOWNLOAD_BIDDING_RATE_SUCCESS,
            url: '/'
        });
        /*if(action.onError) {
            action.onError();
        }*/
    }
}

export function* putAmmendmentApproval(action) {
    try{
        //let data;
        yield put({
             type: PUT_AMMENDMENT_APPROVE_STARTED,
             data: true
         });
            const data = yield call(putLCLDataWithToken, AMMENDMENT_APPROVE_URL, action.params);
        yield put({
            type: TOAST_SUCCESS,
            message: data && data.message?data.message:"Updated Successfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.message);
        }
    } catch(e) {
        yield put({
            type: PUT_AMMENDMENT_APPROVE_STARTED
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* uploadBiddingRate(action) {
    try{
        let data
        yield put({
            type: UPLOAD_BIDDING_RATE_SUBMITTING
        });
        
            data = yield call(uploadFileWithSyncCalls, UPLOAD_BID_RATE_URL, action.file, action.params);
        
        yield put({
            type: UPLOAD_BIDDING_RATE_SUCCESS
        });
        
        yield put({
            type: (data.status === 400) ? TOAST_ERROR : TOAST_SUCCESS,
            duration: 6,
            message: data && data.message ? data.message : "Bidding Details Uploaded Successfully"
        });
        if(action.onSuccess) {
            console.log('ON SUCCESS BIDDING DETASILS');
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: UPLOAD_BIDDING_RATE_SUCCESS
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* getDownloadTrucksDetails(action) {
    try{
        let data;
        yield put({
            type: DOWNLOAD_TRUCKS_SUBMITTING
        });
        
      data = yield call(getDataWithToken, DOWNLOAD_TRUCKS_DETAILS_TEMPLATE_URL, action.params);
        
        yield put({
            type: DOWNLOAD_TRUCKS_SUCCESS,
            url: data.data.link
        });
        if(action.onSuccess) {
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: DOWNLOAD_TRUCKS_SUCCESS,
            url: '/'
        });
        /*if(action.onError) {
            action.onError();
        }*/
    }
}


export function* uploadTrucksDetails(action) {
    try{
        let data
        yield put({
            type: UPLOAD_NUMBER_OF_TRUCKS_SUBMITTING
        });
        
            data = yield call(uploadFileWithSyncCalls, UPLOAD_TRUCKS_DETAILS_URL, action.file, action.params);
        
        yield put({
            type: UPLOAD_NUMBER_OF_TRUCKS_SUCCESS
        });
        
        yield put({
            type: (data.status === 400) ? TOAST_ERROR : TOAST_SUCCESS,
            duration: 6,
            message: data && data.message ? data.message : "Trucks Details Uploaded Successfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data);
        }
    } catch(e) {
        yield put({
            type: UPLOAD_NUMBER_OF_TRUCKS_SUCCESS
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* saveNumberOfVehiclePlaced(action) {
    try{
        yield put({
            type: NUMBER_OF_VEHICLE_PLACED_SUBMITTING
        });
        const data = yield call(putDataWithToken, NUMBER_OF_VEHICLE_PLACED_URL,  action.data);
        yield put({
            type: NUMBER_OF_VEHICLE_PLACED_SUCCESS,
        });
        yield put({
            type: (data.status === 400) ? TOAST_ERROR : TOAST_SUCCESS,
            duration: 6,
            message: data && data.message ? data.message : "Placed number of vehicle successfully!!"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: NUMBER_OF_VEHICLE_PLACED_SUCCESS,
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* getExistingContracts(action) {
    try{
        yield put({
            type: START_LOADER
        });
        yield put({
            type: GET_EXISTING_CONTRACT_DETAILS_SUBMITTING
        })
        const data = yield call(getDataWithToken, EXISITING_CONTRACT_DETAILS_URL,  action.params);
        yield put({
            type: GET_EXISTING_CONTRACT_DETAILS_SUCCESS,
            data: data.data || []
        });
        yield put({
            type: END_LOADER
        });
    } catch(e) {
        yield put({
            type: GET_EXISTING_CONTRACT_DETAILS_SUCCESS,
            data: []
        });
        yield put({
            type: END_LOADER
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* postGenerateContractDetails(action) {
    try{
        yield put({
            type: START_LOADER
        });
        const data = yield call(postDataWithToken, GENERATE_CONTRACT_URL,  action.data);
        if(action.onSuccess) {
            action.onSuccess();
        }
        yield put({
            type: END_LOADER
        });
        yield put({
            type: TOAST_SUCCESS,
            message: data && data.message || "Contract Generated Successfully"
        });
    } catch(e) {
        yield put({
            type: END_LOADER
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* downloadMultiModeContracts(action) {
    try{
        yield put({
            type: START_LOADER
        });
        const data = yield call(getDataWithToken, DOWNLOAD_MULTIMODE_EXISITING_CONTRACT_URL, action.data);
        if(action.onSuccess && data && data.data) {
            action.onSuccess(data && data.data);
        }
        yield put({
            type: END_LOADER
        });
    } catch(e) {
        yield put({
            type: END_LOADER
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* uploadMultiModeContracts(action) {
    try{
        yield put({
            type: START_LOADER
        });
        const data = yield call(uploadFile, UPLOAD_MULTIMODE_EXISITING_CONTRACT_URL, action.file);
        if(action.onSuccess) {
            action.onSuccess();
        }
        yield put({
            type: END_LOADER
        });
    } catch(e) {
        yield put({
            type: END_LOADER
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}


export function* revokeWithdrawBid(action) {
    try{
        
        yield put({
            type: REVOKE_WITHDRAW_BID_SUBMITTING
        });
        const data = yield call(putDataWithToken, REVOKE_WITHDRAW_BID_URL, action.data);

        yield put({
            type: (data.status === 400) ? TOAST_ERROR : TOAST_SUCCESS,
            message: "Successfully Revoke Bid withdrawn",
            duration: 8
        });
        yield put({
            type: REVOKE_WITHDRAW_BID_SUCCESS
         });
        
    } catch(e) {
        yield put({
            type: REVOKE_WITHDRAW_BID_SUCCESS
         });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* getGeneratedContracts(action) {
    try{
        yield put({
            type: START_LOADER
        });
        const data = yield call(getDataWithToken, GENERATED_CONTRACTS_LIST_URL);
        if(action.onSuccess) {
            action.onSuccess();
        }
        yield put({
            type: GET_GENERATED_CONTRACT_DETAILS_SUCCESS,
            data: data.data || []
        })
        yield put({
            type: END_LOADER
        });
    } catch(e) {
        yield put({
            type: GET_GENERATED_CONTRACT_DETAILS_SUCCESS,
            data: []
        });
        yield put({
            type: END_LOADER
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* rfqClosed(action) {
    try{
        const data = yield call(putDataWithToken, CLOSED_RFQ_URL,  action.data);
        yield put({
            type: ACCEPT_REJECT_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: "Successfully RFQ Closed"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* acceptanceCeilingPrice(action) {
    try{
        const data = yield call(putDataWithToken, ACCEPTANCE_OF_CEILING_PRICE_URL,  action.data);
        yield put({
            type: ACCEPT_REJECT_LOI_SUCCESS,
        });
        yield put({
            type: TOAST_SUCCESS,
            message: "Sent Sucessfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }
    } catch(e) {
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* cancelledLoi(action) {
    try{
        yield put({
            type: LOI_CANCELLED_SUBMITTING,
        });
        const data = yield call(putDataWithToken, CANCELLED_LOI_URL,  action.data);
       
        yield put({
            type: TOAST_SUCCESS,
            message: "LOI Cancelled Sucessfully"
        });
        if(action.onSuccess) {
            action.onSuccess(data.data)
        }

        yield put({
            type: LOI_CANCELLED_UPDATED_SUCCESS
         });
    } catch(e) {

        yield put({
            type: LOI_CANCELLED_UPDATED_SUCCESS
         });

        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
        if(action.onError) {
            action.onError(e)
        }
    }
}

export function* downloadAwlMultiModeTemplate(action) {
    try{
        yield put({
            type: START_LOADER
        });
        const data = yield call(getDataWithToken, DOWNLOAD_AWL_MULTIMODE_TEMPLATE_URL, action.params);
        if(action.onSuccess && data && data.data) {
            action.onSuccess(data && data.data);
        }
        yield put({
            type: data.status === 200 ? TOAST_SUCCESS : TOAST_ERROR,
            message: data.message
        });
        yield put({
            type: END_LOADER
        });
    } catch(e) {
        yield put({
            type: END_LOADER
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* uploadAwlMultiModeTrips(action) {
    try{
        yield put({
            type: START_LOADER
        });
        const data = yield call(uploadFile, UPLOAD_AWL_MULTIMODE_EXCEL_URL, action.file, action.params);
        if(action.onSuccess) {
            action.onSuccess(data.data || {});
        }
        yield put({
            type: data.status === 200 ? TOAST_SUCCESS : TOAST_ERROR,
            message: data.message || 'Uploaded Successfully'
        });
        yield put({
            type: END_LOADER
        });
    } catch(e) {
        yield put({
            type: END_LOADER
        });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

export function* getCargoShipmentTrackingData(action) {
    try{
        yield put({
            type: START_LOADER
        });
        const data = yield call(postDataWithToken, action.cargoType === 2 ? AIR_SHIPMENT_TRACKING_URL : (action.trackingType === 1 ? CONTAINER_SHIPMENT_TRACKING_URL : BL_SHIPMENT_TRACKING_URL), action.data);
        yield put({
           type: SAVE_CARGO_SHIPMENT_TRACKING_DATA,
           data: data.data || []
        })
        yield put({
            type: END_LOADER
        });
    } catch(e) {
        yield put({
            type: END_LOADER
        });
        yield put({
            type: SAVE_CARGO_SHIPMENT_TRACKING_DATA,
            data: []
        })
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        });
    }
}

