import Moment from 'moment';

import Stop from 'Models/Stop';
import LCLStop from 'Models/LCLStop';
import Leg from 'Models/Leg';
import BiddingDetails from 'Models/BiddingDetails';
import Cost from 'Models/Cost';
import Status from 'Models/Status';
import Bid from 'Models/Bid';
import Slab from 'Models/SecSlab';

export default class Trip {
   constructor(trip = {}) {
      this.id = trip.trip_id || trip.zone_trip_id;
      this.rfqId = trip.rfq_id;
      this.vehicleType = (trip.vehicle_details || {}).vehicle_type;
      this.vehicleTypeName = (trip.vehicle_details || {}).vehicle_type_name;

      this.vehicleBodyType = (trip.vehicle_details || {}).vehicle_body_type;
      this.vehicleBodyTypeName = (trip.vehicle_details || {}).vehicle_body_type_name;

      this.productCategoryType = (trip.vehicle_details || {}).product_category_type;
      this.productCategoryTypeName = (trip.vehicle_details || {}).product_category_type_name;
      this.productDensity = (trip.vehicle_details || {}).product_density;
      //this.movementType = (trip.vehicle_details || {}).movement_Type;
      this.movementTypeName = (trip.vehicle_details || {}).movement_type_name;

      this.distance = trip.distance || '';
      this.distanceUOM = trip.distance_uom || '';
      this.is_km_inserted_by = trip.is_km_inserted_by || '';
      this.routeCode = trip.route_code && trip.route_code.trim() || '';

      this.remarks = (trip.vehicle_details || {}).remarks;
      this.noOfContainers = trip.no_of_containers || 1;
      this.consigners = trip.consigners || [];
      this.consignees = trip.consignees || [];
      this.multi_mode_leg_trip = trip.multi_mode_leg_trip || [];
      this.number_of_legs_count = trip.number_of_legs_count;
      this.multi_level_movement_type = trip.multi_level_movement_type;
      this.shipping_type = trip.shipping_type;
      this.subTripId = trip.sub_trip_id;
      this.subTrips = (trip.sub_trip_multi_mode || []).length > 0 ? (trip.sub_trip_multi_mode || []).map((trip) => {
         return new Trip(trip)
      }) : [];
      if (!((trip.vehicle_details || {}).placement_time === undefined)) {
         this.placementTime = (trip.vehicle_details || {}).placement_time
         this.placementTimeFormatted = Moment((trip.vehicle_details || {}).placement_time).format('DD MMM YYYY hh:mma');
      }
      this.stops = (() => {
         const stops = (trip.stops || []).map((stop) => {
            return new Stop(stop);
         })
         if (stops.length > 1) {
            return [stops[0], stops[stops.length - 1], ...stops.slice(1, stops.length - 1)]
         } else {
            return [];
         }
      })();
      this.from = (trip.from && (typeof(trip.from) === 'object')) ? (trip.from_location || trip.from.city || trip.from.location || '') : trip.from || '';
      this.to = (trip.to && (typeof(trip.to) === 'object')) ? (trip.to_location || trip.to.city || trip.to.location || '') : trip.to || '';
      this.l1Hits = trip.l1_hits;
      this.relayEndTime = trip.relay_end_time;
      this.autoBidRelayTime = trip.auto_bid_relay_time;
      this.noOfPickups = this.stops.filter((stop) => {
         return (stop.type === 1 || stop.type === 3);
      }).length;
      this.noOfDrops = this.stops.filter((stop) => {
         return (stop.type === 2 || stop.type === 3);
      }).length;
      this.biddingDetails = new BiddingDetails(trip.bidding_and_payments);
      this.ftlStops = trip.rfq_type === 6 ? [(trip.from || {}) , (trip.to || {})] : (trip.stops || []).map((stop) => {
         return new Stop(stop);
      });
      this.lclStops = (trip.stops || []).map((stop) => {
         return new LCLStop(stop);
      })
      this.legs = (trip.multi_mode_leg_trip || []).map((multiModalData) => {
         return new Leg(multiModalData);
      })
      this.costs = (trip.costs || []).map((cost) => {
         return new Cost(cost);
      });
      this.bids = (trip.bids || []).map((bid) => {
         return new Bid(bid);
      });
      this.slabs = trip.service_type && trip.service_type === 3 ? trip.slabs : (trip.slabs || []).map((slab) => {
         return new Slab(slab);
      }) || [];
      this.hits = trip.hits;
      this.lastMonthofYearPrice= trip.last_month_of_year_price;
      this.lastYearDate= trip.last_year_date;
      this.lpp = trip.lpp;
      this.rfqType = trip.rfq_type;
      this.rfqServiceType = trip.service_type;
      this.status = trip.status && Object.keys(trip.status).length > 0 && new Status(trip.status);
      this.price = trip.price || undefined;
      this.priceUSD = trip.price_usd;
      this.priceSecondary = trip.price_secondary;
      this.transporterVol = trip.transporterVol || '';
      if (this.price) {
         this.tat = {
            tatValue: (trip.tat || {}).value,
            tatUnit: {
               tatUnitName: (trip.tat || {}).name,
               tatUnit: (trip.tat || {}).unit,
            }
         }
      }
      this.challengePrice = trip.challenge_price;
      this.challengePriceUSD = trip.challenge_price_usd;
      this.challengePriceSecondary = trip.challenge_price_secondary;
      this.counterPrice = trip.counter_price;
      this.counterStatus = trip.counter_status;
      this.cpRemarks = trip.cp_remarks;
      this.isCounter = trip.is_counter;
      this.isLoiSent = trip.is_loi_sent;
      this.isLoiWithCPSent = trip.is_loi_with_cp_sent;
      this.allowBusinessVolume = trip.allowBusinessVolume;
      this.showTat = trip.showTat;
      this.qbrShowRate = trip.qbrShowRate;
      this.companyId = trip.company_id;
      this.isAccept = trip.is_accept;
      this.loiAcceptValidFrom = trip.loi_accept_valid_from;
      this.loiAcceptValidTo = trip.loi_accept_valid_to;
      this.orderText = trip.order_text;
      this.originalPrice = trip.original_price || trip.price;
      this.totalPrice = trip.total_price;
      this.pricingBasisName = trip.pricing_basis_name;
      this.pricingBasis = trip.pricing_basis;
      this.paymentCycleName = trip.paymentCycleName;
      this.isLoiApproved = trip.is_loi_approved;
      this.isApprovalSent = trip.is_approval_sent;
      this.l1AcceptMandatory = trip.l1AcceptMandatory;
      this.showCeilingPriceBeforeBidStart = trip.showCeilingPriceBeforeBidStart;
      this.lppList = (trip.lpp_list || []).map((lpp) => {
         return {
            id: lpp.id,
            value: lpp.value
         }
      });
      this.lpp1 = trip.lpp1 || 0;
      this.lpp2 = trip.lpp2 || 0;
      this.lpp3 = trip.lpp3 || 0;
      this.lpp4 = trip.lpp4 || 0;
      this.lpp5 = trip.lpp5 || 0;
      this.lppUsd = trip.lpp_usd || 0;
      this.baseRate = trip.base_rate;
      this.marketRate = trip.market_rate || trip.marketRate;
      this.siteRate = trip.site_rate;
      this.manualLPP = trip.manual_lpp;
      this.marketSiteRatePercentage = trip.market_site_rate_percentage || '';
      this.placedNumberOfTrucks = trip.placed_number_of_trucks;

      this.seekerInstructions = (trip.bids && trip.bids.length > 0 && trip.bids[trip.bids.length - 1].seeker_instruction) ? trip.bids[trip.bids.length - 1].seeker_instruction : trip.seeker_instruction;
      this.seekerRemarks = (trip.bids && trip.bids.length > 0 && trip.bids[trip.bids.length - 1].seeker_remarks) ? trip.bids[trip.bids.length - 1].seeker_remarks : trip.seeker_remarks;
      this.providerRemarks = (trip.bids && trip.bids.length > 0 && trip.bids[trip.bids.length - 1].provider_remarks) ? trip.bids[trip.bids.length - 1].provider_remarks : trip.provider_remarks;

      this.cpState = trip.cp_state;
      this.multimodalLineType = trip.multimodal_line_type;

      //TEMPORARY HACK...... TRIPS IS CONSIDERED AS LOT AS WELL
      this.boxPrice = trip.box_price;
      this.lotId = trip.lot_id;
      this.lotName = trip.lot_name;
      this.tripsCount = trip.trips_count || 0;

      this.tripBidEnd = trip.trip_bid_end || 0;
      this.base_volume = trip.base_volume || 0;

      this.multiModeHeadingCharges = trip.multi_mode_heading_charges || [];
      this.parentTripId = trip.parent_trip_id;
      this.tripCostList = trip.trip_cost_list || [];
      this.totalCeilingPrice = trip.total_ceiling_price || [];
      this.totalCeilingPriceUSD = trip.total_ceiling_price_usd || '';
      this.totalCeilingPriceINR = trip.total_ceiling_price_inr || '';
      this.totalCeilingPriceSecondary = trip.total_ceiling_price_secondary || '';
      this.totalCeilingPriceVolUSD = trip.total_ceiling_price_volume_usd || '';
      this.totalCeilingPriceVolINR = trip.total_ceiling_price_volume_inr || '';
      this.totalCeilingPriceVolSecondary = trip.total_ceiling_price_volume_secondary || '';

      this.vehicleTypeName = (trip.vehicle_details || {}).vehicle_type_name;

      this.headingChargesMr = trip.heading_charges_mr;
      this.headingChargesLpp = trip.heading_charges_lpp;
      this.totalBudget = trip.total_budget;
      this.secName = trip.secondary_name;
      this.secUptoKM = trip.secondary_upto_km;
      this.secKmRun = trip.secondary_km_run;
      this.workingHoursPerDay = trip.working_hours_per_day;
      this.workingDaysPerMonth = trip.working_days_per_month;
      this.secondaryQbr = trip.secondary_qbr;
      this.numberOfVehicle = trip.number_of_vehicle;
      this.truckCapacity = trip.truck_capacity;
      this.originalQbr = trip.original_qbr || (trip.bidding_and_payments || {}).qbr || '';
      this.secTat = trip.tat_value || trip.tat || {
         unit: '',
         value: '',
         name: ''
      };
      this.locationType = trip.location_type;
      this.locationTypeName = trip.location_type_name;
      this.zoneName = trip.zone_name || '';
      this.zoneType = trip.zone_type || '';
      this.zoneList = trip.zone_list || [];
      this.modeName = trip.mode_name || '';
      this.modeTypeId = trip.mode_type || '';
      this.movementTypeId = trip.movement_type || ''
      this.movementName = trip.movement_name || '';
      this.zone = trip.zone || '';
      this.commonChargeName = trip.name;
      this.commonChargeId = trip.other_charge_id;
      this.commonChargeTripId = trip.other_trip_id;
      this.commonChargeCost = trip.other_charge_cost;
      this.branchType = trip.branch_id;
      this.branchTypeName = trip.branch_type_name;
      this.eximTatName = (trip.exim_tat || {}).name;
      this.additionalZoneFrom = trip.additional_zone_from,
      this.additionalZoneTo = trip.additional_zone_to,
      this.additionalMaxTAT = trip.additional_max_tat,
      this.additionalMaxQBR = trip.additional_qbr,
      this.qbr = trip.qbr,
      // this.marketRate = trip.marketRate,
      this.legName = trip.legName,
      this.legType = trip.leg_type,
      this.providerName = trip.providerName,
      this.providerType = trip.providerType,
      this.transporters = trip.transporters_group || [],
      this.docs = trip.docs || [],
      this.distance = trip.distance || '';
      this.multiModeRemarks = trip.remarks || '';
      this.legBudget = trip.legBudget;
      this.multiModeTATUnit = trip.tatUnit;
      this.multiModeTATValue = trip.tatValue;
      this.multiModeBusinessVolumeUnit = trip.businessVolumeUnit;
      this.multiModeBusinessVolumeValue = trip.businessVolumeValue;
      this.contractTenureFrom = trip.contractTenureFrom,
      this.contractTenureTo = trip.contractTenureTo,
      this.commodityCategory = trip.commodityCategory,
      this.commodityName = trip.commodityName,
      this.wagonType = trip.wagonType,
      this.freightValue = trip.freightValue,
      this.loadType = trip.loadType,
      this.tarrifLines = trip.tarrifLines,
      this.container_details = trip.container_details,
      this.multi_mode_movement_type_id = trip.multi_mode_movement_type_id,
      this.multi_mode_movement_type = trip.multi_mode_movement_type,
      this.container_details = trip.container_details || {},
      this.bid_remarks = trip.bid_remarks || ''
      this.branchFromType = trip.branch_from_id;
      this.branchFromTypeName = trip.branch_from_type_name;
      this.legCostName = trip.leg_cost_name || '';
      this.legCostValue = trip.leg_cost_type || '';
      this.priceInBaseCurrency = trip.price_in_base_currency || '';
      this.priceInBaseCurrencyType = trip.price_in_base_currency_type || '';
      this.priceInBaseCurrencySymbol = trip.price_in_base_currency_symbol || '';
      this.multiple_route_distance = trip.multiple_route_distance || [];
      this.isAcceptanceCeilingPrice = trip.acceptance_ceiling_price || false;
      this.lppPreviousDate = trip.lpp_previous_date;
      this.lppPreviousVehicleType = trip.lpp_previous_vehicle_type || 'NA';
      this.isLOICancelled = trip.is_loi_cancelled;
      this.loiCancelRemark = trip.loi_cancel_remark;
      this.outboundDelivery = trip.outboundDelivery;
      this.plantCodeone = trip.plantCode_one;
	   this.obdsroutecode = trip.route_code;
	   this.shipToName = trip.shipToName;
	   this.qty = trip.qty;
	   this.lzone = trip.lzone;
	   this.distCode = trip.distCode;
	   this.distName = trip.distName;
	   this.regionName = trip.regionName;
      this.talukaName = trip.taluka_Name || "NA";
      this.celingPriceUnit= trip.celingPriceUnit;
      this.materialName= trip.materialName;
      this.distChannel= trip.distChannel || "NA";
      this.showBidStarted = trip.showBidStarted || false;
      this.metricSystem = trip.metric_system || 1;
      this.metricSystemName = trip.metric_system_name || 'Metric (Kg, Cm)';
      this.cargoParticularList = trip.cargo_particular_list || [];
      this.temp_min = trip.temp_min;
      this.temp_max = trip.temp_max;
      this.temp_name = trip.temp_name;
      this.noOfManPower = trip.noOfManPower || '';
      this.leg_budget_cp = trip.leg_budget_cp || 0;
      this.leg_budget_cp_inr = trip.leg_budget_cp_inr || 0;
      this.leg_budget_cp_secondary = trip.leg_budget_cp_secondary || 0;
      this.leg_budget_cp_usd = trip.leg_budget_cp_usd || 0;
      this.leg_cost_name = trip.leg_cost_name || '';
      this.dphHikeIndicator = trip.dph_hike_indicator;
      this.increaseDecreasePrice = trip.increase_decrease_rupee;
      this.mileage =  trip.mileage;
      this.minimumGuarantee = trip.minimum_guarantee;
      this.hideCeilingPrice = trip.hideCeilingPrice;
      this.requiredVehicleCapacity = trip.vehicle_capacity_MT;
      this.vehicleCapacity = trip.vehicle_capacity;
      this.qty_balance_to_procure = trip.qty_balance_to_procure;
      this.qty_prior_to_pr = trip.qty_prior_to_pr;
      this.qty_proposed_now = trip.qty_proposed_now;
      this.total_estimated_qty = trip.total_estimated_qty;
      this.vendor_name = trip.vendor_name;
      this.material_code_description = trip.material_code_description;
      this.uom = trip.uom;
      this.vehicleSpecification = trip.vehicle_specification || [];
      this.carryingCapacity = trip.carrying_capacity;
      this.extraCostPerKm = trip.extra_cost_per_km;
      this.extraCostPerKmPrice = trip.extra_cost_per_km_price;
      this.fixedKmPerMonth = trip.fixed_km_Per_month || trip.fixed_km_per_month;
      this.fromRange = trip.from_range;
      this.toRange = trip.to_range;
      this.extra_cost_per_km_cp = trip.extra_cost_per_km_cp;
      this.extra_cost_cp_state = trip.extra_cost_cp_state;
      this.isWithdrawBid = trip.is_withdraw_bid;
      this.isAccessBidWithdrawn = (trip.bids && trip.bids.length > 0 && trip.bids[trip.bids.length - 1].is_access_bid_withdrawn) ? trip.bids[trip.bids.length - 1].is_access_bid_withdrawn : trip.is_access_bid_withdrawn;
      this.depo_name = trip.depo_name || '';
      this.depo_code = trip.depo_code || '';
      this.sub_trip_disposal_product = trip.sub_trip_disposal_product || [];
      this.product_type = trip.product_type || '';
      this.lot_trip_parent_id = trip.lot_trip_parent_id;
      this.contractTenureFrom = trip.contract_tenure_from;
      this.contractTenureTo = trip.contract_tenure_to;
      this.sum_of_product_price = trip.sum_of_product_price;
      this.sum_lowest_price = trip.sum_lowest_price;
      this.sum_order = trip.sum_order;
      this.sum_order_text = trip.sum_order_text;
      this.isBags = trip.isBags || 0;
      this.isBulk = trip.isBulk;
      this.bags = trip.bags;
      this.linerId = trip.liner_id;
   }

   setCargoParticulars = (value) => {
      this.cargoParticularList = value;
   }
   setMetricSystem = (value) => {
      this.metricSystem = value.value;
      this.metricSystemName = value.name;
   }
   setSecName = (value) => {
      this.secName = value
   }

   setSecUptoKM = (value) => {
      this.secUptoKM = value
   }

   setSecTat = (label, value) => {
      this.secTat[label] = value

   }

   setSecKmRun = (value) => {
      this.secKmRun = value
   }

   setWorkingHoursPerDay = (value) => {
      this.workingHoursPerDay = value
   }

   setWorkingDaysPerMonth = (value) => {
      this.workingDaysPerMonth = value
   }

   setSecondaryQbr = (value) => {
      this.secondaryQbr = value;
   }

   setOriginalQbr = (value) => {
      this.originalQbr = value;
   }

   setHeadingChargesMr = (value) => {
      this.headingChargesMr = value;
   }

   setHeadingChargesLpp = (value) => {
      this.headingChargesLpp = value;
   }

   setTotalBudget = (value) => {
      this.totalBudget = value;
   }

   setVehicleBodyType = (vehicleBodyType, vehicleBodyTypeName) => {
      this.vehicleBodyType = vehicleBodyType;
      this.vehicleBodyTypeName = vehicleBodyTypeName;
   }
   setSecondaryToLocationType = (locationType, locationTypeName) => {
      this.locationType = locationType;
      this.locationTypeName = locationTypeName;
   }
   setSecondaryBranch= (branchType, branchTypeName) => {
      this.branchType = branchType;
      this.branchTypeName = branchTypeName;
   }

   setSecondaryFromBranch= (branchFromType, branchFromTypeName) => {
      this.branchFromType = branchFromType;
      this.branchFromTypeName = branchFromTypeName;
   }
   setProductCategoryType = (productCategoryType, productCategoryTypeName, productDensity) => {
      this.productCategoryType = productCategoryType;
      this.productCategoryTypeName = productCategoryTypeName;
      this.productDensity = productDensity;
   }
   setRemarks = (remarks) => {
      this.remarks = remarks;
   }
   setSeekerRemarks = (seekerRemarks) => {
      this.seekerRemarks = seekerRemarks;
   }
   setProviderRemarks = (providerRemarks) => {
      this.providerRemarks = providerRemarks;
   }
   setPlacementTime = (placementTime) => {
      this.placementTime = placementTime;
      this.placementTimeFormatted = Moment(this.placementTime).format('DD MMM YYYY hh:mma')
   }
   setVehicleType = (vehicleType, vehicleTypeName) => {
      this.vehicleType = vehicleType;
      this.vehicleTypeName = vehicleTypeName;
   }
   addStop = () => {
      this.stops.push(new Stop());
   }
   addLCLStop = () => {
      this.lclStops.push(new LCLStop());
   }
   addCost = () => {
      this.costs.push(new Cost());
   }
   addLeg = () => {
      this.legs.push(new Leg());
   }
   addSlab = () => {
      this.slabs.push(new Slab());
   }
   removeStop = (index) => {
      this.stops.splice(index, 1);
   }
   removeLCLStop = (index) => {
      this.lclStops.splice(index, 1);
   }
   removeLeg = (index) => {
      this.legs.splice(index, 1);
   }
   removeSlab = (index) => {
      this.slabs.splice(index, 1);
   }

   addRouteCode = (code) => {
      this.routeCode = code;
   }
   
   getStopsBasedOnRFQ = (rfqType, rfqServiceType) => {
      if (rfqType === 2 || rfqType === 5) {
         return this.legs;
      } else if (rfqServiceType === 1 || rfqServiceType === 4) {
         this.stops[0].setType(1);
         this.stops[1].setType(2);
         return [this.stops[0], ...this.stops.slice(2, this.stops.length), this.stops[1]]
      } else if (rfqServiceType === 2) {
         return this.lclStops;
      } else if (rfqServiceType === 3) {
         return this.lclStops;
      }
   }
   setNoOfContainers = (noOfContainers) => {
      this.noOfContainers = noOfContainers;
   }

   setNumberOfVehicle = (value) => {
      this.numberOfVehicle = value;
   }

   setTruckCapacity = (value) => {
      this.truckCapacity = value;
   }

   getConsigners = (consigners) => {

   }

   setTotalBudget = (value) => {
      this.priceInBaseCurrency = value.currency_name;
      this.priceInBaseCurrencyType = value.currency_type;
      this.priceInBaseCurrencySymbol = value.currency_symbol;
   }

   setDphHikePrice = (value) => {
      this.dphHikeIndicator = value;
   }

   setFuleVariation = (increaseDecreasePrice) => {
      this.increaseDecreasePrice = increaseDecreasePrice;
   }
   setMileage = (mileage)=>{
    this.mileage = mileage;
   }
   setLpp = (value) => {
      this.lpp = value;
   }
   setMarketRate = (value) => {
      this.marketRate = value;
   }
   setCarryingCapacity = (value) => {
      this.carryingCapacity = value;
   }
   setExtraCostPerKm = (value) => {
      this.extraCostPerKm = value;
   }
   setFixedKmPerMonth = (value) => {
      this.fixedKmPerMonth = value;
   }

   setMinimumGuarantee = (minimumGuarantee)=>{
      this.minimumGuarantee = minimumGuarantee;
   }
   setRequiredVehicleCapacity = (requiredVehicleCapacity)=>{
      this.requiredVehicleCapacity = requiredVehicleCapacity;
   }
   setVehicleCapacity = (vehicleCapacity) => {
      this.vehicleCapacity = vehicleCapacity;
   }
   setVehicleSpecification = (value, id) => {
      const index = this.vehicleSpecification.findIndex(data => data.value === id);
      if(index === -1){
         this.vehicleSpecification.push(Object.assign({},value));
      } else {
         this.vehicleSpecification.splice(index, 1)
      }
   }
   getApiData = (rfqType, rfqServiceType) => {
      return {
         trip_id: this.id,
         multimodal_line_type: this.multimodalLineType,
         no_of_containers: rfqServiceType === 4 ? this.noOfContainers : '',
         number_of_vehicle: this.numberOfVehicle || '',
         truck_capacity: this.truckCapacity || '',
         consignees: rfqServiceType === 4 ? this.consignees : [],
         consigners: rfqServiceType === 4 ? this.consigners : [],
         multi_mode_leg_trip: [], //this.multi_mode_leg_trip,
         multi_level_movement_type: this.multi_level_movement_type,
         shipping_type: this.shipping_type,
         number_of_legs_count: this.number_of_legs_count,
         route_code: this.routeCode,
         heading_charges_mr: this.headingChargesMr,
         heading_charges_lpp: this.headingChargesLpp,
         total_budget: this.totalBudget,
         location_type: this.locationType,
         location_type_name: this.locationTypeName,
         price_in_base_currency: this.priceInBaseCurrency,
         price_in_base_currency_type: this.priceInBaseCurrencyType,
         price_in_base_currency_symbol: this.priceInBaseCurrencySymbol,
         dph_hike_indicator : this.dphHikeIndicator,
         vehicle_details: {
            vehicle_type: this.vehicleType,
            vehicle_type_name: this.vehicleTypeName,
            vehicle_body_type: this.vehicleBodyType,
            vehicle_body_type_name: this.vehicleBodyTypeName,
            placement_time: this.placementTime,
            // product_category: this.productCategory,
            product_category_type: this.productCategoryType,
            product_category_type_name: this.productCategoryTypeName,
            product_density: this.productDensity,
            remarks: this.remarks,
            seekerRemarks: this.seekerRemarks,
            providerRemarks: this.providerRemarks,
            seeker_instructions: this.seekerInstructions,
         },
         // trip_bid_end: this.tripBidEnd,
         // relayEndTime: this.relayEndTime,
         cpState: this.cpState,
         seekerRemarks: this.seekerRemarks,
         providerRemarks: this.providerRemarks,
         seeker_instruction: this.seekerInstructions,
         branch_id :this.branchType,
         branch_type_name :this.branchTypeName,
         branch_from_id :this.branchFromType,
         branch_from_type_name :this.branchFromTypeName,
         metric_system: this.metricSystem,
         metric_system_name: this.metric_system_name,
         cargo_particular_list: this.cargoParticularList,
         increase_decrease_rupee:(this.dphHikeIndicator) ? Number(this.increaseDecreasePrice) : 0,
         mileage : (this.dphHikeIndicator) ? Number(this.mileage) : 0,
         minimum_guarantee : Number(this.minimumGuarantee),
         vehicle_capacity_MT : Number(this.requiredVehicleCapacity),
         vehicle_capacity: Number(this.vehicleCapacity),
         stops: (this.getStopsBasedOnRFQ(rfqType, rfqServiceType) || []).map((stop) => {
            return stop.getApiData();
         }),
         bidding_and_payments: this.biddingDetails.getApiData(),
         costs: (rfqType === 2 || rfqType === 5) ? (this.costs || []).map((cost) => {
            return cost.getApiData();
         }) : undefined,
         lpp: Number(this.lpp),
         marketRate: Number(this.marketRate),
         carrying_capacity: Number(this.carryingCapacity),
         extra_cost_per_km: Number(this.extraCostPerKm),
         fixed_km_Per_month: Number(this.fixedKmPerMonth),
         vehicle_specification: this.vehicleSpecification || [],
         depo_name: this.depo_name,
         depo_code: this.depo_code || '',
         sub_trip_disposal_product: this.sub_trip_disposal_product || [],
         product_type: this.product_type || ''
         // tat: rfqType === 3 && this.secTat || '',
         
      }
   }
}