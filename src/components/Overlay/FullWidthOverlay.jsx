import React, { Component } from 'react'
import { className } from 'classnames';

export default class Overlay extends Component {
    render() {
        const { hideOverlay, children } = this.props;

        return ( 
            <div className="overlay">
                {
                    hideOverlay && <div className="overlay-container">
                        <span className="overlay-close-button fs-20 mt-20" onClick={hideOverlay}>
                            X
                        </span>
                    </div>
                }
                
                <div className="overlay-body-full br-5 bg-white wt-100p ht-overlay-body center pa">
                         { children }
                    </div>
            </div>
        )
    }
}
