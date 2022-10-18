import { DEEPAK_PHENOLICS } from 'Constants/commonConstants';

export default class Constant {
    constructor(constant = {}) {
        this.value = constant.id;
        this.name = constant.name;
        this.dph_type = constant.dph_type;
        this.dph_type_name = constant.dph_type_name;
        this.density = constant.density;
        this.carrying_capacity = constant.carrying_capacity;
        this.vehicle_capacity_MT = constant.vehicle_capacity_MT;
        this.vehicle_capacity = constant.vehicle_capacity;
    }
}