import React from 'react';

const SubHeader = ({className, text, mandatory})=> {
    return (
        <div className={"fs-18 fSemibold header-medium-color " + className}>
            {text}{mandatory && <sup className="danger-color ml-2 pr t-4">*</sup>}
        </div>
    )
}

export default SubHeader;