import React from 'react';
import Tab from 'Components/Tabs/Tab';

const Tabs = ({tabs, activeTabId, selectTab, className, isBold})=> {
    return (
        <div className={"tabs flex flex-1 flex-middle " + (className || "")}>
            {
                (tabs || []).map((tab, index)=> {
                    return (
                        <Tab active={tab.id === activeTabId} count={tab.count} tab={tab} key={index} selectTab={()=> {
                            selectTab(tab.id);
                        }} isBold={isBold}/>
                    )
                })
            }
        </div>
    )
}

export default Tabs;