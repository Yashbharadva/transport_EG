import { getToken, deleteToken, getUser } from 'Utils/storage';

// const baseUrl = process.env.BASE_URL; // new dev  
// const baseUrl = 'https://dev-apis-contracting.transporteg.com';
const baseUrl = 'https://beta-apis-contracting.transporteg.com';
// const baseUrl = 'https://tms-api-contracting.transporteg.com';
const adminBaseUrl = process.env.ADMIN_BASE_URL;

export const SSO_BASE_URL = process.env.SSO_BASE_URL;
// export const SSO_BASE_URL = 'https://beta-apis-auth.transporteg.com';
// export const SSO_BASE_URL = 'http://localhost:5000';
export const SSO_URL = '/sso';
export const SSO_USER_VALIDATE = '/sso/validate/';
export const SSO_DELETE_TOKEN = '/sso/logout/';

// ************************** Accounts Base Url ***************************** //
const accountsBaseUrl = process.env.ACCOUNTS_BASE_URL; 
// ************************************************************************** //

// ************************** Accept/Reject LOI ***************************** //
const acceptRejectURL = baseUrl;
// ************************************************************************** //

// **************************** LPP Calculations **************************** //
const LPP_BASE_URL = baseUrl;
// export const LPP_GET_API_URL = '/api/v1/contract-utils/lpp/';
export const LPP_GET_API_URL = '/api/v1/read/lpp/';
// ************************************************************************** //

// **************************** LPP Calculations **************************** //
const CP_LPP_BASE_URL = process.env.CP_LPP_BASE_URL;
// export const LPP_GET_API_URL = '/api/v1/contract-utils/lpp/';
// ************************************************************************** //

export const SEEKER_ACCOUNTS_URL = process.env.SEEKER_ACCOUNTS_URL; // Dev 
export const PROVIDER_ACCOUNTS_URL = process.env.PROVIDER_ACCOUNTS_URL;
// export const ACCOUNTS_URL = 'http://192.168.11.151:7001'; // Nehal Local 

export const SEEKER_INDENT_URL = process.env.SEEKER_INDENT_URL;
export const PROVIDER_INDENT_URL = process.env.PROVIDER_INDENT_URL;

// **************************** File Upload API ***************************** //
const FILE_UPLOAD_BASE_URL = process.env.FILE_UPLOAD_BASE_URL;
export const FILE_UPLOAD_POST_API_URL = '/api/0.1/write/rfq/template';
// ************************************************************************** //

export const LCL_BASE_URL = process.env.LCL_BASE_URL;
export const LCL_URL = process.env.LCL_URL;
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export const SIGN_IN_URL = '/api/0.1/write/company/login';
export const FORGOT_PASSWORD_URL = '/api/0.1/write/forgot/password';
export const RESET_PASSWORD_URL = '/api/0.1/write/resetpassword';
export const GROUPS_AND_TRANSPORTERS_URL = '/api/0.1/read/transporters';
export const TRANSPORTERS_URL = '/api/0.1/read/fetch/transportermapping';
export const VEHICLE_TYPES_URL = '/api/0.1/read/vehicle/types';
export const VEHICLE_BODY_TYPES_URL = '/api/0.1/read/vehicle/body/types';
export const PACKING_TYPES_URL = '/api/0.1/read/packing/types';
export const BUSINESS_VOLUME_URL = '/api/0.1/read/business/volume';
export const SLABS_URL = '/api/0.1/read/slabs';
export const PAYMENT_CYCLES_URL = '/api/0.1/read/payment/cycle';
export const PRICING_BASIS_URL = '/api/0.1/read/pricing/basis';
export const PRODUCT_CATEGORY_URL = '/api/0.1/read/product/category';

export const CREATE_RFQ_URL = '/api/0.1/write/create/rfq';

export const COPY_RFQ_URL = '/api/0.1/write/copy/rfq';

export const DISCARD_RFQ_URL = '/api/0.1/write/discard/rfq';

export const GET_TRIPS_URL = '/api/0.1/read/fetch/trips';

export const GET_TRIPS_TRANSPORTER_URL = '/api/0.1/read/provider/fetch/trips';

export const GET_QBR_URL = '/api/0.1/read/rfq/qbr';

export const ADD_TRIP_URL = '/api/0.1/write/add/trips';

export const DELETE_TRIP_URL = '/api/0.1/write/delete/trip';

export const GET_RFQS_URL = '/api/0.1/read/fetch/rfqs';

export const GET_RFQS_CONTRACT_URL = '/api/0.1/read/fetch/all/rfqs/contract/records';

export const GET_RFQS_CONTRACT_DETAILS_URL = '/api/0.1/read/fetch/contract/records/rfq';

export const RFQ_DETAIL_URL = '/api/0.1/read/fetch/rfq/id';

export const RFQ_DETAIL_TRANSPORTER_URL = '/api/0.1/read/provider/fetch/rfq/id';

export const UPLOAD_DOCUMENT = '/api/0.1/write/file/upload';

export const GET_RFQS_TRANSPORTER_URL = '/api/0.1/read/provider/fetch/contracts';

export const POST_BID_URL = '/api/0.1/write/provider/post/bid';

export const FETCH_BIDS_URL = '/api/0.1/write/provider/fetch/bids';

export const SEEKER_BIDS_URL = '/api/0.1/read/seeker/rfq/bids';

export const CHALLENGE_PRICE_URL = '/api/0.1/write/challenge/price';

export const CP_FORM_MEGA_SAVE_URL = '/api/0.1/write/challengeprice';

export const SEEKER_TRANSPORTERS_LIST_URL = '/api/0.1/read/seeker/rfq/transporters';

export const SEEKER_TRANSPORTER_BIDS_URL = '/api/0.1/read/seeker/rfq/bids/all';

export const SEND_LOI_URL = '/api/0.1/write/send/loi';

export const COUNTER_PRICE_URL = '/api/0.1/write/counter/offer';

export const COUNTER_SEEKER_URL = '/api/0.1/write/seeker/counter/offer';

export const ACCEPT_REJECT_LOI_URL = '/api/0.1/write/accept/reject/loi';

export const ACCEPT_REJECT_CP_URL = '/api/0.1/write/accept/reject/cp';

export const CHANGE_BID_END_URL = '/api/0.1/write/bid/time';

export const CHANGE_TRIP_BID_END_URL = '/api/0.1/write/bid/triptime';

export const GET_CHAT_MESSAGES_URL = '/api/0.1/read/fetch/chat';

export const SEND_CHAT_MESSAGES_URL = '/api/0.1/write/send/message';

export const DOWNLOAD_RFQ_TEMPALTE_URL = '/api/0.1/read/rfq/template';
export const UPLOAD_RFQ_URL = '/api/0.1/write/rfq/template';

export const DOWNLOAD_BIDDING_DETAILS_URL = '/api/0.1/read/rfq/template';
export const UPLOAD_BIDDING_DETAILS_URL = '/api/0.1/write/rfq/template';

export const DOWNLOAD_BIDDING_DETAILS_TRANSPORTER_URL = '/api/0.1/read/rfq/data';
export const UPLOAD_BIDDING_DETAILS_TRANSPORTER_URL = '/api/0.1/write/rfq/data';

export const DOWNLOAD_TRIPS_TEMPLATE_URL = '/api/0.1/read/rfq/template';
export const UPLOAD_TRIPS_URL = '/api/0.1/write/rfq/template';

export const GET_TRANSPORTERS_URL = '/api/0.1/read/fetch/transportermapping';
export const GET_GROUPS_URL = '/api/0.1/read/fetch/transportation/club';

export const CREATE_GROUP_URL = '/api/0.1/write/create/transportation/club';
export const EDIT_GROUP_URL = '/api/0.1/write/create/transportation/club';
export const DELETE_GROUP_URL = '/api/0.1/write/create/transportation/club';

export const CHALLENGE_PRICE_FORM_URL = '/api/0.1/write/trip';

export const HOLISTICS_URL = '/api/0.1/read/holistics/token';

export const RIL_HOLISTICS_URL = '/api/0.1/read/holistics/token/monthlyReport';

export const MARKET_ANALYSIS_URL = '/api/0.1/read/holistics/token/marketAnalysisReport';

export const ALLOCATIONS_URL = '/api/0.1/read/holistics/token/allocationReport';

export const GET_BRANCHES_URL = '/api/0.1/read/branches';

export const GET_USER_BRANCHES_URL = '/api/0.1/read/user/branches';

export const SEND_SFTP_URL = '/api/0.1/write/rfq/sftp';

export const GET_LOCATIONS_URL = '/api/0.1/read/fromtolocations/rfq';

export const UPLOAD_CP_FORM_DATA_URL = '/api/0.1/write/rfq/template';

export const DOWNLOAD_CP_FORM_DATA_URL = '/api/0.1/read/rfq/template';

export const AUTO_SUGGEST_LOCATIONS_URL = '/api/0.1/read/fromToLocations';

export const CP_LPP_URL = '/api/0.1/read/fetchlpp';

export const CANCEL_RFQ_URL = '/api/0.1/write/cancel/rfq';

export const FORGOT_PASSWORD_DETAILS_URL = '/api/0.1/write/updatepassword';

export const GET_ALL_SUBPLANTS_URL = '/api/0.1/read/fetch/subplants';

export const GET_ALL_END_TO_END_URL = '/api/0.1/read/holistics/token/endToend';

export const EDIT_CONTRACT_TO_DATE_URL = '/api/0.1/write/edit/contracttenure';

export const INDENT_MIS_URL = '/api/0.1/read/holistics/token/indentReport';

export const ADD_LOI_APPROVER_URL = '/api/0.1/write/rfq/loisendapprover';

export const SEND_APPROVER_LOI_MESSAGE_URL = '/api/0.1/write/send/message/touser';

export const GET_NETWORK_URL = '/api/0.1/read/contract/network';

export const GET_TRANSPORTER_PARTICIPATION_URL = '/api/0.1/read/holistics/token/transporterPerformance';

export const GET_ALL_VOLTAS_MIS_URL = '/api/0.1/read/holistics/token/voltasMis';

export const EDIT_TK11_CONTRACT_DATA_URL = '/api/0.1/write/resendcontractdata';

export const DELETE_TRIP_DETAILS_URL = '/api/0.1/write/delete/trip/details';

export const CHANGE_TRIP_BASE_VOLUME_URL = '/api/0.1/write/basevolume/trip';

export const GET_ROUTE_CODE_URL = '/api/0.1/read/fetchSapRouteCode';

export const SAVE_ROUTE_CODE_URL = '/api/0.1/write/addSapRouteCode';

export const EDIT_HEADING_CHARGES_URL = '/api/0.1/write/update/multi/mode/cost';

export const GET_SERVER_TIME_URL = '/api/0.1/read/fetch/current/system/time';

export const ADDED_TRIP_DELETE_URL = '/api/0.1/write/delete/trips/details';

export const GET_SECONDARY_TO_LOCATION_URL = '/api/0.1/read/fetchLocation/type';

export const POST_OTHER_COST_CP_URL = '/api/0.1/write/other/cost/challenge/price';

export const OTHER_COST_ACCEPT_REJECT_CP_URL = '/api/0.1/write/accept/reject/other/cost/cp';

export const SECONDARY_UPTO_KM_LIST_URL = '/api/0.1/read/fetchrange/list';

export const GET_MULTI_MODAL_REPORT_URL = '/api/0.1/read/holistics/token/multimodalmis';

export const DOWNLOAD_BIDDING_SEEKER_TRAIL_URL = '/api/0.1/read/bid/seeker/history/template';

export const DOWNLOAD_BIDDING_PROVIDER_TRAIL_URL = '/api/0.1/read/provider/bid/history/template';

export const TK11_EFFICIENCY_DASHBOARD_URL = '/api/0.1/read/holistics/token/tkefficiency';

export const FETCH_SEEKER_BIDS_URL = '/api/0.1/write/seeker/fetch/bids';

export const GET_MOVEMENTS_URL = '/api/0.1/read/fetchmovement/list';

export const GET_MODES_URL = '/api/0.1/read/fetchmode/list';

export const GET_ZONES_URL = '/api/0.1/read/fetchzone/list';

export const GET_COURIER_SLAB_URL = '/api/0.1/read/fetchslab/list';

export const GET_COURIER_TRIPS_URL = '/api/0.1/read/fetch/courier';

export const POST_COURIER_TRIPS_URL = '/api/0.1/write/add/courier';

export const DOWNLOAD_COURIER_TRIPS_TEMPLATE_URL = '/api/0.1/read/courier/download/template';

export const UPLOAD_COURIER_TRIPS_URL = '/api/0.1/write/courier/upload/template';

export const COURIER_POST_BID_URL = '/api/0.1/write/provider/courier/post/bid';

export const DOWNLOAD_COURIER_BIDDING_PROVIDER_URL = '/api/0.1/read/provider/courier/template';

export const UPLOAD_COURIER_BIDDING_PROVIDER_URL ='/api/0.1/write/upload/courier/bid';   

export const PROVIDER_DOWNLOAD_SERVICE_CATEGORY_TEMPLATE_URL = '/api/0.1/read/provider/service/category/template';

export const PROVIDER_UPLOAD_SERVICE_CATEGORY_TEMPLATE_URL = '/api/0.1/write/provider/upload/service/category';

export const GET_SERVICE_CATEGORY_URL = '/api/0.1/read/provider/service/availability';

export const POST_SERVICE_CATEGORY_URL = '/api/0.1/write/update/provider/service/availability';

export const GET_TRANSPORTER_BID_COMMON_CHARGES_URL = '/api/0.1/read/courier/common/charges';

export const GET_IP_ADDRESS_URL = 'https://api.ipify.org/?format=json';

export const CLEAR_MESSAGE_URL = '/api/0.1/write/clear/message';

export const  DOWNLOAD_MULTIMODE_TRIPS_TEMPLATE_URL ='/api/0.1/read/multimode/add/trip/template';

export const UPLOAD_MULTIMODE_TRIPS_TEMPLATE_URL = '/api/0.1/write/multimode/trip/upload/template';

export const WEB_NOTIFICATION_URL = '/api/0.1/fetch/dataForNotif';

export const LEGRAND_SUMMARY_REPORT_URL = '/api/0.1/read/holistics/token/summaryreport';

export const LEGRAND_PLANT_WISE_REPORT_URL = '/api/0.1/read/holistics/token/plantwisereport';

export const CURRENCY_DETAILS_URL = '/api/0.1/read/currency/details';

export const SEEKER_CURRENCY_DETAILS_URL = '/api/0.1/read/seeker/currency/details';

export const DOWNLOAD_MULTI_MODE_BID_DETAILS_TRANSPORTER_URL ='/api/0.1/read/download/multimode/bid/template';

export const UPLOAD_MULTI_MODE_BID_TRANSPORTER_URL ='/api/0.1/write/upload/multimode/bid';

export const SEEKER_RFQ_TYPES_URL = '/api/0.1/read/seeker/rfq/types';

export const PROVIDER_RFQ_TYPES_URL = '/api/0.1/read/provide/rfq/types';

export const SYSTEM_SUGGESTED_PRICE_URL = '/api/0.1/read/get/ssp';

export const REPORT_TEMPLATE_DOWNLOAD_URL = '/api/v1/downloads/generic/format/';

export const MARKET_RATE_REPORTS_URL = '/api/v1/analytics/mis_token/';

export const DOWNLOAD_AUDIT_TRAIL_FORM_DATA_URL='/api/0.1/read/challenge/price/audit/trail/template';

export const ANALYTICS_LOCATIONS_URL = '/api/v1/analytics/locations/';

export const CHECK_CONTRACT_EXIST_URL = '/api/0.1/read/existing/contract';

export const YARD_TO_YARD_BCN_VALUES_URL = '/api/0.1/read/fois/rake/route';

export const FREIGHT_CALCULATATION_URL = '/api/0.1/read/fois/details';

export const GET_OTHERS_LPP_URL = '/api/0.1/read/other/lpp';

export const AMMENDMENT_LIST_URL = '/contracts/fetch/ammendmentdata';

export const AMMENDMENT_APPROVE_URL = '/contracts/approve/contractammendment';

export const DOWNLOAD_MARKET_SITE_RATE_DIFF_URL='/api/0.1/read/market/site/diff/template';
export const DOWNLOAD_BID_RATE_TEMPLATE_URL = '/api/0.1/read/rfq/rates/template';

export const UPLOAD_BID_RATE_URL ='/api/0.1/write/rfq/rate/template';

export const DOWNLOAD_TRUCKS_DETAILS_TEMPLATE_URL = '/api/0.1/read/trip/trucks/details/template';

export const UPLOAD_TRUCKS_DETAILS_URL ='/api/0.1/write/trip/number/trucks/template';

export const NUMBER_OF_VEHICLE_PLACED_URL = '/api/0.1/write/updated/number/of/vehicle';

export const EXISITING_CONTRACT_DETAILS_URL = '/api/0.1/read/existing/contract/details';

export const GENERATE_CONTRACT_URL = '/api/0.1/write/rfq/generate/contract';

export const UPLOAD_MULTIMODE_EXISITING_CONTRACT_URL = '/api/0.1/write/generate/contract/template';

export const DOWNLOAD_MULTIMODE_EXISITING_CONTRACT_URL = '/api/0.1/read/generate/contract/template';

export const GENERATED_CONTRACTS_LIST_URL = '/api/0.1/read/generate/contract/rfq';

export const GET_CONTAINER_LIST_URL = '/api/0.1/read/fetch/container/list';

export const GET_RAKE_LIST_URL = '/api/0.1/read/fetch/rake/list';

export const GET_DEPOT_LIST_URL = '/api/0.1/read/fetch/dept/list';

export const GET_PLANT_LIST_URL = '/api/0.1/read/fetch/plant/list';

export const GET_CHA_DETAILS_URL = '/api/0.1/read/list/cha';

export const FREIGHT_AGAINST_VEHICLE_REPORTS_URL = '/api/0.1/read/holistics/token/freightdetailsvehicle';

export const CURRENCY_TYPES_URL = '/api/0.1/read/currency/type';

export const  VENDOR_WITH_DRAW_URL = '/api/0.1/write/vendor/withdraw/bid';

export const REVOKE_WITHDRAW_BID_URL = '/api/0.1/read/revoke/bid/withdrawn';

export const LOG_OUT_URL = '/api/0.1/write/logout';

export const CLOSED_RFQ_URL = '/api/0.1/write/closed/rfq';

export const ACCEPTANCE_OF_CEILING_PRICE_URL='/api/0.1/write/acceptance/ceiling/price';

export const CANCELLED_LOI_URL ='/api/0.1/write/loi/cancelled';

export const STATUS_GROUP_URL = '/api/0.1/write/transporters/status';

export const GET_UPLOAD_PLAN_URL = '/api/0.1/read/uploadplan';

export const POST_UPLOAD_PLAN_URL = '/api/0.1/write/uploadplan';

export const UPDATE_UPLOAD_PLAN_URL = '/api/0.1/update/uploadplan';

export const DELETE_UPLOAD_PLAN_URL = '/api/0.1/delete/uploadplan';

export const GET_LOCATION_NETWORK_URL = '/api/0.1/read/location/network';

export const FILE_UPLOAD_PLAN_URL = '/api/0.1/upload/uploadplan';

export const DOWNLOAD_UPLOADPLAN_TEMPLATE_URL = '/api/0.1/download/uploadplan';

export const CONTRACTING_SHORT_MIS_URL = '/api/0.1/read/mis/short';

export const DOWNLOAD_AWL_MULTIMODE_TEMPLATE_URL = '/api/0.1/read/rfq/multimode/trip/template';

export const UPLOAD_AWL_MULTIMODE_EXCEL_URL = '/api/0.1/write/Legtype/multimode/trip/upload/template';

export const GET_LOCATION_WITH_PINCODE_URL = '/api/0.1/read/list/pincode';

export const GET_GOOGLE_STUDIO_REPORT_URL = '/api/0.1/read/iframe';

export const GET_HOLISTICS_TOKEN_MIS_URL = '/api/0.1/read/holistics/token/mis';

export const GET_INCOTERMS_LIST_URL = '/api/0.1/read/inco/term/code';

export const GET_COST_HEADS_URL = '/api/0.1/read/cost/head';

export const AIR_SHIPMENT_TRACKING_URL = '/api/0.1/read/air/cargo/details';

export const CONTAINER_SHIPMENT_TRACKING_URL = '/api/0.1/read/container/tracking/details';

export const DIESEL_PRICE_HIKE_URL = '/api/0.1/read/fetch/diesel/price';

export const SEC_AWL_ADD_TRIP_URL = '/api/0.1/write/add/dedicated/slab/trips';

export const GET_FUEL_TYPES_URL = '/api/0.1/read/fuel/types';

export const VEHICLE_TYPES_NEW_URL = '/api/0.1/read/plant/wise/vehicle/types';

export const PACKING_TYPES_NEW_URL = '/api/0.1/read/plant/wise/packing/types';

export const VEHICLE_BODY_TYPES_NEW_URL = '/api/0.1/read/plant/wise/vehicle/body';

export const PAYMENT_CYCLES_NEW_URL = '/api/0.1/read/plant/wise/payment/cycle';

export const BUSINESS_VOLUME_NEW_URL = '/api/0.1/read/plant/wise/business/volume';

export const PRICING_BASIS_NEW_URL = '/api/0.1/read/plant/wise/pricing/basis';

export const PRODUCT_CATEGORY_NEW_URL = '/api/0.1/read/plant/wise/product/category';

export const GET_PAYMENT_TERMS_NEW_URL = '/api/0.1/read/plant/wise/payment/terms';

export const REQUEST_OTP_URL = '/api/0.1/write/get/otp';

export const OTP_SIGNIN_URL = '/api/0.1/write/login/by/otp';

export const SSO_LOGIN_RESPONSE_URL = '/sso/get-session';
export const AWL_CONTRACTING_MIS_URL = '/api/0.1/read/holistics/token/contractMis';

export const DPL_CONTRACTING_INDENTING_MIS_URL = '/api/0.1/read/holistics/token/contractIndentReport';

export const GET_BROADCAST_MSG_URL = '/broadcast/get-messages';

export const GET_DISPOSAL_MATERIAL_TEMPLATE_URL = '/api/0.1/read/disposal/msp/template';

export const UPLOAD_DISPOSAL_MATERILA_URL = '/api/0.1/write/disposal/msp/template';

export const GET_DISPOSAL_MATERIAL_TRIPS_URL = '/api/0.1/read/fetch/product/disposal/material/trips';

export const POST_DISPOSAL_MATERIAL_TRIPS_URL = '/api/0.1/write/add/product/disposal/material/code/trips';

export const POST_DISPOSAL_PRODUCT_BID_URL = '/api/0.1/write/provider/post/disposal/bid';

export const TRANSPORTER_CONTRACT_RECORDS_URL = '/api/0.1/read/transporter/contract/records';

export const TRANSPORTER_SPECIFIC_CONTRACT_RECORD_URL = '/api/0.1/read/transporter/contract/records/id';

export const GET_SPOT_CONTRACT_REASON_URL = '/api/0.1/read/contract/reasons';

export const GET_TRANSPORTERS_REPORT_URL = '/api/0.1/read/holistics/token/transporterReport';

export const BL_SHIPMENT_TRACKING_URL = '/api/0.1/read/bl/tracking/details';

export const GET_SEA_AND_AIR_LINES_URL = '/api/0.1/read/sea/air/list';

const jsonToUrlParams = (json) => {
   return Object.keys(json).map(function (k) {
      if (typeof json[k] != 'undefined' && json[k] !== '') {
         return encodeURIComponent(k) + '=' + encodeURIComponent(json[k])
      }
      return "";
   }).filter((item) => {
      return item;
   }).join('&')
}

export const postDataWithoutToken = (url, data) => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            logOutWithToken();
            // deleteToken();
            // location.href = "/";
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};

export const getDataWithoutToken = (url, params = {}) => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}?${jsonToUrlParams(params)}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: 'GET',
         // body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};

export const getDataWithToken = (url, params = {}) => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}?${jsonToUrlParams(params)}`, {
         headers: { token: getToken() }
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};
export const deleteDataWithToken = (url, params = {}, data) => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}?${jsonToUrlParams(params)}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            token: getToken()
         },
         method: 'DELETE',
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};

export const putDataWithToken = (url, data) => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            token: getToken()
         },
         method: 'PUT',
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};

export const getLCLDataWithToken = (url, params = {}) => {
   return new Promise((resolve, reject) => {
      fetch(`${LCL_BASE_URL}${url}?${jsonToUrlParams(params)}`, {
         headers: { token: getToken() }
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};

export const putLCLDataWithToken = (url, data) => {
   return new Promise((resolve, reject) => {
      fetch(`${LCL_BASE_URL}${url}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            token: getToken()
         },
         method: 'PUT',
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};

export const postDataWithToken = (url, data, params={}) => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}?${jsonToUrlParams(params)}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            token: getToken()
         },
         method: 'POST',
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};


export const uploadFile = (url, file, params = {}) => {
   let form = new FormData();
   form.append("file", file);
   Object.keys(params).forEach((key) => {
      form.append([key], params[key])
   });
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}`, {
         headers: {
            'Accept': 'application/json',
            token: getToken()
         },
         method: 'POST',
         body: form,
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            });
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};

export const uploadUPFile = (url, file, params = {}) => {
   let form = new FormData();
   form.append("file", file);
   // Object.keys(params).forEach((key) => {
   //    form.append([key], params[key])
   // });
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}?${jsonToUrlParams(params)}`, {
         headers: {
            'Accept': 'application/json',
            token: getToken()
         },
         method: 'POST',
         body: form,
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            });
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};

// ************* POST call for LPP details only ************* //
export const postLPPDataWithoutToken = (url, data) => {
   return new Promise((resolve, reject) => {
      fetch(`${LPP_BASE_URL}${url}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};
// ********************************************************** //


// ************* POST call for File uploads only ************* //
export const uploadFileWithSyncCalls = (url, file, params = {}) => {
   let form = new FormData();
   form.append("file", file);
   Object.keys(params).forEach((key) => {
      form.append([key], params[key])
   });
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url || FILE_UPLOAD_POST_API_URL}`, {
         headers: {
            'Accept': 'application/json',
            token: getToken()
         },
         method: 'POST',
         body: form,
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            });
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};
// ********************************************************** //




// ************* GET call for LPP details only ************* //
export const getLPPDataWithoutToken = (url, data) => {
   return new Promise((resolve, reject) => {
      fetch(`${CP_LPP_BASE_URL}${url}?${jsonToUrlParams(params)}`, {
         headers: { token: getToken() }
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};
// ********************************************************** //


// ****************** Accept/Reject URL ******************** //
export const putDataWithTokenToIndents = (url, data) => {
   return new Promise((resolve, reject) => {
      fetch(`${acceptRejectURL}${url}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            token: getToken()
         },
         method: 'PUT',
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};
// ********************************************************** //


export const getIPAdress = (url) => {
   return new Promise((resolve, reject) => {
      fetch(GET_IP_ADDRESS_URL, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: 'GET',
         // body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            localStorage.setItem('IPAddress', data.ip);
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};

/**** WEB NOTIFICATION ******/
export const getDataForNotifWithToken = (url, params = {}) => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${WEB_NOTIFICATION_URL}?${jsonToUrlParams(params)}`, {
         headers: { token: getToken() }
      }).then((response) => {
         if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            const resultData = data.data; 
            if(window.Notification.permission === 'granted' && resultData) {
               if(resultData.rfq_count > 0 || resultData.bid_end_count > 0) {

                  let body = '';

                  if(resultData.rfq_count > 0 && resultData.bid_end_count > 0) {
                     body = resultData.msg + "/n" + resultData.bid_end_msg
                  } else if(resultData.rfq_count > 0) {
                     body = resultData.msg;
                  } else if(resultData.bid_end_count > 0) {
                     body = resultData.bid_end_msg;
                  }
                  var notification = new Notification('New Message', {
                    body,
                    icon: './icons/logo@3x.png',
                  })
                  notification.onclick = () => {
                     notification.close();
                     window.parent.focus();
                  }   
               }
               setTimeout(() => {
                  if(document.visibilityState === 'hidden') {
                     getDataForNotifWithToken(WEB_NOTIFICATION_URL, params);
                  }
               }, 60000);
            }
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};

/**** SYSTEM SUGGESTED PRICE  ****/

export const getDataSSPWithToken = (url, params = {}) => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${url}?${jsonToUrlParams(params)}`, {
         headers: { 
            token: getToken(),
            ['customer-id']: getUser().companyId
         }
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};


/**** GET CSV TEMPLATE ****/
export const getCSVDataWithToken = (url, params={})=> {
    return new Promise((resolve, reject)=> {
        let fetchUrl = `${accountsBaseUrl}${url}`;
        if (Object.keys(params).length > 0) {
            fetchUrl += `?${jsonToUrlParams(params)}`;
        } else if (typeof params === 'number' || typeof params === 'string') {
            fetchUrl += params + '/';
        }
        fetch(fetchUrl, {
            method: 'GET',
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              token:getToken(),
              'customer-id': getUser().companyId,
            },
        }).then((response)=> {
            if(response && response.status >= 400) {
                response.json().then((data)=>{
                    reject(data);
                })
                return;
            }
            response.text().then((data)=>{
                resolve(data);
            });
        }).catch((e)=> {
            console.log('ERROR', e);

            reject(e);
        });
    });
};


/**** REPORT FILE UPLOAD API ****/
export const reportUploadFile = (url, file, params = {}, bodyData)=>{
   let form = new FormData();
   if (file) {
      form.append("uploaded_file", file);
   }
   if (Object.keys(bodyData).length > 0) {
      if ((bodyData.from || []).length > 0) {
         form.append("from", bodyData.from);
      }
      if ((bodyData.to || []).length > 0) {
         form.append("to", bodyData.to);
      }
   }

   return new Promise((resolve, reject) => {
      fetch(`${accountsBaseUrl}${url}?${jsonToUrlParams(params)}`, {
         headers: {
            'Accept': 'application/json',
            token: getToken(),
            'customer-id': getUser().companyId,
         },
         method: 'POST',
         body: form,
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            });
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });

};

/********* ACCOUNTS GET **********/
export const getAccountsDataWithToken = (url, params = {}) => {
   return new Promise((resolve, reject) => {
      fetch(`${accountsBaseUrl}${url}?${jsonToUrlParams(params)}`, {
         headers: { token: getToken(), 'customer-id': getUser().companyId, }
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};

/********* LOGOUT  **********/
export const logOutWithToken = () => {
   return new Promise((resolve, reject) => {
      fetch(`${baseUrl}${LOG_OUT_URL}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            token: getToken()
         },
         method: 'DELETE',
         // body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            deleteToken();
            location.href = "/";
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               deleteToken();
               // reject(data);
            })
            return;
         }
         response.json().then((data) => {
            deleteToken();
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};

// ADMIN URL

export const getAdminDataWithToken = (url, params={})=> {
   return new Promise((resolve, reject)=> {
       fetch(`${adminBaseUrl}${url}?${jsonToUrlParams(params)}`, {
           headers:{token:getToken()}
       }).then((response)=> {
           if(response.status === 401) {
               logOutWithToken();
               // deleteToken();
               // location.href="/";
           }
           else if(response.status >= 400) {
               response.json().then((data)=>{
                   reject(data);
               })
               return;
           }
           response.json().then((data)=>{
               resolve(data);
           });
       }).catch((e)=> {
           console.log('ERROR', e);

           reject(e);
       });
   });
};

export const ssoGetDataWithToken = (url, params = {}) => {
   return new Promise((resolve, reject) => {
      fetch(`${SSO_BASE_URL}${url}?${jsonToUrlParams(params)}`, {
         headers: { token: getToken() }
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);

         reject(e);
      });
   });
};

export const ssoPostDataWithoutToken = (url, data) => {
   return new Promise((resolve, reject) => {
      fetch(`${SSO_BASE_URL}${url}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify(data)
      }).then((response) => {
         if (response.status === 401) {
            // logOutWithToken();
            // deleteToken();
            // location.href = "/";
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};

export const postSSODelete = (url, params={}) => {
   return new Promise((resolve, reject) => {
      fetch(`${SSO_BASE_URL}${url}?${jsonToUrlParams(params)}`, {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            token: getToken()
         },
         method: 'POST'
      }).then((response) => {
         if (response.status === 401) {
            // deleteToken();
            // location.href = "/";
            logOutWithToken();
         }
         else if (response.status >= 400) {
            response.json().then((data) => {
               reject(data);
            })
            return;
         }
         response.json().then((data) => {
            resolve(data);
         });
      }).catch((e) => {
         console.log('ERROR', e);
         reject(e);
      });
   });
};