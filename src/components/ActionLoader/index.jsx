import React from 'react';
const ActionLoader = ({fixed, className})=> {
    return (
        <div className={`pre-loader ${className}`} id="pre-loader" style={{
            position: fixed?'fixed': 'absolute'
        }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default ActionLoader;