import uuid from 'uuid';
export default class Stop {
   constructor(stop = {}) {
      this.id = stop.id || uuid();
      this.city = stop.city;
      this.state = stop.state;
      this.country = stop.country;
      this.latitude = stop.latitude
      this.longitude = stop.longitude
      this.landmark = stop.landmark
      this.additionalPrice = stop.additional_price
      this.type = stop.type || 1;
      this.sequence = stop.sequence;
      this.location = stop.location || '';
      this.remarks = stop.remarks;
      this.pincode = stop.pincode;
   }
   setLocation = ({ city, state, country, latitude, longitude, location, pincode }) => {
      this.city = city || state;
      this.state = state;
      this.country = country;
      this.latitude = latitude;
      this.longitude = longitude;
      this.location = location;
      this.pincode = pincode;
   }
   setLandmark = (landmark) => {
      this.landmark = landmark;
   }
   setRemarks = (remarks) => {
      this.remarks = remarks;
   }
   setAdditionalPrice = (additionalPrice) => {
      this.additionalPrice = additionalPrice;
   }
   setType = (type) => {
      this.type = type;
   }
   getApiData = () => {
      return {
         state: this.state,
         city: this.city || this.state,
         country: this.country,
         location: this.location,
         latitude: this.latitude,
         longitude: this.longitude,
         landmark: this.landmark,
         additional_price: this.additionalPrice,
         type: this.type,
         sequence: 1,
         remarks: this.remarks,
         pincode: this.pincode
      }
   }
}