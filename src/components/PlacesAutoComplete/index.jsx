import React, {Component} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import ClassNames from'classnames';

class PlacesAutoComplete extends Component {
    constructor(props) {
        super(props);
        console.log('props', props.value);
        this.state = {
            value: props.value || "",
            geoCodedAddress: null
        }
    }
    locationDetails = {};
    setLocationDetails = ()=> {
        const { geoCodedAddress, value } = this.state;
        try {
            geoCodedAddress.address_components.forEach((addressComponent)=> {
                if(addressComponent.types.indexOf("administrative_area_level_1") > -1) {
                    this.locationDetails.state = addressComponent.long_name || ''
                }
                else if(addressComponent.types.indexOf("locality") > -1) {
                    this.locationDetails.city = addressComponent.long_name
                }
                else if(this.locationDetails && this.locationDetails.city === '' && addressComponent.types.indexOf("administrative_area_level_2") > -1) {
                    this.locationDetails.city = addressComponent.long_name || ''
                }
                else if(addressComponent.types.indexOf("country") > -1) {
                    this.locationDetails.country = addressComponent.long_name || ''
                }
            });
            this.locationDetails.location = geoCodedAddress.formatted_address;
            getLatLng(geoCodedAddress).then((data)=> {
                this.locationDetails.latitude = data.lat;
                this.locationDetails.longitude = data.lng;
                this.locationDetails.location = value;
                this.props.setLocation(this.locationDetails);
            });
        } catch(e) {
            console.log('CATCH ', e);
        }
    }
    handleLocationSelect = (address)=> {
        this.setState({
            value: address
        })
        geocodeByAddress(address)
          .then(results => {
              this.setState({
                geoCodedAddress: results[0]
              }, this.setLocationDetails);
        });
    }

    UNSAFE_componentWillReceiveProps(nextpros){
        if(nextpros.value !== this.state.value) {
            this.setState({
                value: nextpros.value
            })
        }
    }

    render() {
        const { hasError, isInputValue, inputClassName } = this.props;
        return (
            <PlacesAutocomplete
                onChange={(value) => {     
                    this.setState({value})
                    if(isInputValue){
                    this.props.setLocation({location : value, city : value})
                }}}
                onSelect={(value) => {this.handleLocationSelect(value)}}
                value={this.state.value}
                searchOptions={{type:['cities']}}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div className="mr-20 pr col-1">
                        <div className={ClassNames("pr", {
                            'ht-40': !hasError
                        })}>
                            <input
                                {...getInputProps({
                                placeholder: this.props.placeholder || 'Add Location',
                                className: `pl-10 fs-16 border-light ht-40 col-1 br-5 ${inputClassName}`,
                            })} />
                            {hasError && <div className="error-color fs-14 fSemibold op-7 mt-10 ml-5">Please Enter Valid Location</div>}
                        </div>
                        <div className="pa t-100p z-5 bg-white box-shadow flex flex-column min-wt-100p br-5">
                            {
                                suggestions.map((item, i) => {
                                    return (
                                        <div 
                                            {...getSuggestionItemProps(item, {
                                                className: "flex flex-middle pl-16 pr-16 min-ht-40 fs-16 label-color bg-hover-theme pv-5",
                                            })}
                                        >
                                        <abbr title={item.description}>
                                                {item.description.substr(0, 100)}
                                                {item.description.length > 100?'...':''}
                                            </abbr>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> 
                )}
            </PlacesAutocomplete>
        )
    }
}

export default PlacesAutoComplete;
