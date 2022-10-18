export default class Leg {
    constructor(cost = {}) {
        this.costHead = cost.cost_head;
        this.description = cost.description;
        this.mr = cost.mr;
        this.lpp = cost.lpp;
        this.cp = cost.cp;
        this.currency = cost.currency;
        this.currencyName = cost.name;
    }
    setCostHead = (costHead)=> {
        this.costHead = costHead;
    }
    setDescription = (description)=> {
        this.description = description;
    }
    setMr = (mr)=> {
        this.mr = mr;
    }
    setLpp = (lpp)=> {
        this.lpp = lpp;
    }
    setCp = (cp)=> {
        this.cp = cp;
    }
    setCurrency = (currency, currencyName)=> {
        this.currency = currency.value;
        this.currencyName = currency.name;
    }
    
    getApiData = ()=> {
        return {
            cost_head: this.costHead,
 			description: this.description,
 			mr: this.mr,
 			lpp: this.lpp,
 			cp: this.cp,
 			currency: this.currency,
 			name: this.currencyName
        }
    }
}