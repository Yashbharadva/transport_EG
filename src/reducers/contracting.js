import { 
    GET_SEEKER_TRANSPORTERS_SUCCESS,
    GET_SEEKER_TRANSPORTERS_LOADING,
    CLEAR_SEEKER_TRANSPORTERS_LOADING,

    GET_SEEKER_TRANSPORTER_BIDS_SUCCESS,
    GET_SEEKER_TRANSPORTER_BIDS_LOADING,
    CLEAR_SEEKER_TRANSPORTER_BIDS,

    CHALLENGE_PRICE_SUBMITTING,
    CHALLENGE_PRICE_SUCCESS,

    SEND_LOI_SUBMITTING,
    SEND_LOI_SUCCESS,

    ACCEPT_REJECT_LOI_SUBMITTING,
    ACCEPT_REJECT_LOI_SUCCESS,

    UPLOAD_BIDDING_DETAILS_SUBMITTING,
    UPLOAD_BIDDING_DETAILS_SUCCESS,

    DOWNLOAD_BIDDING_DETAILS_SUBMITTING,
    DOWNLOAD_BIDDING_DETAILS_SUCCESS,

    POST_CHALLENGE_PRICE_FORM_SUCCESS,
    POST_CHALLENGE_PRICE_FORM_SUBMITTING,
    UPDATE_LPP_DATA,
    SAVE_EXTEND_DATE_SUBMITTING,
    SAVE_EXTEND__DATE_SUCCESS,
    DELETE_TRIP_DETAILS_SUCCESS,
    SAVE_COURIER_TRIP_DETAILS,
    ADD_LOI_SUBMITTING,
    ADD_LOI_SUCCESS,
    DOWNLOAD_BIDDING_TRAIL_SUCCESS,
    DOWNLOAD_BIDDING_TRAIL_SUBMITTING,
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
    START_LOADER,
    END_LOADER,
    REVOKE_WITHDRAW_BID_SUBMITTING,
    REVOKE_WITHDRAW_BID_SUCCESS,
    LOI_CANCELLED_UPDATED_SUCCESS,
    LOI_CANCELLED_SUBMITTING,
    SAVE_CARGO_SHIPMENT_TRACKING_DATA
} from 'Constants/actionConstants';
import { Courier_data } from 'Constants/commonConstants';

const contracting = (state={
    transportersList: {
        data: [],
        dataLoading: false
    }, transporterBids: {
        data: [],
        dataLoading: false
    }, challengePrice: {
        dataSubmitting: false
    }, sendLoi: {
        dataSubmitting: false
    }, acceptRejectLoi: {
        dataSubmitting: false
    }, uploadBiddingDetails: {
        dataSubmitting: false
    }, downloadBiddingDetails: {
        dataSubmitting: false
    }, challengePriceForm: {
        dataSubmitting: false
    }, extendEditDate:{
        dataSubmitting:false
    },deleteTripDetails :{
        dataSubmitting: false
    },loiCancelled:{
        dataSubmitting: false
    },
    courierTripDetails: Courier_data || {},
    sendLOIForApprover:{
        dataSubmitting: false
    },downloadBidTrailDetails: {
        dataSubmitting: false
    }, 
    ammendmentDetails: {
        loading: false,
        data: [],
        count: {}
    },
    ammendmentApproval: {
        loading: false
    }, downloadBidRate :{
        dataSubmitting: false
    }, uploadBidRate : {
        dataSubmitting: false
    }, downloadTruckDetails:{
        dataSubmitting: false
    }, uploadTrucksDetails:{
        dataSubmitting: false
    }, numberOfVehiclePlaced : {
        dataSubmitting: false
    },
    existingContracts: {
        data: [],
        dataSubmitting: false
    },
    generatedContracts: [],
    loader: false,
    trackingData: [],
    revokeWithrawBid :{
        dataSubmitting: false
    }
}, action)=> {
    let newState;
    if(action.type === GET_SEEKER_TRANSPORTERS_SUCCESS) {
        newState = {...state};
        newState.transportersList.data = action.transporters;
        newState.transportersList.dataLoading = false;
        newState.transportersList.rfq = action.rfq;
    } else if(action.type === GET_SEEKER_TRANSPORTERS_LOADING) {
        newState = {...state};
        newState.transportersList.dataLoading = true;
    }
    else if(action.type === CLEAR_SEEKER_TRANSPORTERS_LOADING) {
        newState = {...state};
        newState.transportersList.data = [];
    }
    else if(action.type === GET_SEEKER_TRANSPORTER_BIDS_SUCCESS) {
        newState = {...state};
        newState.transporterBids.data = action.trips;
        newState.transporterBids.transporter = action.transporter;
        newState.transporterBids.dataLoading = false;
    } else if(action.type === GET_SEEKER_TRANSPORTER_BIDS_LOADING) {
        newState = {...state};
        newState.transporterBids.dataLoading = true;
    } else if(action.type === CLEAR_SEEKER_TRANSPORTER_BIDS) {
        newState = {...state};
        newState.transporterBids.data = [];
    } else if(action.type === CHALLENGE_PRICE_SUBMITTING) {
        newState = {...state};
        newState.challengePrice.dataSubmitting = true;
    } else if(action.type === CHALLENGE_PRICE_SUCCESS) {
        newState = {...state};
        newState.challengePrice.dataSubmitting = false;
    } else if(action.type === SEND_LOI_SUBMITTING) {
        newState = {...state};
        newState.sendLoi.dataSubmitting = true;
    } else if(action.type === SEND_LOI_SUCCESS) {
        newState = {...state};
        newState.sendLoi.dataSubmitting = false;
    } else if(action.type === ACCEPT_REJECT_LOI_SUBMITTING) {
        newState = {...state};
        newState.acceptRejectLoi.dataSubmitting = true;
    } else if(action.type === ACCEPT_REJECT_LOI_SUCCESS) {
        newState = {...state};
        newState.acceptRejectLoi.dataSubmitting = false;
    } else if(action.type === UPLOAD_BIDDING_DETAILS_SUBMITTING) {
        newState = {...state};
        newState.uploadBiddingDetails.dataSubmitting = true;
    } else if(action.type === UPLOAD_BIDDING_DETAILS_SUCCESS) {
        newState = {...state};
        newState.uploadBiddingDetails.dataSubmitting = false;
    } else if(action.type === DOWNLOAD_BIDDING_DETAILS_SUBMITTING) {
        newState = {...state};
        newState.downloadBiddingDetails.dataSubmitting = true;
    } else if(action.type === DOWNLOAD_BIDDING_DETAILS_SUCCESS) {
        newState = {...state};
        newState.downloadBiddingDetails.dataSubmitting = false;
    } else if(action.type === POST_CHALLENGE_PRICE_FORM_SUBMITTING) {
        newState = {...state};
        newState.challengePriceForm.dataSubmitting = true;
    } else if(action.type === POST_CHALLENGE_PRICE_FORM_SUCCESS) {
        newState = {...state};
        newState.challengePriceForm.dataSubmitting = false;
    } else if (action.type === UPDATE_LPP_DATA) {
        newState = {...state};
        newState.lppData = action.data;
    }else if(action.type===SAVE_EXTEND_DATE_SUBMITTING){
        newState = {...state};
        newState.extendEditDate.dataSubmitting = true;
    }else if(action.type===SAVE_EXTEND__DATE_SUCCESS){
        newState = {...state};
        newState.extendEditDate.dataSubmitting = false;
    }else if(action.type === DELETE_TRIP_DETAILS_SUCCESS) {
        newState = {...state};
        newState.deleteTripDetails.dataSubmitting = false;
    }else if(action.type === SAVE_COURIER_TRIP_DETAILS) {
        newState = {...state};
        newState.courierTripDetails = action.data;
    }else if(action.type  == ADD_LOI_SUBMITTING){
        newState = {...state};
        newState.sendLOIForApprover.dataSubmitting = true;
    }else if(action.type === ADD_LOI_SUCCESS) {
        newState = {...state};
        newState.sendLOIForApprover.dataSubmitting = false;
    }else if(action.type === DOWNLOAD_BIDDING_TRAIL_SUBMITTING){
        newState = {...state};
        newState.downloadBidTrailDetails.dataSubmitting = true; 
    }else if(action.type === DOWNLOAD_BIDDING_TRAIL_SUCCESS){
        newState = {...state};
        newState.downloadBidTrailDetails.dataSubmitting = false;
    }else if(action.type == GET_AMMENDMENT_STARTED){
        newState = {...state};
        newState.ammendmentDetails.loading = action.data;
        newState.ammendmentDetails.data = [];
        newState.ammendmentDetails.count = {};
    }else if(action.type == SAVE_AMMENDMENT_DATA_LIST){
        newState = {...state};
        newState.ammendmentDetails.loading = false;
        newState.ammendmentDetails.data = action.data;//action.data
        newState.ammendmentDetails.count = action.count;
    }else if(action.type == PUT_AMMENDMENT_APPROVE_STARTED){
        newState = {...state};
        newState.ammendmentApproval.loading = action.data;
    }else if(action.type == SAVE_AMMENDMENT_APPROVE_LIST){
        newState = {...state};
        newState.ammendmentApproval.loading = false;
    }else if(action.type === DOWNLOAD_BIDDING_RATE_SUBMITTING) {
        newState = {...state};
        newState.downloadBidRate.dataSubmitting = true;
    } else if(action.type === DOWNLOAD_BIDDING_RATE_SUCCESS) {
        newState = {...state};
        newState.downloadBidRate.dataSubmitting = false;
    } else if(action.type === UPLOAD_BIDDING_RATE_SUBMITTING){
        newState = {...state};
        newState.uploadBidRate.dataSubmitting = true;
    }else if(action.type === UPLOAD_BIDDING_RATE_SUCCESS) {
        newState = {...state};
        newState.uploadBidRate.dataSubmitting = false;
    }else if(action.type ===  DOWNLOAD_TRUCKS_SUBMITTING){
        newState = {...state};
        newState.downloadTruckDetails.dataSubmitting = true;
    }else if(action.type ===  DOWNLOAD_TRUCKS_SUCCESS){
        newState = {...state};
        newState.downloadTruckDetails.dataSubmitting = false;
    }else if(action.type ===  UPLOAD_NUMBER_OF_TRUCKS_SUBMITTING){
        newState = {...state};
        newState.uploadTrucksDetails.dataSubmitting = true;
    } else if(action.type ===  UPLOAD_NUMBER_OF_TRUCKS_SUCCESS){
        newState = {...state};
        newState.uploadTrucksDetails.dataSubmitting = false;
    } else if(action.type ===  NUMBER_OF_VEHICLE_PLACED_SUBMITTING){
        newState = {...state};
        newState.numberOfVehiclePlaced.dataSubmitting = true;
    } else if(action.type ===  NUMBER_OF_VEHICLE_PLACED_SUCCESS ){
        newState = {...state};
        newState.numberOfVehiclePlaced.dataSubmitting = false;
    } else if(action.type === GET_EXISTING_CONTRACT_DETAILS_SUBMITTING) {
        newState = {...state};
        newState.existingContracts.dataSubmitting = false;
    } else if(action.type === GET_EXISTING_CONTRACT_DETAILS_SUCCESS) {
        newState = {...state};
        newState.existingContracts.dataSubmitting = true;
        newState.existingContracts.data = action.data || [];
    } else if(action.type === GET_GENERATED_CONTRACT_DETAILS_SUCCESS) {
        newState = {...state};
        newState.generatedContracts = action.data || [];
    } else if(action.type === START_LOADER) {
        newState = {...state};
        newState.loader = true;
    } else if(action.type === END_LOADER) {
        newState = {...state};
        newState.loader = false;
    }else if(action.type === REVOKE_WITHDRAW_BID_SUBMITTING){
        newState = {...state};
        newState.revokeWithrawBid.dataSubmitting = true;
    }else if(action.type ===  REVOKE_WITHDRAW_BID_SUCCESS ){
        newState = {...state};
        newState.revokeWithrawBid.dataSubmitting = false;
    }else if(action.type === LOI_CANCELLED_SUBMITTING){
        newState = {...state};
        newState.loiCancelled.dataSubmitting = true;
    }else if(action.type === LOI_CANCELLED_UPDATED_SUCCESS){
        newState = {...state};
        newState.loiCancelled.dataSubmitting = false;
    }else if(action.type === SAVE_CARGO_SHIPMENT_TRACKING_DATA) {
        newState = {...state};
        newState.trackingData = action.data || [];
    }
    return newState || state;
}

export default contracting;