import React, {Component} from 'react';
import className from 'classnames';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focussed: false
        }
    }
    render() {
        const { 
            placeholder, 
            value, 
            onChange, 
            type, 
            name, 
            containerClassName, 
            required,
            onKeyPress, 
            noTransition,
            readOnly, ...otherProps } = this.props;
        return (
            <div className={"input-container " + (containerClassName || "")}>
                <label className={className("label label-color fRegular", {
                    "input-focussed": !noTransition && ((value && value.length > 0) || this.state.focussed ||(value && value != '') || value===0),
                    "no-transition": noTransition
                })}>{placeholder} {required?"*":""}</label>
                <input type={type || "text"} 
                    value={value}
                    onChange={onChange}
                    onClick={(e)=>{e.stopPropagation()}}
                    onFocus={(e)=> {this.setState({focussed:true});}}
                    onBlur={()=> {this.setState({focussed: false})}}
                    onKeyUp={(e) => onKeyPress && onKeyPress(e)}
                    name= {name || ""}
                    className="pb-5 fs-16 fSemibold"
                    {...otherProps}
                />
            </div>
        )
    }
}

export default Input;
