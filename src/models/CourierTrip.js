import Moment from 'moment';

export default class CourierTrip {
   constructor(trip = {}, zones = [], name = '') {
        this.zone_type = trip.zone_type || ((zones || []).find(zone => zone.name === name) || {}).value || '';
        this.zone_name = trip.zone_name || name;
        this.movement_type = trip.movement_type || '';
        this.movement_name = trip.movement_name || '';
        this.trip_id = trip.trip_id;
        this.mode_type = trip.mode_type || '';
        this.mode_name = trip.mode_name || '';

        this.slabs = trip.slabs || {
            from: '',
            to: ''
        };

        this.zone_list = trip.zone_list || [];
        if(!trip.zone_list && zones.length > 0) {
          (zones || []).map(zone => {
                this.zone_list.push({
                        'zone_to': zone.name,
                        'qbr': null,
                        'max_tat': null
                    })
            })
        }
    }
}