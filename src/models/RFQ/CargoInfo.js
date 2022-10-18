export default class CargoInfo {
    constructor(cargoInfo = {}) {
        this.cargoDetails = cargoInfo.cargo_details;
        this.cargoDescription = cargoInfo.cargo_description;
        this.packingType = cargoInfo.packing_type;
        this.packingTypeName = cargoInfo.packing_type_name;
        if(cargoInfo.handling_instructions && cargoInfo.handling_instructions.length == 0) {
            this.handlingInstructions = [1];
        } else {
            this.handlingInstructions = cargoInfo.handling_instructions || [];
        }
        this.temperatureSensitive = cargoInfo.temperature_sensitive;
        this.productCategory = cargoInfo.product_category;
        this.productCategoryName = cargoInfo.product_category_name;
        this.productDensity = cargoInfo.product_density;
        this.cargoType = cargoInfo.cargo_type || 2;
        this.cargoTypeName = cargoInfo.cargo_type_name || 'Non Hazardous / Non-DG Goods';
    }
    setCargoType = (option) => {
        this.cargoType = option.value;
        this.cargoTypeName = option.name;
    }
    setCargoDetails = (cargoDetails)=> {
        this.cargoDetails = cargoDetails
    }
    setPackingType = (packingType, packingTypeName)=> {
        this.packingType = packingType;
        this.packingTypeName = packingTypeName;
    }
    setHandlingInstructions = (handlingInstructions)=> {
        this.handlingInstructions = handlingInstructions
    }
    setTemperatureSensitive = (min, max, unit)=> {
        this.temperatureSensitive = {
            min,
            max,
            unit
        }
    }
    setProductCategory = (productCategory, productCategoryName)=> {
        this.productCategory = productCategory;
        this.productCategoryName = productCategoryName;
    }
    setProductDensity = (value) => {
       this.productDensity = value;
    }
    setCargoDescription = (cargoDescription)=> {
        this.cargoDescription = cargoDescription;
    }
    getApiData = ()=> {
        return {
            cargo_details: this.cargoDetails,
            cargo_description: this.cargoDescription,
            packing_type: this.packingType,
            packing_type_name: this.packingTypeName,
            handling_instructions: this.handlingInstructions,
            temperature_sensitive: {
                min: Number((this.temperatureSensitive || {}).min),
                max: Number((this.temperatureSensitive || {}).max),
                unit: (this.temperatureSensitive || {}).unit,
            },
            product_category: this.productCategory,
            product_category_name: this.productCategoryName,
            product_density: this.productDensity,
            cargo_type: this.cargoType,
            cargo_type_name: this.cargoTypeName
        }
    }
}