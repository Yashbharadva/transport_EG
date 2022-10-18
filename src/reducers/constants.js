import {
   GET_GROUPS_AND_TRANSPORTERS_SUCCESS,

   GET_PACKING_TYPES_SUCCESS,
   GET_VEHICLE_TYPES_SUCCESS,
   GET_VEHICLE_BODY_TYPES_SUCCESS,
   GET_PAYMENT_CYCLES_SUCCESS,
   GET_PRICING_BASIS_SUCCESS,
   GET_PRODUCT_CATEGORIES_SUCCESS,
   GET_BUSINESS_VOLUMES_SUCCESS,
   GET_SLABS_SUCCESS,
   GET_GROUPS_SUCCESS,
   GET_TRANSPORTERS_SUCCESS,
   GET_HOLISTICS_SUCCESS,
   GET_HOLISTICS_SUBMITTING,
   GET_BRANCHES_DATA,
   GET_REPORTS,
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
   SAVE_PLANT_LOCATION_LIST,
   SAVE_DEPOT_LOCATION_LIST,
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
export default (state = {
   groups: [],
   transporters: [],
   packingTypes: [],
   vehicleTypes: [],
   vehicleBodyTypes: [],
   paymentCycles: [],
   pricingBasis: [],
   businessVolumes: [],
   slabs: [],
   productCategories: [],
   holistics: {
      dataSubmitting: false,
      token: "",
      embedCode: "53778f4aa0b1f4a45cf97c60"
   },
   branchesList: [],
   secondaryToLocations: [],
   secondaryUpToKmList: [],
   courierMovements: [],
   courierModes: [],
   courierZones: [],
   courierSlabs: [],
   currencyDetails:[],
   rfqTypes: [],
   reportsTabs: [],
   reportLocations: {},
   YardToYardConstants: {},
   chaList: [],
   currencyTypes: [],
   uploadPlans: [],
   consigneeList: [],
   downloadUPTemp: [],
   googleStudioReport: {},
   incotermsList: [],
   costHeadList: [],
   selectedNavBranch: {},
   fuelTypes: [],
   spotContractReasons: [],
   seaAndAirLines: {}
}, action) => {
   let newState;

   if (action.type === GET_GROUPS_AND_TRANSPORTERS_SUCCESS) {
      newState = {
         ...state,
         groups: action.groups,
         transporters: action.transporters
      };
   }

   else if (action.type === GET_PACKING_TYPES_SUCCESS) {
      newState = {
         ...state,
         packingTypes: action.data
      };
   }
   else if (action.type === GET_VEHICLE_TYPES_SUCCESS) {
      newState = {
         ...state,
         vehicleTypes: action.data
      };
   }
   else if (action.type === GET_VEHICLE_BODY_TYPES_SUCCESS) {
      newState = {
         ...state,
         vehicleBodyTypes: action.data
      };
   }
   else if (action.type === GET_PAYMENT_CYCLES_SUCCESS) {
      newState = {
         ...state,
         paymentCycles: action.data
      };
   }
   else if (action.type === GET_PRICING_BASIS_SUCCESS) {
      newState = {
         ...state,
         pricingBasis: action.data
      };
   }
   else if (action.type === GET_PRODUCT_CATEGORIES_SUCCESS) {
      newState = {
         ...state,
         productCategories: action.data
      };
   }
   else if (action.type === GET_BUSINESS_VOLUMES_SUCCESS) {
      newState = {
         ...state,
         businessVolumes: action.data
      };
   }
   else if (action.type === GET_SLABS_SUCCESS) {
      newState = {
         ...state,
         slabs: action.data
      };
   }
   else if (action.type === GET_GROUPS_SUCCESS) {
      newState = {
         ...state,
         groups: action.groups
      };
   }
   else if (action.type === GET_TRANSPORTERS_SUCCESS) {
      newState = {
         ...state,
         transporters: action.transporters
      };
   }
   else if (action.type === GET_HOLISTICS_SUBMITTING) {
      newState = {
         ...state,
         holistics: { ...state.holistics, dataSubmitting: true }
      };
   }
   else if (action.type === GET_HOLISTICS_SUCCESS) {
      newState = {
         ...state,
         holistics: {
            ...state.holistics,
            dataSubmitting: false,
            token: action.token,
            embedCode: action.embedCode ? action.embedCode : "53778f4aa0b1f4a45cf97c60"
         }
      };
   }
   else if (action.type === GET_REPORTS) {
      newState = {
         ...state,
         holistics: {
            ...state.holistics,
            dataSubmitting: false,
            token: action.token,
            embedCode: action.embedCode,
         }
      };
      if (action.reportsTabs) {
         newState.reportsTabs = action.reportsTabs;
         (action.reportsTabs || []).map((el, index) => { 
            if (!el.id) {
               el.id = index+1; 
            }
            el.value = el.report_name;
         });
      }
   }
   else if (action.type === GET_BRANCHES_DATA) {
      const branchArr = (action.data.list || []).map((branch) => {
         return {
            value: branch.branch_id,
            label: branch.branch_name
         };
      });
      newState = {
         ...state,
         branchesList: branchArr,
      }
   }
   else if (action.type === GET_SECONDARY_TO_LOCATION_SUCCESS) {
      newState = {
         ...state,
         secondaryToLocations: action.data
      };
   }
   else if (action.type === SAVE_SECONDARY_UPTO_KM_LIST) {
      newState = {
         ...state,
         secondaryUpToKmList: action.data || []
      }
   }
   else if (action.type === GET_MOVEMENTS_SUCCESS) {
      newState = {
         ...state,
         courierMovements: action.data
      };
   }
   else if (action.type === GET_MODES_SUCCESS) {
      newState = {
         ...state,
         courierModes: action.data
      };

   }
   else if (action.type === GET_ZONES_SUCCESS) {
      newState = {
         ...state,
         courierZones: action.data || []
      };
   }
   else if(action.type === SAVE_COURIER_SLABS) {
      newState = {
         ...state,
         courierSlabs: action.data || []
      };
   }
	else if (action.type === CURRENCY_DETAILS_SUCCESS) {
		newState = {
			...state,
			currencyDetails: action.data || []
		};
   }
   else if(action.type === SAVE_RFQ_TYPES) {
      newState = {
			...state,
			rfqTypes: action.data || []
		};
   }
   else if(action.type === MARKET_REPORT_LOCATIONS_DATA) {
      newState = {
         ...state,
         reportLocations: action.data
      };
   }
   else if(action.type === SAVE_YARD_TO_YRAD_CONSTANTS_LIST) {
      newState = {
         ...state,
         YardToYardConstants: action.data
      };
   }
   else if(action.type === SAVE_MULTI_MODE_CONTAINER_LIST) {
      newState = {
         ...state,
         containerTypes: action.data || []
      };
   }
   else if(action.type === SAVE_MULTI_MODE_MOVEMENT_TYPE_LIST) {
      newState = {
         ...state,
         multiModalMovementTypes: action.data || []
      };
   }
   else if(action.type === SAVE_PLANT_LOCATION_LIST) {
      newState = {
         ...state,
         plantLocationList: action.data || []
      };
   }
   else if(action.type === SAVE_DEPOT_LOCATION_LIST) {
      newState = {
         ...state,
         depotLocationList: action.data || []
      };
   }
   else if(action.type === SAVE_CHA_LIST) {
      newState = {
         ...state,
         chaList: action.data
      }
   }
   else if(action.type === SAVE_CURRENCY_TYPES) {
      newState = {
         ...state,
         currencyTypes: action.data
      }
   }
   else if(action.type === GET_UPLOAD_PLAN_DATA){
      newState = {
         ...state,
         uploadPlans: action.data
      }
   }else if(action.type === GET_CONSIGNEE_DATA){
      newState = {
         ...state,
         consigneeList: action.data
      }
   }else if(action.type === DOWNLOAD_UPLOADPLAN_TEMPLATE){
      newState = {
         ...state,
         downloadUPTemp: action.data
      }
   }else if(action.type === SAVE_GOOGLE_STUDIO_REPORT) {
      newState = {
          ...state,
          googleStudioReport: action.data,
      };
   }else if(action.type === SAVE_INCOTERMS_LIST) {
      newState = {
         ...state,
         incotermsList: action.data
      }
   } else if(action.type === SAVE_COST_HEADS_LIST) {
        newState = {
           ...state,
           costHeadList: action.data
        }
   }
   else if(action.type === SAVE_SELECTED_BRANCH_DETAILS) {
      newState = {
         ...state,
         selectedNavBranch: action.data || {}
      }
   } else if (action.type === GET_FUEL_TYPES_SUCCESS) {
      newState = {
         ...state,
         fuelTypes: action.data
      };
   } else if(action.type === SAVE_SPOT_CONTRACT_REASONS) {
      newState = {
         ...state,
         spotContractReasons: action.data || []
      };
   } else if(action.type === SAVE_SEA_AND_AIR_LINES_LIST) {
      newState = {
         ...state,
         seaAndAirLines: action.data
      }
   }
   return newState || state;
}