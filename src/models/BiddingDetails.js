export default class BiddingDetails {
   constructor(biddingDetails = {}) {
      this.from = (biddingDetails.bidding_span || {}).from || new Date().getTime();
      this.to = (biddingDetails.bidding_span || {}).to || null;
      this.pricingBasis = biddingDetails.pricing_basis;
      this.pricingBasisName = biddingDetails.pricing_basis_name;
      this.qbr = biddingDetails.qbr;
      this.qbr_usd = biddingDetails.qbr_usd;
      this.qbr_inr = biddingDetails.qbr_inr;
      this.qbr_secondary = biddingDetails.qbr_secondary;
      this.qbr_volume_inr = biddingDetails.qbr_volume_inr;
      this.qbr_volume_usd = biddingDetails.qbr_volume_usd;
      this.qbr_volume_secondary = biddingDetails.qbr_volume_secondary;
      this.cinNo = biddingDetails.cin_no;
      this.jobNo = biddingDetails.job_no;
      this.cargoWeight = biddingDetails.cargo_weight;

      this.tatValue = (biddingDetails.tat || {}).value;
      this.tatUnit = (biddingDetails.tat || {}).unit;
      this.tatUnitName = (biddingDetails.tat || {}).name;
      this.businessVolumeValue = (biddingDetails.business_volume || {}).value;
      this.businessVolumeUnit = (biddingDetails.business_volume || {}).unit;
      this.businessVolumeUnitName = (biddingDetails.business_volume || {}).name;

      this.paymentTerms = biddingDetails.payment_terms || 2;
      this.paymentTermsName = biddingDetails.payment_terms_name || 'To Be Billed';
      this.paymentCycle = biddingDetails.payment_cycle;
      this.paymentCycleName = biddingDetails.payment_cycle_name;

      this.lpp = biddingDetails.lpp;
      this.systemSuggestedPrice = biddingDetails.system_suggested_price;
      this.incoterms = biddingDetails.inco_terms || [];
      this.diesel_price = biddingDetails.diesel_price || 0;
   }
   setFrom = (from) => {
      this.from = from;
   }
   setTo = (to) => {
      this.to = to;
   }
   setPricingBasis = (pricingBasis = {}) => {
      this.pricingBasis = pricingBasis.value;
      this.pricingBasisName = pricingBasis.name;
   }
   setQbr = (qbr) => {
      this.qbr = qbr;
   }
   setPaymentCycle = (paymentCycle) => {
      this.paymentCycle = paymentCycle.value;
      this.paymentCycleName = paymentCycle.name;
   }
   setTatUnit = (unit) => {
      this.tatUnit = unit.value;
      this.tatUnitName = unit.name;
   }
   setBusinessVolumeUnit = (unit) => {
      this.businessVolumeUnit = unit.value;
      this.businessVolumeUnitName = unit.name;
   }
   setTatValue = (value) => {
      this.tatValue = value;
   }
   setBusinessVolumeValue = (value) => {
      this.businessVolumeValue = value;
   }
   setPaymentTerms = (term, type, name) => {
      this.paymentTerms = term;
      this.paymentTermsName = name;
   }
   setIncoTerms = (value) => {
      this.incoterms = value;
   }
   setLpp = (lpp) => {
      this.lpp = lpp;
   }
   setCinNo = (cinNo) => {
      this.cinNo = cinNo;
   }
   setJobNo = (jobNo) => {
      this.jobNo = jobNo;
   }
   setCargoWeight = (cargoWeight) => {
      this.cargoWeight = cargoWeight;
   }
	setQbr_inr = (qbr_inr) => {
		this.qbr_inr = qbr_inr;
	}
	setQbr_usd = (qbr_usd) => {
		this.qbr_usd = qbr_usd;
   }
   setSystemSuggestedPrice = (price) => {
      this.systemSuggestedPrice = price;
   }
   setDieselprice = (diesel_price) => {
      this.diesel_price = diesel_price;
   }
   
   getApiData = () => {
      return {
         bidding_span: {
            from: this.from,
            to: this.to
         },
         pricing_basis: this.pricingBasis,
         pricing_basis_name: this.pricingBasisName,
			qbr_inr: this.qbr_inr,
         tat: {
            unit: this.tatUnit,
            value: Number(this.tatValue),
            name: Number(this.tatValue) ? this.tatUnitName : '',
         },
         payment_terms: this.paymentTerms,
         payment_cycle: this.paymentCycle || '',
         payment_cycle_name: this.paymentCycleName || '',
         inco_terms: this.incoterms || {},
         business_volume: {
            unit: this.businessVolumeUnit,
            value: Number(this.businessVolumeValue),
            name: Number(this.businessVolumeValue) ? this.businessVolumeUnitName : '',
         },
         qbr: Number(this.qbr),
         qbr_usd: Number(this.qbr_usd),
         qbr_inr: Number(this.qbr_inr),
         qbr_secondary: Number(this.qbr_secondary),
         lpp: Number(this.lpp),
         cin_no: this.cinNo,
         job_no: this.jobNo,
         cargo_weight: this.cargoWeight,
         system_suggested_price: this.systemSuggestedPrice,
         diesel_price: Number(this.diesel_price)
      }
   }
   getRFQApiData = () => {
      return {
         bidding_span: {
            from: this.from,
            to: this.to
         },
         pricing_basis: this.pricingBasis,
         pricing_basis_name: this.pricingBasisName,
         payment_terms: this.paymentTerms,
         payment_terms_name: this.paymentTermsName,
         payment_cycle: this.paymentCycle || '',
         payment_cycle_name: this.paymentCycleName || '',
         inco_terms: this.incoterms || ''
      }
   }
}