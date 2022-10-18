export default class RFQDetails {
   constructor(rfqDetails = {}) {
      this.name = rfqDetails.rfq_name;
      this.contractTenureFrom = new Date(rfqDetails.contract_tenure.from).setHours(0, 0, 0);
      this.contractTenureTo = rfqDetails.contract_tenure.to;
      this.serviceType = rfqDetails.service_type || 1;
      this.serviceTypeName = rfqDetails.service_type_name || 'FTL';
      this.serviceCategoryType = rfqDetails.service_category_type || 1;
      this.serviceCategoryTypeName = rfqDetails.service_category_type_name || 'Sea Freight';
      this.serviceModes = (rfqDetails.service_modes.length) ? rfqDetails.service_modes : (this.serviceType === 1 ? [5] : []);
      this.insuranceBy = rfqDetails.insurance_by == 0 ? 1 : rfqDetails.insurance_by;
      this.allowBidding = rfqDetails.bidding_details.is_allow_bidding;
      this.acceptPartialSolution = rfqDetails.bidding_details.is_accept_partial_solution;
      this.biddingStart = rfqDetails.bidding_start;
      this.biddingEnd = rfqDetails.bidding_end;
      this.floated = rfqDetails.floated;
      this.floatedBy = rfqDetails.floated_by;
      this.documentType = rfqDetails.courier_document_details ? rfqDetails.courier_document_details.courier_document_type : 2;
      this.documentName = rfqDetails.courier_document_details ? rfqDetails.courier_document_details.courier_document_name : 'Non Document';
      this.movementType = rfqDetails.movement_type;
      this.tripsType = rfqDetails.trips_type || 1;
      this.tripsCount = rfqDetails.trips_count || 1;
      this.contractNote = rfqDetails.contract_note || '';
      this.subplant_name = rfqDetails.subplant_name || undefined;
      this.multiLevelMovementType = rfqDetails.multi_level_movement_type;
      this.shippingType = rfqDetails.shipping_type;
      this.otherCosts = rfqDetails.includes_other_charges || false;
      this.bidCompletedCount = rfqDetails.bid_complete_count;
      this.bidPendingCount = rfqDetails.bid_pending_count;
      this.allBidsCompleted = rfqDetails.all_bids_completed;
      this.secondaryContractType = rfqDetails.secondary_contract_type || 2;
		this.courierPriceWeight = rfqDetails.courier_price_weight;
      this.courierTatWeight = rfqDetails.courier_tat_weight;
     this.courierBidStatus=rfqDetails.courier_bid_status;
      this.cha_id = rfqDetails.cha_id;
      this.cha_name = rfqDetails.cha_name;
      this.boundType= rfqDetails.bound_type || 2;
      this.dedicatedType= rfqDetails.dedicated_type || 2;
      this.fuelTypes = rfqDetails.fuel_type;
      this.fuelName = rfqDetails.fuel_name || "NA";
      this.incoTerms = rfqDetails.incoTerms || 2;
      this.incoTermsName = rfqDetails.incoTerms_name || 'Ex Works';
      this.spotContractReason = rfqDetails.spot_contract_reason || "";
      this.spotContractReasonId = rfqDetails.spot_contract_reason_id;
   }
   setName = (name) => {
      this.name = name;
   }
   setMovementType = (movementType, movementTypeName) => {
      this.movementType = movementType;
      this.movementTypeName = movementTypeName;
   }
   setDocumentType = (type) => {
      this.documentType = type;
      this.documentName = type === 1 ? 'Document' : 'Non Document'
   }
   setContractTenureFrom = (contractTenureFrom) => {
      this.contractTenureFrom = new Date(contractTenureFrom).setHours(0, 0, 0);
   }
   setContractTenureTo = (contractTenureTo) => {
      this.contractTenureTo = contractTenureTo;
   }
   setServiceType = (serviceType, serviceTypeName) => {
      this.serviceType = serviceType;
      this.serviceTypeName = serviceTypeName;
   }
   setServiceModes = (serviceModes) => {
      this.serviceModes = serviceModes;
   }
   setInsuranceBy = (insuranceBy) => {
      this.insuranceBy = insuranceBy;
   }
   setServiceCategoryType = (serviceCategoryType, serviceCategoryTypeName) => {
      this.serviceCategoryType = serviceCategoryType;
      this.serviceCategoryTypeName = serviceCategoryTypeName;
   }
   setServiceModes = (serviceModes) => {
      this.serviceModes = serviceModes;
   }
   setAllowBidding = (allowBidding) => {
      this.allowBidding = allowBidding;
   }
   setAcceptPartialSolution = (acceptPartialSolution) => {
      this.acceptPartialSolution = acceptPartialSolution;
   }
   setTripsType = (tripsType) => {
      this.tripsType = tripsType;
   }
   setContractNote = (contractNote) => {
      this.contractNote = contractNote;
   }
   setMultiLevelMovementType = (multiLevelMovementType) => {
      this.multiLevelMovementType = multiLevelMovementType
   }
   setShippingType = (shippingType) => {
      this.shippingType = shippingType;
   }
   setOtherCosts = (otherCosts) => {
      this.otherCosts = otherCosts;
   }
   setSecondaryContractType = (secondaryContractType) => {
      this.secondaryContractType = secondaryContractType;
   }
	setCourierPriceWeight = (price) => {
		this.courierPriceWeight = price;
	}
	setCourierTatWeight = (tat) => {
		this.courierTatWeight = tat;
   }

   setCHAValue = (value) => {
      this.cha_name = value.cha_name;
      this.cha_id = value.cha_id;
   }

   setBoundType = (boundType) => {
      this.boundType = boundType;
   }
   
   setDedicatedType=(dedicatedType) =>{
      this.dedicatedType = dedicatedType;
   }

   setFuelType = (fuelTypes)=> {
      this.fuelTypes = fuelTypes
   }

  setIncoTerms = (id, name) => {
   this.incoTerms = id;
   this.incoTermsName = name;
  }

  setSpotContractReason = (reason) => {
   this.spotContractReason = reason.name;
   this.spotContractReasonId = reason.id;
  }

   getApiData = () => {
      return {
         rfq_name: this.name,
         multi_level_movement_type: this.multiLevelMovementType,
         shipping_type: this.shippingType,
         includes_other_charges: this.otherCosts,
         secondary_contract_type: this.secondaryContractType,
			courier_price_weight: Number(this.courierPriceWeight),
         courier_tat_weight: Number(this.courierTatWeight),
         contract_tenure: {
            from: new Date(this.contractTenureFrom).setHours(0, 0, 0),
            to: this.contractTenureTo ? new Date(this.contractTenureTo).setHours(23, 59, 59) : null,
            movement_type: this.movementType,
            movement_type_name: this.movementTypeName,
         },
         service_type: this.serviceType,
         service_type_name: this.serviceTypeName,
         service_category_type: this.serviceCategoryType,
         service_category_type_name: this.serviceCategoryTypeName,
         service_mode: this.serviceModes || [],
         insurance_by: this.insuranceBy,
         bidding_details: {
            is_allow_bidding: this.allowBidding,
            is_accept_partial_solution: this.acceptPartialSolution
         },
         contract_note: this.contractNote,
         trips_type: this.tripsType,
         subplant_name: this.subplant_name ? this.subplant_name : undefined,
         courier_document_details: this.serviceType === 3 ? {
            document_type: this.documentType,
            document_name: this.documentName
         } : undefined,
         cha_id: this.cha_id,
         cha_name: this.cha_name,
         bound_type: this.boundType,
         dedicated_type : this.dedicatedType,
         fuel_type: this.fuelTypes,
         incoTerms: this.incoTerms,
         incoTerms_name: this.incoTermsName,
         spot_contract_reason: this.spotContractReason,
         spot_contract_reason_id: this.spotContractReasonId
      }
   }
}