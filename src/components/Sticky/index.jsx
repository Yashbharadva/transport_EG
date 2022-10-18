import React from 'react';

import Navbar from 'Containers/Navbar';

const Sticky = ({children})=> {
    return (
        <div className="sticky">
            <Navbar />
            <div className="main-page">
                {children}
            </div>
        </div>
    )
}

export default Sticky;