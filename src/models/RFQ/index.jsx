import RFQDetails from 'Models/RFQ/RFQDetails';
import CargoInfo from 'Models/RFQ/CargoInfo';
import Trip from 'Models/Trip';
import Group from 'Models/Group';
// import Branch from 'Models/Branch';
import Transporter from 'Models/Transporter';
import Status from '../Status';
import BiddingDetails from 'Models/BiddingDetails';
import Bid from 'Models/Bid';

function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
const initialRFQ = {
   rfq_type: 1,

   rfq_details: {
      rfq_name: '',
      contract_tenure: {
         from: new Date().setHours(0, 0, 0),
         to: ""
      },
      service_type: 1,
      service_type_name: 'FTL',
      service_modes: [5],
      insurance_by: 0,
      bidding_details: {
         is_allow_bidding: true,
         is_accept_partial_solution: true
      },
      contract_note: "",
   },
   cargo_info: {
      cargo_details: [],
      cargo_description: "",
      packing_type: 0,
      handling_instructions: [],
      temperature_sensitive: {
         is_sensitive: false,
         min: 100,
         max: 150,
         unit: 1
      }
   },
   trip_details: {
      trips: [],
   },
   bidding_and_payments: {
      bidding_start: null,
      bidding_end: null,

      pricing_basis: 0,
      pricing_basis_name: "",

      payment_terms: 2,

      payment_cycle: 0,
      payment_cycle_name: "",

   },
   docs_and_transporters: {
      transporters: {
         is_all_transporters: false,
         transporter_details: [],
         groups: []
      },
      docs: []
   },
   subplant_name: [],
}

export default class RFQ {
   constructor(rfq = initialRFQ) {
      //this.id = 'b9ac0f067df14007a49b533244076570';
      this.id = rfq.rfq_id || undefined;
      this.isDraft = rfq.is_draft || true;
      this.type = rfq.rfq_type;
      this.companyId = rfq.company_id || undefined;
      this.companyName = rfq.company_name || undefined;
      this.companyBranch = rfq.company_branch || undefined;
      this.businessVolume = rfq.business_volume || undefined;
      this.rfqStatus = rfq.status;
      this.status = rfq.status && Object.keys(rfq.status).length > 0 && new Status(rfq.status) || {};
      this.rfqNumber = rfq.rfq_number || undefined;
      rfq.rfq_details['multi_level_movement_type'] = rfq.multi_level_movement_type;
      rfq.rfq_details['shipping_type'] = rfq.shipping_type;
      rfq.rfq_details['includes_other_charges'] = rfq.includes_other_charges;
      rfq.rfq_details['secondary_contract_type'] = rfq.secondary_contract_type;
      rfq.rfq_details['courier_price_weight'] = rfq.courier_price_weight;
      rfq.rfq_details['courier_tat_weight'] = rfq.courier_tat_weight;
      rfq.rfq_details['cha_id'] = rfq.cha_id;
      rfq.rfq_details['cha_name'] = rfq.cha_name;
      rfq.rfq_details['rfq_type'] = rfq.rfq_type;
      rfq.rfq_details['fuel_name'] = rfq.fuel_name;
      rfq.rfq_details['tk11_table'] = rfq.tk11_table;
      rfq.rfq_details['incoTerms'] = rfq.incoTerms;
      rfq.rfq_details['incoTermsName'] = rfq.incoTerms_name;
      this.rfqDetails = new RFQDetails(rfq.rfq_details);
      this.minBidders = rfq.minBidders;
      this.noOfCounterpriceAccepted = rfq.no_of_counter_priceAccepted;
      this.noOfCounterpricePending = rfq.no_of_counter_pricePendding;
      this.noOfCounterpriceRejected = rfq.no_of_counter_priceRejected;
      this.noOfCounterpriceSent = rfq.no_of_counter_priceSent;
      this.noOfLoiAccepted = rfq.no_of_loiAccepted;
      this.noOfLoiRejected = rfq.no_of_loiRejected;
      this.noOfLoiReceived = rfq.no_of_loiReceived;
      this.noOfLoiSent = rfq.no_of_loiSent;
      this.pending = rfq.pending;
      this.hideTransportersName = rfq.hideTransportersName;
      this.displayBaseVolume = rfq.displayBaseVolume;
      this.serviceTypeName = rfq.service_type_name;
      this.challengePriceWithAcceptOrReject = rfq.challenge_price_with_accept_or_reject;
      this.challengePriceWithCounter = rfq.challenge_price_with_counter;
      this.autoSelectTransporters = rfq.auto_select_transporters;
      this.bidEndTimeValue = rfq.bid_end_time_value;
      this.loiWithChallengePrice = rfq.loi_with_challenge_price;
      this.isEnableWithdrawBid = rfq.is_enable_withdraw_bid;
      this.cargoInfo = new CargoInfo(rfq.cargo_info);
      this.isNew = rfq.is_new;
      this.l1Hits = rfq.l1_hits;
      this.serviceType = rfq.service_type;
      this.trips = (rfq.trip_details.trips || []).map((trip) => {
         return new Trip(trip);
      });
      this.groups = rfq.docs_and_transporters.transporters.groups.map((group) => {
         return new Group(group);
      });
      this.transporters = rfq.docs_and_transporters.transporters.transporter_details.map((transporter) => {
         return new Transporter(transporter);
      });
      this.biddingDetails = new BiddingDetails(rfq.bidding_and_payments);
      this.created = rfq.created;
      this.vehicleType = rfq.vehicleType;
      this.vehicleTypeName = rfq.vehicleTypeName;
      this.documents = (rfq.docs_and_transporters || {}).docs || [];
      this.activity = rfq.activity || {};
      this.hits = rfq.hits;
      this.bids = rfq.bids;
      this.rfqNumber = rfq.rfq_number;
      this.paymentBy = rfq.payment_by;
      this.paymentBasis = rfq.pricing_basis;
      this.isAllTransporters = rfq.docs_and_transporters.transporters.is_all_transporters;
      this.subplant_name = rfq.subplant_name;
      this.approverEmail = rfq.approval_matrix_level || [];
      this.branchName = rfq.branch_name;
      this.branchId = rfq.branch_id;
      if(rfq.branch_name) {
         localStorage.setItem('branchDetail', JSON.stringify({ branch_name: rfq.branch_name, branch_id: rfq.branch_id}));
      }
      this.approverMessage = rfq.approver_message;

      this.subPlantsForTk11 = rfq.subplant_name;
      this.tkFailureCount = rfq.tk_failure_count;
      this.tkSuccessCount = rfq.tk_success_count;
      this.multiLevelMovementType = rfq.multi_level_movement_type;
      this.shippingType = rfq.shipping_type;
      this.otherCosts = rfq.includes_other_charges || false;
      this.includesOtherCharges = rfq.includes_other_charges;
      this.secondaryContractType = rfq.secondary_contract_type;
      this.loiApproverEmails = rfq.loi_approver_emails || [];
      this.approvalMatrixEmails = rfq.approval_matrix_emails || [];
      this.loiPeriodApplicable = rfq.configurable_loi_period || false;
      this.loiAcceptancePeriod = rfq.loi_acceptance_period || '02:00';
      this.otherCharges = (rfq.courier_common_charges || []).map(oCharge => {
                              return new Trip(oCharge);
                           });
		this.courierTatWeight = rfq.courier_tat_weight;
      this.courierPriceWeight = rfq.courier_price_weight;
      this.shippingType = rfq.shipping_type;
      this.transportersCount = rfq.transporter_ids && rfq.transporter_ids.length || 0;
      this.isRfqClosed = rfq.is_rfq_closed || false;
      this.minimumBiddersToCreateRfq = rfq.minimum_bidders_to_create_rfq || false;
      this.minimumBiddersCountToCreateRfq = rfq.minimum_bidders_count_to_create_rfq || '';
      this.isShowObdsDetails = rfq.is_show_obds_details || false;
      this.enableRouteDescription =rfq.is_enable_route_description || false;
      this.enabledObdsFilter = rfq.enabled_obds_filter || false;
      this.temp_max = rfq.temp_max;
      this.temp_min = rfq.temp_min;
      this.temp_name = rfq.temp_name;
      this.pricing_basis_qbr_rate = rfq.pricing_basis_qbr_rate;
      this.pricing_bassis_with_qbr_rate_id = rfq.pricing_bassis_with_qbr_rate_id;
      this.pricing_bassis_with_qbr_rate_name = rfq.pricing_bassis_with_qbr_rate_name;
      this.fuelName = rfq.fuel_name;
      this.fuelType = rfq.fuel_type;
      this.pricing_basis_qbr_rate = rfq.pricing_basis_qbr_rate;
      this.pricing_bassis_with_qbr_rate_id = rfq.pricing_bassis_with_qbr_rate_id;
      this.pricing_bassis_with_qbr_rate_name = rfq.pricing_bassis_with_qbr_rate_name;
      this.approver_names = rfq.approver_names || [];
      this.chatBoxEnable = rfq.chatBoxEnable || false;
   };
   setIsDraft = (isDraft) => {
      this.isDraft = isDraft;
   }
   seRFQType = (type) => {
      this.type = type;
   }
   setRFQType = (type) => {
      this.type = type;
   }
   addTrip = (trip = new Trip()) => {
      this.trips.push(trip)
   }
   setGroups = (groups) => {
      this.groups = groups;
   }
   setTransporters = (transporters) => {
      this.transporters = transporters;
   }
   setDocuments = (documents) => {
      this.documents = documents;
   }
   addDocument = (document) => {
      this.documents.push(document);
   }
   removeDocument = (index) => {
      this.documents.splice(index, 1);
   }
   setId = (id) => {
      this.id = id;
   }
   setIsAllTransporters = (value) => {
      this.isAllTransporters = value;
   }
   setSubPlants = (subPlants) => {
      this.subplant_name = subPlants;
   }



   getApiData = () => {
      // const branchDetail = localStorage.getItem('branchDetail') && JSON.parse(localStorage.getItem('branchDetail'));

      const branchDetail = localStorage.getItem('branchDetail')
      const name = (branchDetail && branchDetail.length > 0) ? JSON.parse(localStorage.getItem('branchDetail')) : '';
      return {
         rfq_id: this.id,
         rfq_type: this.type,
         is_draft: this.isDraft,
         branch_id: name.branch_id ? name.branch_id : undefined,
         branch_name: name.branch_name ? name.branch_name : undefined,
         rfq_details: this.rfqDetails.getApiData(),
         cargo_info: this.cargoInfo.getApiData(),
         bidding_and_payments: this.biddingDetails.getRFQApiData(),
         subplant_name: this.subplant_name,
         docs_and_transporters: {
            transporters: {
               is_all_transporters: this.isAllTransporters,
               groups: this.groups.map((group) => {
                  return group.getApiData(group)
               }),
               transporter_details: this.transporters.map((transporter) => {
                  return transporter.getApiData()
               }),
               transporter_ids: Array.from(new Set(flattenDeep((this.groups || []).map((group) => {
                  return (group.transporters || []).map((transporter) => { return transporter.id })
               })).concat((() => {
                  return this.transporters.map((transporter) => {
                     return transporter.id;
                  })
               })())))
            },
            docs: this.documents
         },
      }
   }
}