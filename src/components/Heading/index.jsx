import React from 'react';
import Classnames from 'classnames';

const Header = ({className, text, type, mandatory, hasError, errorText })=> {
    return (
        <div className={Classnames("fs-22 fBold " + className, {
            'header-medium-color': type==='medium',
            'header-dark-color': type!=='medium',
            'pr t--4': mandatory
        })}>
            {text}{mandatory && <sup className="danger-color ml-2 pr t-4">*</sup>} {hasError && <span className="error-color fs-14 fSemibold op-7 ml-5 mt-5">{errorText}</span>}
        </div>
    )
}

export default Header;