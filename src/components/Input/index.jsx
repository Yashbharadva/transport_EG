import React, { Component, Fragment } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focussed: false
        }
    }
    render() {
        const { placeholder, value, onChange, type, name, className, hasError, index, inputClassName, ...otherProps } = this.props;
        return (
            <div className={className}>
                <input type={type || "text"} 
                    autoComplete="off"
                    value={value}
                    onChange={onChange}
                    name= {name || ""}
                    placeholder={placeholder}
                    className={`pl-10 fs-16 border-light ht-40 col-1 br-5 ${className} ${inputClassName}`}
                    index={index}
                    {...otherProps}
                />
                {hasError && <div className="error-color fs-14 fSemibold op-7 ml-5 mt-5">Please enter valid details</div>}
            </div>
        )
    }
}

export default Input;
