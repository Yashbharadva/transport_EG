import { call, put } from 'redux-saga/effects';


import {
   getDataWithToken,
   postDataWithToken,
   putDataWithToken,
   deleteDataWithToken,
   getCSVDataWithToken,
   reportUploadFile,
   getIPAdress,
   getAccountsDataWithToken,
   uploadUPFile,
   getAdminDataWithToken,

   GROUPS_AND_TRANSPORTERS_URL,
   VEHICLE_TYPES_URL,
   VEHICLE_BODY_TYPES_URL,
   PACKING_TYPES_URL,
   BUSINESS_VOLUME_URL,
   SLABS_URL,
   PRICING_BASIS_URL,
   PAYMENT_CYCLES_URL,
   GET_GROUPS_URL,
   GET_TRANSPORTERS_URL,
   PRODUCT_CATEGORY_URL,
   CREATE_GROUP_URL,
   EDIT_GROUP_URL,
   DELETE_GROUP_URL,
   HOLISTICS_URL,
   MARKET_ANALYSIS_URL,
   ALLOCATIONS_URL,
   GET_BRANCHES_URL,
   RIL_HOLISTICS_URL,
   GET_ALL_END_TO_END_URL,
   INDENT_MIS_URL,
   GET_USER_BRANCHES_URL,
   GET_TRANSPORTER_PARTICIPATION_URL,
   GET_ALL_VOLTAS_MIS_URL,
   GET_SERVER_TIME_URL,
   GET_MULTI_MODAL_REPORT_URL,
   GET_SECONDARY_TO_LOCATION_URL,
   SECONDARY_UPTO_KM_LIST_URL,
   TK11_EFFICIENCY_DASHBOARD_URL,
   GET_MOVEMENTS_URL,
   GET_MODES_URL,
   GET_ZONES_URL,
   GET_COURIER_SLAB_URL,
   LEGRAND_SUMMARY_REPORT_URL,
   LEGRAND_PLANT_WISE_REPORT_URL,
   CURRENCY_DETAILS_URL,
   SEEKER_CURRENCY_DETAILS_URL,
   SEEKER_RFQ_TYPES_URL,
   PROVIDER_RFQ_TYPES_URL,
   REPORT_TEMPLATE_DOWNLOAD_URL,
   MARKET_RATE_REPORTS_URL,
   ANALYTICS_LOCATIONS_URL,
   YARD_TO_YARD_BCN_VALUES_URL,
   GET_PLANT_LIST_URL,
   GET_CONTAINER_LIST_URL,
   GET_RAKE_LIST_URL,
   GET_DEPOT_LIST_URL,
   GET_CHA_DETAILS_URL,
   FREIGHT_AGAINST_VEHICLE_REPORTS_URL,
   CURRENCY_TYPES_URL,
   VENDOR_WITH_DRAW_URL,
   STATUS_GROUP_URL,
   GET_UPLOAD_PLAN_URL,
   POST_UPLOAD_PLAN_URL,
   UPDATE_UPLOAD_PLAN_URL,
   DELETE_UPLOAD_PLAN_URL,
   GET_LOCATION_NETWORK_URL,
   FILE_UPLOAD_PLAN_URL,
   DOWNLOAD_UPLOADPLAN_TEMPLATE_URL,
   CONTRACTING_SHORT_MIS_URL,
   GET_GOOGLE_STUDIO_REPORT_URL,
   GET_HOLISTICS_TOKEN_MIS_URL,
   GET_INCOTERMS_LIST_URL,
   GET_COST_HEADS_URL,
   GET_FUEL_TYPES_URL,
   VEHICLE_TYPES_NEW_URL,
   VEHICLE_BODY_TYPES_NEW_URL,
   PACKING_TYPES_NEW_URL,
   PRICING_BASIS_NEW_URL,
   PAYMENT_CYCLES_NEW_URL,
   PRODUCT_CATEGORY_NEW_URL,
   BUSINESS_VOLUME_NEW_URL,
   AWL_CONTRACTING_MIS_URL,
   DPL_CONTRACTING_INDENTING_MIS_URL,
   GET_SPOT_CONTRACT_REASON_URL,
   GET_TRANSPORTERS_REPORT_URL,
   GET_SEA_AND_AIR_LINES_URL
} from 'Utils/api';

import {
   GET_GROUPS_AND_TRANSPORTERS_SUCCESS,
   GET_PACKING_TYPES_SUCCESS,
   GET_VEHICLE_TYPES_SUCCESS,
   GET_VEHICLE_BODY_TYPES_SUCCESS,

   GET_PAYMENT_CYCLES_SUCCESS,
   GET_BUSINESS_VOLUMES_SUCCESS,
   GET_SLABS_SUCCESS,
   GET_PRICING_BASIS_SUCCESS,
   GET_PRODUCT_CATEGORIES_SUCCESS,

   GET_TRANSPORTERS_SUCCESS,
   GET_GROUPS_SUCCESS,

   GET_BRANCHES_DATA,
   GET_REPORTS,
   SET_SYSTEM_TIME,
   GET_SECONDARY_TO_LOCATION_SUCCESS,
   SAVE_SECONDARY_UPTO_KM_LIST,
   GET_MOVEMENTS_SUCCESS,
   GET_MODES_SUCCESS,
   GET_ZONES_SUCCESS,
   SAVE_COURIER_SLABS,
   CURRENCY_DETAILS_SUCCESS,
   SAVE_RFQ_TYPES,
   MARKET_REPORT_LOCATIONS_DATA,
   SAVE_YARD_TO_YRAD_CONSTANTS_LIST,
   SAVE_MULTI_MODE_CONTAINER_LIST,
   SAVE_MULTI_MODE_MOVEMENT_TYPE_LIST,
   SAVE_DEPOT_LOCATION_LIST,
   SAVE_PLANT_LOCATION_LIST,
   SAVE_CHA_LIST,
   SAVE_CURRENCY_TYPES,
   SAVE_INCOTERMS_LIST,
   SAVE_COST_HEADS_LIST,
   GET_UPLOAD_PLAN_DATA,
   GET_CONSIGNEE_DATA,
   DOWNLOAD_UPLOADPLAN_TEMPLATE,
   SAVE_GOOGLE_STUDIO_REPORT,
   SAVE_SELECTED_BRANCH_DETAILS,
   GET_FUEL_TYPES_SUCCESS,
   SAVE_SPOT_CONTRACT_REASONS,
   SAVE_SEA_AND_AIR_LINES_LIST
} from 'Constants/actionConstants';

import { getUser, getCompanyType } from 'Utils/storage';
import { isAdaniWilmar } from 'Utils/';

import Group from 'Models/Group';
import Transporter from 'Models/Transporter';
import Constant from 'Models/Constant';
import { TOAST_SUCCESS } from 'Constants/actionConstants';
import { TOAST_ERROR } from 'Constants/actionConstants';
import { GET_HOLISTICS_SUCCESS } from 'Constants/actionConstants';
import { GET_HOLISTICS_SUBMITTING } from 'Constants/actionConstants';


export function* getGroupsAndTransporters(action) {
   try {
      const data = yield call(getDataWithToken, GROUPS_AND_TRANSPORTERS_URL);
      if (data.data && data.data.groups) {
         const groups = data.data.groups.map((group) => {
            return new Group(group);
         });
         const transporters = data.data.transporters.map((transporter) => {
            return new Transporter(transporter);
         })
         yield put({
            type: GET_GROUPS_AND_TRANSPORTERS_SUCCESS,
            groups,
            transporters
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getPackingTypes(action) {
   try {
      // const data = yield call(getDataWithToken, PACKING_TYPES_URL, action.data);
      const data = yield call(getDataWithToken, PACKING_TYPES_NEW_URL, action.data);
      if (data.data && data.data) {
         let packingTypes = data.data.map((packingType) => {
            return new Constant(packingType);
         });
         yield put({
            type: GET_PACKING_TYPES_SUCCESS,
            data: packingTypes
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getVehicleTypes(action) {
   try {
      const data = yield call(getDataWithToken, VEHICLE_TYPES_NEW_URL, action.params);
      // const data = yield call(getDataWithToken, VEHICLE_TYPES_NEW_URL, action.params);
      if (data.data && data.data) {
         let vehicleTypes = data.data.map((vehicleType) => {
            return new Constant(vehicleType);
         });

         yield put({
            type: GET_VEHICLE_TYPES_SUCCESS,
            data: vehicleTypes
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getVehicleBodyTypes(action) {
   try {
      const data = yield call(getDataWithToken, VEHICLE_BODY_TYPES_NEW_URL, action.params);
      if (data.data && data.data) {
         let vehicleBodyTypes = data.data.map((vehicleBodyType) => {
            return new Constant(vehicleBodyType,action.params.companyId, 'bodyType');
         });
         yield put({
            type: GET_VEHICLE_BODY_TYPES_SUCCESS,
            data: vehicleBodyTypes
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getPaymentCycles(action) {
   try {
      // const data = yield call(getDataWithToken, PAYMENT_CYCLES_URL);
      const data = yield call(getDataWithToken, PAYMENT_CYCLES_NEW_URL, action.data);
      if (data.data && data.data) {
         let paymentCycles = data.data.map((paymentCycle) => {
            return new Constant(paymentCycle);
         });
         yield put({
            type: GET_PAYMENT_CYCLES_SUCCESS,
            data: paymentCycles
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getBusinesVolumes(action) {
   try {
      const data = yield call(getDataWithToken, BUSINESS_VOLUME_NEW_URL, action.data);
      if (data.data && data.data) {
         let businessVolumes = data.data.map((businessVolume) => {
            return new Constant(businessVolume);
         });
         yield put({
            type: GET_BUSINESS_VOLUMES_SUCCESS,
            data: businessVolumes
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getSlabs(action) {
   try {
      const data = yield call(getDataWithToken, SLABS_URL);
      if (data.data && data.data.list) {
         let slabs = data.data.list.map((slab) => {
            return new Constant(slab);
         });
         yield put({
            type: GET_SLABS_SUCCESS,
            data: slabs
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getPricingBasis(action) {
   try {
      // const data = yield call(getDataWithToken, PRICING_BASIS_URL, action.data);
      const data = yield call(getDataWithToken, PRICING_BASIS_NEW_URL, action.data);

      if (data.data && data.data) {
         let pricingBasis = data.data.map((pricingBasis) => {
            return new Constant(pricingBasis);
         });
         yield put({
            type: GET_PRICING_BASIS_SUCCESS,
            data: pricingBasis
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getProductCategories(action) {
   try {
      const data = yield call(getDataWithToken, PRODUCT_CATEGORY_NEW_URL, action.data);
      if (data.data && data.data) {
         let productCategories = data.data.map((productCategory) => {
            return new Constant(productCategory, action.data.companyId, 'productCategory');
         });
         yield put({
            type: GET_PRODUCT_CATEGORIES_SUCCESS,
            data: productCategories
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getAllTransporters(action) {
   try {
      const data = yield call(getDataWithToken, GET_TRANSPORTERS_URL, action.data);
      if (data.data && data.data.list) {
         const transporters = data.data.list.map((transporter) => {
            return new Transporter(transporter);
         })
         yield put({
            type: GET_TRANSPORTERS_SUCCESS,
            transporters
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* getGroups(action) {
   try {
      const data = yield call(getDataWithToken, GET_GROUPS_URL, action.params);
      if (data.data && data.data.list) {
         const groups = data.data.list.map((group) => {
            return new Group(group);
         });
         yield put({
            type: GET_GROUPS_SUCCESS,
            groups
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}
export function* createGroup(action) {
   try {
      const data = yield call(postDataWithToken, CREATE_GROUP_URL, action.data);
      yield put({
         type: TOAST_SUCCESS,
         message: 'Group Created Successfully'
      })
      if (action.onSuccess) {
         action.onSuccess(data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* editGroup(action) {
   try {
      const data = yield call(putDataWithToken, EDIT_GROUP_URL, action.data);
      yield put({
         type: TOAST_SUCCESS,
         message: 'Group Edited Successfully'
      })
      if (action.onSuccess) {
         action.onSuccess(data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* deleteGroup(action) {
   try {
      const data = yield call(deleteDataWithToken, DELETE_GROUP_URL, action.params);
      yield put({
         type: TOAST_SUCCESS,
         message: 'Group Deleted Successfully'
      })
      if (action.onSuccess) {
         action.onSuccess(data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* getHolistics(action) {
   try {
      let data = {};
      const user = getUser();
      if (user && (user.isChallengePriceForm || (user.email && user.email.includes('@ril.com')))) {
         const param = {
            companyId: user.companyId
         };
         data = yield call(getDataWithToken, RIL_HOLISTICS_URL, param);
         yield put({
            type: GET_HOLISTICS_SUBMITTING
         })
         yield put({
            type: GET_HOLISTICS_SUCCESS,
            token: data.data.token,
            embedCode: data.data.embed_code
         })
      } else {
         if (action.params) {
            action.params.branchId = user.branchId || user.companyId;
         } else {
            action.params = {
               branchId: user.branchId || user.companyId
            }
         }
         if(isAdaniWilmar()) {
            action.params = {
               companyId: user.companyId
            }
         }
         data = yield call(getDataWithToken, isAdaniWilmar() ? AWL_CONTRACTING_MIS_URL : HOLISTICS_URL, action.params);
         yield put({
            type: GET_HOLISTICS_SUBMITTING
         })
         yield put({
            type: GET_HOLISTICS_SUCCESS,
            token: data.data.token,
            embedCode: data.data.embed_code
         })
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getMarketAnalysis(action) {
   try {
      const data = yield call(getDataWithToken, MARKET_ANALYSIS_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getAllocations(action) {
   try {
      const data = yield call(getDataWithToken, ALLOCATIONS_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getBranches(action) {
   try {
      let url = (action.data.companyId) ? GET_BRANCHES_URL : GET_USER_BRANCHES_URL;
      const data = yield call(getDataWithToken, url, action.data);
      yield put({
         type: GET_BRANCHES_DATA,
         data: data.data,
      });
      if (action.onSuccess) {
         action.onSuccess(data.data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getAllEndToEndMis(action) {
   try {
      const data = yield call(getDataWithToken, GET_ALL_END_TO_END_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getAllIndentMis(action) {
   try {
      const data = yield call(getDataWithToken, INDENT_MIS_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getTransporterParticipation(action) {
   try {
      const data = yield call(getDataWithToken, GET_TRANSPORTER_PARTICIPATION_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getAllVoltasMis(action) {
   try {
      const data = yield call(getDataWithToken, GET_ALL_VOLTAS_MIS_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getServerTime(action) {
   try {
      const data = yield call(getDataWithToken, GET_SERVER_TIME_URL);
      if (action.onSuccess) {
         action.onSuccess(data.system_time || '');
      }
      yield put({
         type: SET_SYSTEM_TIME,
         data: data && data.system_time || ''
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getSecondaryToLocation(action) {
   try {
      const data = yield call(getDataWithToken, GET_SECONDARY_TO_LOCATION_URL, action.data);
      if (data.data) {
         let secondaryToLocations = data.data.map((toLocation) => {
            return new Constant(toLocation);
         });
         yield put({
            type: GET_SECONDARY_TO_LOCATION_SUCCESS,
            data: secondaryToLocations
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getSecondaryUptoKmList(action) {
   try {
      const data = yield call(getDataWithToken, SECONDARY_UPTO_KM_LIST_URL);
      yield put({
         type: SAVE_SECONDARY_UPTO_KM_LIST,
         data: data.data || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getMultiModalMis(action) {
   try {
      const data = yield call(getDataWithToken, GET_MULTI_MODAL_REPORT_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something went wrong"
      })
   }
}

export function* tk11Efficiency(action) {
   try {
      const data = yield call(getDataWithToken, TK11_EFFICIENCY_DASHBOARD_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getCourierMovements(action) {
   try {
      const data = yield call(getDataWithToken, GET_MOVEMENTS_URL, action.data);
      if (data.data) {
         let courierMovements = data.data.map((movement) => {
            return new Constant(movement);
         });
         yield put({
            type: GET_MOVEMENTS_SUCCESS,
            data: courierMovements
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getCourierModes(action) {
   try {
      const data = yield call(getDataWithToken, GET_MODES_URL, action.data);
      if (data.data) {
         let courierModes = data.data.map((mode) => {
            return new Constant(mode);
         });
         yield put({
            type: GET_MODES_SUCCESS,
            data: courierModes
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getCourierZones(action) {
   try {
      const data = yield call(getDataWithToken, GET_ZONES_URL, action.data);
      if (data.data) {
         let courierZones = data.data.map((zone) => {
            return new Constant(zone);
         });
         yield put({
            type: GET_ZONES_SUCCESS,
            data: courierZones
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getCourierSlabs(action) {
   try{
      const data = yield call(getDataWithToken, GET_COURIER_SLAB_URL, action.data);
      yield put({
         type: SAVE_COURIER_SLABS,
         data: data.data || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getIPAddress(action) {
   try{
      const data = yield call(getIPAdress);
      if(action.onSuccess){
         action.onSuccess(data);
      }
   } catch(e){
      if(action.onError) {
         action.onError();
      }
   }
}

export function* getManagementSummaryReport(action) {
   try {
      const data = yield call(getDataWithToken, LEGRAND_SUMMARY_REPORT_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something went wrong"
      })
   }
}

export function* getPlantWiseReport(action) {
   try {
      const data = yield call(getDataWithToken, LEGRAND_PLANT_WISE_REPORT_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something went wrong"
      })
   }
}

export function* getFreightDetailsReport(action) {
   try {
      const data = yield call(getDataWithToken, FREIGHT_AGAINST_VEHICLE_REPORTS_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something went wrong"
      })
   }
}

export function* getContractingShortMIS(action) {
   try {
      const data = yield call(getDataWithToken, CONTRACTING_SHORT_MIS_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something went wrong"
      })
   }
}

export function* getCurrencyDetails(action) {
	try {
      const url = getCompanyType() === 2 ? CURRENCY_DETAILS_URL : SEEKER_CURRENCY_DETAILS_URL;
		const data = yield call(getDataWithToken, url, action.data);
		yield put({
			type: CURRENCY_DETAILS_SUCCESS,
			data: data.data || []
		})
	} catch (e) {
		console.log('ERROR', e);
	}
}

export function* getRFQTypes(action) {
   try {
      const url = getCompanyType() === 2 ? PROVIDER_RFQ_TYPES_URL : SEEKER_RFQ_TYPES_URL;
      const data = yield call(getDataWithToken, url);
		yield put({
			type: SAVE_RFQ_TYPES,
			data: data.data || []
		})
	} catch (e) {
		console.log('ERROR', e);
	}
}

export function* getReportTemplate(action) {
    try {
        yield put({ type: 'SHOW_LOADER' });

        const data = yield call(getCSVDataWithToken, REPORT_TEMPLATE_DOWNLOAD_URL+action.data);
        
        if (data.status === 401) {
            yield put({
                type: TOAST_ERROR,
                message: data && data.message ? data.message:"Oops! Something Went Wrong"
            });   
        } else {
            yield put({
                type: TOAST_SUCCESS,
                message: data.message || 'Updated Successfully!',
            });
        }
        if(action.onSuccess) {
            action.onSuccess(data);
        }
        yield put({ type: 'HIDE_LOADER' });
    }catch(e) {
        console.log('e', e)

        yield put({ type: 'HIDE_LOADER' });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}

export function* getMarketRateReport(action) {
    try{
         yield put({ type: 'SHOW_LOADER' });

        const data =  yield call(reportUploadFile, MARKET_RATE_REPORTS_URL, action.file, action.params, action.data);
        
         yield put({
            type: GET_REPORTS,
            reportsTabs: data.data || [],
            // embedCode: data.data.embed_code,
         })

         if (data.status === 401) {
            yield put({
                type: TOAST_ERROR,
                message: data && data.message ? data.message:"Oops! Something Went Wrong"
            });   
         } 
        if(action.onSuccess) {
            action.onSuccess(data);
        }
        yield put({ type: 'HIDE_LOADER' });
    }catch(e) {
        console.log('e', e)

        yield put({ type: 'HIDE_LOADER' });
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
    }
}

export function* getLocationsForReports(action) {
   try {
      const data = yield call(getAccountsDataWithToken, ANALYTICS_LOCATIONS_URL);
      yield put({
         type: MARKET_REPORT_LOCATIONS_DATA,
         data: data.data || {}
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getYardToYardConstants(action) {
   try {
      const data = yield call(getDataWithToken, YARD_TO_YARD_BCN_VALUES_URL);
      const fields = {
         locations: [],
         commodity: [],
         tariffLines: [],
         wagonType: []
      };
      if(data.data) {
         const yardData = data.data;
         fields['locations'] = (yardData.location || []).map(val => ({ name: val, value: val }));
         fields['commodity'] = (yardData.commodity_category_names || []).map(val => ({
            name: val.commodity_category,
            value: val.commodity_category,
            commodityNames: (val.commodity_name || []).map(cName => ({name: cName, value: cName }))
         }));
         fields['tariffLines'] = (yardData.tariff_lines || []).map(val => ({ name: val, value: val }));
         fields['wagonType'] = (yardData.wagon_type || []).map(val => ({ name: val, value: val }));
      }
      yield put({
         type: SAVE_YARD_TO_YRAD_CONSTANTS_LIST,
         data: fields || {}
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getMultiModeContainerTypes(action) {
   try{
      const data = yield call(getDataWithToken, GET_CONTAINER_LIST_URL);
      yield put({
         type: SAVE_MULTI_MODE_CONTAINER_LIST,
         data: data.data || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getMultiModeMovementTypes(action) {
   try{
      const data = yield call(getDataWithToken, GET_RAKE_LIST_URL);
      yield put({
         type: SAVE_MULTI_MODE_MOVEMENT_TYPE_LIST,
         data: data.data || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}
   

export function* getCHAList(action) {
	try {
		const data = yield call(getDataWithToken, GET_CHA_DETAILS_URL, action.params);
        yield put({
            type: SAVE_CHA_LIST,
            data: data.data || []
        })
	} catch (e) {
		console.log('ERROR', e);
	}
}

export function* getCurrencyTypes(action) {
   try {
      const data = yield call(getDataWithToken, CURRENCY_TYPES_URL, action.params);
      yield put({
         type: SAVE_CURRENCY_TYPES,
         data: data.data || []
      }) 

   } catch(e) {
      console.log('ERROR', e);
   }
}

export function* getDepotLocationList(action) {
   try{
      const data = yield call(getDataWithToken, GET_DEPOT_LIST_URL);
      yield put({
         type: SAVE_DEPOT_LOCATION_LIST,
         data: data.data && (data.data || []).map(item => { return { ...item, location: item.city, state: item.region } }) || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getPlantLocationList(action) {
   try{
      const data = yield call(getDataWithToken, GET_PLANT_LIST_URL);
      yield put({
         type: SAVE_PLANT_LOCATION_LIST,
         data: data.data && (data.data || []).map(item => { return { ...item, location: item.city, state: item.region } }) || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* vendorWithDrawBid(action) {
   try {
      const data = yield call(putDataWithToken, VENDOR_WITH_DRAW_URL, action.data);
      yield put({
         type: TOAST_SUCCESS,
         message: data && data.message ? data.message:"Oops! Something Went Wrong"
      })
      if (action.onSuccess) {
         action.onSuccess(data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* updateStatus(action) {
   try {
      const data = yield call(putDataWithToken, STATUS_GROUP_URL, action.data);
      yield put({
         type: TOAST_SUCCESS,
         message: 'updated Successfully'
      })
      if (action.onSuccess) {
         action.onSuccess(data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getUploadPlanList(action) {
   try {
      const data = yield call(getDataWithToken, GET_UPLOAD_PLAN_URL, action.params);
      yield put({
         type: GET_UPLOAD_PLAN_DATA,
         data: data.data.list,
      });
      if (action.onSuccess) {
         action.onSuccess(data.data.list);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* createUploadPlan(action) {
   try {
      const data = yield call(postDataWithToken, POST_UPLOAD_PLAN_URL, action.data);
      yield put({
         type: TOAST_SUCCESS,
         message: 'Data Added Successfully'
      })
      if (action.onSuccess) {
         action.onSuccess(data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* editUploadPlan(action) {
   try {
      const data = yield call(putDataWithToken, UPDATE_UPLOAD_PLAN_URL, action.data);
      yield put({
         type: TOAST_SUCCESS,
         message: 'Upload Plan Updated Successfully'
      })
      if (action.onSuccess) {
         action.onSuccess(data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* deleteUploadPlan(action) {
   try {
      const data = yield call(deleteDataWithToken, DELETE_UPLOAD_PLAN_URL, action.params);
      yield put({
         type: TOAST_SUCCESS,
         message: 'Upload Plan Deleted Successfully'
      })
      if (action.onSuccess) {
         action.onSuccess(data);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* getConsigneeList(action) {
   try {
      const data = yield call(getDataWithToken, GET_LOCATION_NETWORK_URL, action.params);
      yield put({
         type: GET_CONSIGNEE_DATA,
         data: data.data.list,
      });
      if (action.onSuccess) {
         action.onSuccess(data.data.list);
      }
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* downloadUploadPlan(action) {
   try {
      const data = yield call(getDataWithToken, DOWNLOAD_UPLOADPLAN_TEMPLATE_URL, action.params);
      yield put({
         type: DOWNLOAD_UPLOADPLAN_TEMPLATE,
         data: data.data,
      });
      if (action.onSuccess) {
         action.onSuccess(data.data);
      }
   }catch (e) {
      console.log('ERROR', e);
        yield put({
            type: TOAST_ERROR,
            message: e && e.message?e.message:"Oops! Something Went Wrong"
        })
   }
}

export function* getGoogleStudioReport(action) {
   try {
     const data = yield call(getAdminDataWithToken, GET_GOOGLE_STUDIO_REPORT_URL, action.params);
       yield put({
           type: SAVE_GOOGLE_STUDIO_REPORT,
           data: data.data || {}
       })
  } catch (e) {
     console.log('ERROR', e);
       yield put({
           type: TOAST_ERROR,
           message: e && e.message?e.message:"Oops! Something Went Wrong"
       })
  }
}

export function* getHolisticsTokenMIS(action) {
   try {
      const data = yield call(getDataWithToken, GET_HOLISTICS_TOKEN_MIS_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getIncotermsList(action) {
   try{
      const data = yield call(getDataWithToken, GET_INCOTERMS_LIST_URL);
      yield put({
         type: SAVE_INCOTERMS_LIST,
         data: data.data || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getCostHeadList(action) {
   try{
      const data = yield call(getDataWithToken, GET_COST_HEADS_URL);
      yield put({
         type: SAVE_COST_HEADS_LIST,
         data: data.data || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* uploadFileUP(action) {
   try{
        yield put({ type: 'SHOW_LOADER' });

       const data =  yield call(uploadUPFile, FILE_UPLOAD_PLAN_URL, action.file, action.params);
       yield put({
         type: TOAST_SUCCESS,
         message: 'Uploaded Data Successfully'
      })
       if (data.status === 401) {
           yield put({
               type: TOAST_ERROR,
               message: data && data.message ? data.message:"Oops! Something Went Wrong"
           });   
        } 
       if(action.onSuccess) {
           action.onSuccess(data);
       }
       yield put({ type: 'HIDE_LOADER' });
   }catch(e) {
       console.log('e', e)

       yield put({ type: 'HIDE_LOADER' });
       yield put({
           type: TOAST_ERROR,
           message: e && e.message?e.message:"Oops! Something Went Wrong"
       })
   }
}

export function* postSelectedNavBranch(action) {
   try {
      yield put({
         type: SAVE_SELECTED_BRANCH_DETAILS,
         data: action.data || {}
      })
   } catch(e) {
      console.log('ERROR', e);
   }
}

export function* getFuelTypes() {
   try {
      const data = yield call(getDataWithToken, GET_FUEL_TYPES_URL);
      console.log(data);
      if (data.data && data.data) {
         let fuelTypes = data.data.map((fuelTypes) => {
            return new Constant(fuelTypes);
         });
         yield put({
            type: GET_FUEL_TYPES_SUCCESS,
            data: fuelTypes || []
         })
      }
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getContractingIndentingReport(action) {
   try {
      const data = yield call(getDataWithToken, DPL_CONTRACTING_INDENTING_MIS_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}
export function* getSpotContractReasons(action) {
   try {
      const data = yield call(getDataWithToken, GET_SPOT_CONTRACT_REASON_URL);
      yield put({
         type: SAVE_SPOT_CONTRACT_REASONS,
         data: data && data.data || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}

export function* getProviderTK11Mis(action) {
   try {
      const data = yield call(getDataWithToken, GET_TRANSPORTERS_REPORT_URL, action.params);
      yield put({
         type: GET_HOLISTICS_SUBMITTING
      })
      yield put({
         type: GET_REPORTS,
         token: data.data.token,
         embedCode: data.data.embed_code,
      })
   } catch (e) {
      console.log('ERROR', e);
      yield put({
         type: TOAST_ERROR,
         message: e && e.message ? e.message : "Oops! Something Went Wrong"
      })
   }
}

export function* getSeaAndAirLinesList() {
   try {
      const data = yield call(getDataWithToken, GET_SEA_AND_AIR_LINES_URL);
      console.log(data);
      yield put({
         type: SAVE_SEA_AND_AIR_LINES_LIST,
         data: data.data || []
      })
   } catch (e) {
      console.log('ERROR', e);
   }
}
