import React, { Fragment } from 'react';
import classNames from 'classnames';

const Toast = ({ message, type }) => {
    return (
        <Fragment>
            <div className={classNames("m-hide toast pf ht-60 br-5 mwt-500 flex flex-center flex-middle fSemibold fs-16 white-color pl-100 pr-100 r-100 transition-bottom", {
                'bg-success': type === 'SUCCESS',
                'bg-error': type === 'ERROR',
                'active': (type && message)
            })}>
                {message}
            </div>
        </Fragment>
    )
}

export default Toast;