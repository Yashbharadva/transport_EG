import React from 'react';
import classNames from 'classnames';
const Tab = ({tab, active, selectTab, isBold})=> {
    return (
        <div onClick={selectTab} className={classNames((tab.value !== "User ID" && tab.value !== "Mobile No.") ? ("tab flex flex-middle tCenter flex-center fSemibold flex-1 curP ") : ("subtab flex flex-middle tCenter flex-center fSemibold flex-1 curP"), {
            "active":active
        })}>
			 {<div className={classNames("", {
                 'fs-16': isBold,
                 'fs-13 fs-16-resp': !isBold
             })}>{tab.value}</div>}
            {(tab.count || tab.count === 0) && <div className="fs-12 fs-14-resp">{'(' + tab.count + ')'}</div>}
        </div>
    )
}

export default Tab;