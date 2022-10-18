import Slab from 'Models/Slab';
import uuid from 'uuid';

export default class LCLStop {
    constructor(stop = {}) {
        this.id = stop.id || uuid();
        this.from = stop.from || {
            city : "",
            state : "",
            country : "",
            latitude : "",
            longitude : "",
            location : "",
        };
        this.to = stop.to || {
            city : "",
            state : "",
            country : "",
            latitude : 0,
            longitude : 0,
            location : "",
        };
        this.fromLandmark = stop.toLandmark || '';
        this.toLandmark = stop.toLandmark || '';
        this.slabs = (stop.slabs || []).map((slab)=> {
            return new Slab(slab);
        })
    }
    setFromLocation = ({city, state, country, latitude, longitude, location})=> {
        this.from.city = city || state;
        this.from.state = state;
        this.from.country = country;
        this.from.latitude = latitude;
        this.from.longitude = longitude;
        this.from.location = location;
    }
    setToLocation = ({city, state, country, latitude, longitude, location})=> {
        this.to.city = city || state;
        this.to.state = state;
        this.to.country = country;
        this.to.latitude = latitude;
        this.to.longitude = longitude;
        this.to.location = location;
    }
    setFromLandmark = (fromLandmark)=> {
        this.fromLandmark = fromLandmark
    }
    setToLandmark = (toLandmark)=> {
        this.toLandmark = toLandmark
    }
    addSlab = ()=> {
        this.slabs.push(new Slab());
    }
    removeSlab = (index)=> {
        this.slabs.splice(index, 1);
    }
    getApiData = ()=> {
        return {
            from: {...this.from, landmark:this.fromLandmark},
            to: {...this.to, landmark:this.fromLandmark},
            slabs: this.slabs.map((slab)=> {
                return slab.getApiData();
            })
        }
    }
}