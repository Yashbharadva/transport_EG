export default class SecSlab {
    constructor(slab = {}) {
        this.costChargeDesc = slab.cost_charges_description;
        this.fromKm = slab.from_range;
        this.toKm = slab.to_range;
        this.qbr = slab.cost_charges_qbr;
        this.cost_charge_id = slab.cost_charge_id;
        this.cpstate = slab.cp_variable_state;
        this.cpPrice = slab.variable_challenge_price;
        this.lpp = slab.lpp;
        this.marketRate = slab.marketRate;
        this.businessVolume = slab.businessVolume;
    }
    setCostChargeDesc = (value) => {
        this.costChargeDesc = value
    }
    setFromKm = (value) => {
        this.fromKm = value
    }
    setToKm = (value) => {
        this.toKm = value
    }
    setQbr = (value) => {
        this.qbr = value
    }
    setLpp = (value) => {
        this.lpp = value
    }
    setMarketRate = (value) => {
        this.marketRate = value
    }
    setBusinessVolume = (value) => {
        this.businessVolume = value
    }
    getApiData = ()=> {
        return {
            cost_charges_description: this.costChargeDesc,
            from_range: +this.fromKm,
            to_range: +this.toKm,
            cost_charges_qbr: +this.qbr,
            lpp: +this.lpp,
            marketRate: +this.marketRate,
            businessVolume: +this.businessVolume,
        }
    }
}