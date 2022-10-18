import uuid from 'uuid';

export default class Leg {
   constructor(leg = {}) {
      this.id = leg.id || uuid();
      this.from = leg.from || {
         city: "",
         state: "",
         country: "",
         latitude: "",
         longitude: "",
         location: leg.from || "",
         type: 1,
      };
      this.to = leg.to || {
         city: "",
         state: "",
         country: "",
         latitude: "",
         longitude: "",
         location: leg.to || "",
         type: 2,
      };
      this.type = leg.type || 1;
      this.legType = leg.leg_type;
      this.legTypeName = leg.leg_type_name || '';
      //this.qbr = leg.qbr;

      this.tatValue = (leg.tat || {}).value || '';
      this.tatUnit = (leg.tat || {}).unit || 1;
      this.tatUnitName = (leg.tat || {}).name || 'Days';
      this.eximTatValue = (leg.exim_tat || {}).value || '';
      this.eximTatUnit = (leg.exim_tat || {}).unit || 1;
      this.eximTatUnitName = (leg.exim_tat || {}).name || 'Days';

      this.businessVolumeValue = (leg.business_volume || {}).value || 1;
      this.businessVolumeUnit = (leg.business_volume || {}).unit;
      this.businessVolumeUnitName = (leg.business_volume || {}).name;

      this.headingChargesValue = (leg.heading_charges || {}).value;
      this.headingChargesUnit = (leg.heading_charges || {}).unit;
      this.headingChargesUnitName = (leg.heading_charges || {}).name;

		this.legCostType = leg.leg_cost_type;
      this.legCostName = leg.leg_cost_name || '';
      this.legCostSymbol = leg.leg_cost_symbol || '';

      this.legBudget = leg.leg_budget || '';
      this.legBudgetINR = leg.leg_budget_inr || '',
      this.legBudgetUSD = leg.leg_budget_usd || '',
      this.legBudgetSecondary = leg.leg_budget_secondary || '',
      this.legBudgetCP = leg.leg_budget_cp || '',
      this.legBudgetCPINR = leg.leg_budget_cp_inr || '',
      this.legBudgetCPUSD = leg.leg_budget_cp_usd || '',
      this.legBudgetCPSecondary = leg.leg_budget_cp_secondary || '',
      this.legBudgetVolumeCPINR = leg.leg_budget_volume_cp_inr || 0,
      this.legBudgetVolumeCPUSD = leg.leg_budget_volume_cp_usd || 0,
      this.legBudgetVolumeCPSecondary = leg.leg_budget_volume_cp_secondary || 0,
      this.tripCost = leg.trip_cost;
		this.containerFree = leg.container_free_days || '';

      //multi mode rfq
      this.multiModeHeadingCharges = (leg.multi_mode_heading_charges || []);
      this.secondaryModeOtherCharges = (leg.slabs || []);

      this.headingChargesMr = leg.headingChargesMr;
      this.headingChargesLpp = leg.headingChargesLpp;
      this.totalBudget = leg.totalBudget;
      this.poLoading = leg.po_loading;
      this.poDestination = leg.po_destination;
      this.estimatedTimeOfDepartureDate = leg.estimated_time_of_departure_date;
      this.estimatedTimeOfArrivalDate = leg.estimated_time_of_arrival_date;
      this.containerFreeDay = leg.container_free_day;
      this.containerDaysHours = leg.container_days_hours;
      this.shippingLineName = leg.shipping_line_name;
      this.linerId = leg.liner_id;
      this.legQbr = leg.qbr;
      this.legQbrInr = leg.qbr_inr;
      this.legQbrSecondary = leg.qbr_secondary;
      this.legQbrUSD = leg.qbr_usd;
      this.legQbrValInr = leg.qbr_volume_inr;
      this.legQbrValUSD = leg.qbr_volume_usd;
      this.legQbrValSecondary = leg.qbr_volume_secondary;
   }
   setFromLocation = ({ city, state, country, latitude, longitude, location }) => {
      this.from.city = city || state;
      this.from.state = state;
      this.from.country = country;
      this.from.latitude = latitude;
      this.from.longitude = longitude;
      this.from.location = location;
      this.from.type = 1;
   }
   setToLocation = ({ city, state, country, latitude, longitude, location }) => {
      this.to.city = city || state;
      this.to.state = state;
      this.to.country = country;
      this.to.latitude = latitude;
      this.to.longitude = longitude;
      this.to.location = location;
      this.to.type = 2;
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

   setBudget = (legBudget) => {
      this.legBudget = legBudget;
   }

   setBudgetINR = (legBudgetINR) => {
      this.legBudgetINR = legBudgetINR;
   }

   setBudgetUSD = (legBudgetUSD, isSecondary) => {
      if(isSecondary) {
         this.legBudgetSecondary = legBudgetUSD;
      } else {
         this.legBudgetUSD = legBudgetUSD;
      }
   }

   setBudgetCP = (legBudgetCP) => {
      this.legBudgetCP = legBudgetCP;
   }

   setBudgetCPINR = (legBudgetCPINR, serviceType) => {
      this.legBudgetCPINR = legBudgetCPINR;
      if(serviceType === 5) {
         this.legBudgetVolumeCPINR = (+legBudgetCPINR * +this.businessVolumeValue);
      }
   }

   setBudgetCPUSD = (legBudgetCPUSD, isSecondary, serviceType) => {
      if(isSecondary) {
         this.legBudgetCPSecondary = legBudgetCPUSD;
         if(serviceType === 5) {
            this.legBudgetVolumeCPSecondary = (+legBudgetCPUSD * +this.businessVolumeValue);
         }
      } else {
         this.legBudgetCPUSD = legBudgetCPUSD;
         if(serviceType === 5) {
            this.legBudgetVolumeCPUSD = (+legBudgetCPUSD * +this.businessVolumeValue);
         }
      }
   }

   setLegType = (legType, legTypeName) => {
      this.legType = legType;
      this.legTypeName = legTypeName;
   }

   selectCostType = (legCostType, legCostName, legCostSymbol) => {
      this.legCostType = legCostType;
      this.legCostName = legCostName;
      this.legCostSymbol = legCostSymbol;
   }

   setQbr = (qbr) => {
      this.qbr = qbr;
   }

   setTatValue = (value) => {
      this.tatValue = value;
   }
   setBusinessVolumeValue = (value, serviceType) => {
      this.businessVolumeValue = value;
      if(serviceType === 5) {
         this.legBudgetVolumeCPINR = value && (Number(value) * Number(this.legBudgetCPINR)) || 0;
         this.legBudgetVolumeCPUSD = value && (Number(value) * Number(this.legBudgetCPUSD)) || 0;
         this.legBudgetVolumeCPSecondary = value && (Number(value) * Number(this.legBudgetCPSecondary)) || 0;
      }
   }
   setHeadingChargesValue = (value) => {
      this.headingChargesValue = value;
   }

   setTatUnit = (unit) => {
      this.tatUnit = unit.value;
      this.tatUnitName = unit.name;
   }
	setEximTatUnit = (unit) => {;
		this.eximTatUnit = unit.value;
		this.eximTatUnitName = unit.name;
	}

   setBusinessVolumeUnit = (unit) => {
      this.businessVolumeUnit = unit.value;
      this.businessVolumeUnitName = unit.name;
   }
   setHeadingChargesUnit = (unit) => {
      this.headingChargesUnit = unit.value;
      this.headingChargesUnitName = unit.name;
   }

   addNewMultiModeHeadingCharge = (value, serviceType) => {
      if(serviceType === 5) {
         value.headingChargesBusinessVolumeValue = 1;
         value.headingChargesBusinessVolumeUnit = 8;
         value.headingChargesBusinessVolumeUnitName = 'Container Load';
      }
      this.multiModeHeadingCharges.push(value)
   }

   updateMultiModeHeadingCharge = (value) => {
      this.multiModeHeadingCharges = value;
   }

	setContainerFree = (value) => {
		this.containerFree = value;
	}

   getApiData = () => {
      return {
         from: this.from,
         to: this.to,
         leg_type: this.legType,
         leg_type_name: this.legTypeName,
         //qbr: Number(this.qbr),
         leg_cost_type: this.legCostType,
         leg_cost_name: this.legCostName,
         leg_cost_symbol: this.legCostSymbol,
         leg_budget: Number(this.legBudget),
         leg_budget_inr: Number(this.legBudgetINR),
         leg_budget_usd: Number(this.legBudgetUSD),
         leg_budget_secondary: Number(this.legBudgetSecondary),
         leg_budget_cp: Number(this.legBudgetCP),
         leg_budget_cp_inr: Number(this.legBudgetCPINR),
         leg_budget_cp_usd: Number(this.legBudgetCPUSD),
         leg_budget_cp_secondary: Number(this.legBudgetCPSecondary),
			container_free_days: this.containerFree,
         leg_budget_volume_cp_inr: this.legBudgetVolumeCPINR,
         leg_budget_volume_cp_usd: this.legBudgetVolumeCPUSD,
         leg_budget_volume_cp_secondary: this.legBudgetVolumeCPSecondary,
         tat: {
            unit: this.tatUnit,
            value: Number(this.tatValue),
            name: this.tatUnitName
         },
         eximtat: {
            unit: this.eximTatUnit,
            value: Number(this.eximTatUnit),
            name: this.eximTatUnitName
         },
         business_volume: {
            unit: this.businessVolumeUnit,
            value: Number(this.businessVolumeValue),
            name: this.businessVolumeUnitName
         },
         heading_charges: {
            unit: this.headingChargesUnit,
            value: Number(this.headingChargesValue),
            name: this.headingChargesUnitName
         },
         multi_mode_heading_charges: this.multiModeHeadingCharges,
      }
   }
}