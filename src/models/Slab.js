export default class Slab {
    constructor(slab = {}) {
        this.slabType = slab.slab_type;
        this.slabTypeName = slab.slab_type_name;
        this.unit = slab.unit;
        this.unitName = slab.unit_name;
        this.expectingPrice = slab.expecting_price;
    }  
    setSlabType = (type)=> {
        this.slabType = type.value;
        this.slabTypeName= type.name;
    }
    setUnit = (unit)=> {
        this.unit = unit.value;
        this.unitName= unit.name;
    }
    setExpectingPrice = (expectingPrice)=> {
        this.expectingPrice = expectingPrice;
    }
    getApiData = ()=> {
        return {
            slab_type: this.type,
            slab_type_name: this.slabTypeName,
            unit: this.unit,
            unit_name: this.unitName,
            expecting_price: this.expectingPrice
        }
    }
}