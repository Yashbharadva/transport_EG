import React from 'react';
import Sticky from 'Components/Sticky';
import Sidebar from 'Components/Sidebar';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        
        return (
            <div>
                <Sticky>
                    
                    <div className="flex pt-60">
                        
                        <Sidebar 
                            broadcastMsgs={[]}
                        />
                        
                        <div className="flex-basis-20p" />
                        <div className="fluid-container ml-20">
                        </div>
                    </div>
                </Sticky>
            </div>
        );
  }
}



export default Dashboard;
