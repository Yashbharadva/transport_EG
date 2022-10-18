import React, { Component } from 'react';
import className from 'classnames';
import {Link} from 'react-router-dom';
import {ReactComponent as HomeIcon} from './icons/home.svg';
import {ReactComponent as ListIcon} from './icons/list.svg';
import { getCompanyType,  getIsApprover, getUser } from 'Utils/storage';
import { SEEKER_VALUE, MODULE_ERROR_ACCESS } from 'Constants/commonConstants';
import {  SEEKER_ACCOUNTS_URL, PROVIDER_ACCOUNTS_URL, SEEKER_INDENT_URL, PROVIDER_INDENT_URL, logOutWithToken } from 'Utils/api';
import ReactTooltip from 'react-tooltip';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.user = getUser();
        this.state = {
            openSourcing: this.user.contracting ? true : false,
            openContracting: false,
            openIndenting: false,
            openSettings: false,
            openReports: false,
            openApprovals: false,
            openUploadPlan: false,

        }
        this.collapseToggle = this.collapseToggle.bind(this);
    }
    
    collapseToggle(which) {
        if(which == "contracting" && this.user.contracting) {
            this.setState({openContracting: !this.state.openContracting});
        } else if(which==='indenting' && this.user.indenting){
            this.setState({openIndenting: !this.state.openIndenting});
        } else if(which === 'settings' && this.user.contracting) {
            this.setState({openSettings: !this.state.openSettings});
        } else if(which === 'sourcing' && this.user.contracting) {
            this.setState({openSourcing: !this.state.openSourcing});
        } else if(which === 'reports') {
            this.setState({openReports: !this.state.openReports});
        } else if(which === 'approval') {
            this.setState({openApprovals: !this.state.openApprovals});
        } else if(which === 'uploadPlan') {
            this.setState({openUploadPlan: !this.state.openUploadPlan});
        }
    }
    logout = ()=> {
        logOutWithToken();
    }
    handleAccountsRedirect = (type) => {
        const companyType = getCompanyType();
        if (type === 'accounts' && this.user.accounts) {
            localStorage.setItem('teg-component', true);
            location.href = companyType === SEEKER_VALUE ? SEEKER_ACCOUNTS_URL : PROVIDER_ACCOUNTS_URL;
        } else if (type === 'indents'  && this.user.indenting) {
            localStorage.setItem('teg-component', true);
            location.href = companyType === SEEKER_VALUE ? SEEKER_INDENT_URL : PROVIDER_INDENT_URL;
        }
        // location.href = ACCOUNTS_URL;
    }
    render() {
        const companyType = getCompanyType();
        const isApprover = getIsApprover();
        const user = getUser();
        const { rfqStatusFilter, changeRfqStatusFilter, broadcastMsgs} = this.props;
        return (
            <div className={`sidebar flex-column flex-middle overflowAuto pb-150 ${broadcastMsgs.length > 0 ? 'top-155' : ''}`}>
                <div className="mt-5" />
                <div className={className("sidebar-item", {
                    'active': rfqStatusFilter == 2
                })}>
                    <span className="sidebar-item-icon">
                        <HomeIcon />
                    </span>
                    <span className="sidebar-item-text ml-10 fs-14 fBold">
                        Home
                    </span>
                </div>   
                <div className="separator" />
                <div className={className("sidebar-item pr", {
                    'disable': !this.user.contracting
                } )}>
                    <div onClick={() => this.collapseToggle("contracting")} className="menu-header">
                        <a data-tip data-for='contract-tenture-tooltip'>
                            <span className="sidebar-item-icon">
                                <ListIcon />
                            </span>
                            <span className="sidebar-item-text ml-10 fs-14 fBold pr" >
                              	Contracting
                            </span>
                            <span className="collapse-button fs-14 pa fRegular" >
                                {
                                    !this.state.openContracting && <span>+</span>
                                }
                                {
                                    this.state.openContracting && <span>-</span>
                                }
                            </span>
                            </a>
                            {!this.user.contracting && <ReactTooltip id='contract-tenture-tooltip'>
                                <span className={'fBold'}>{MODULE_ERROR_ACCESS}</span><br />
                            </ReactTooltip>}
                    </div>
                    {
                        this.state.openContracting  && <ul className="side-bar-collapsable-list pl-20 fRegular pl-5">
                            <div onClick={() => {
                            const { openMultiModeContracts } = this.state;
                            this.setState({ openMultiModeContracts: !openMultiModeContracts });
                            }} className="menu-header mt-5 mb-5">
                                <span className="sidebar-item-text ml-10 fs-12 pr" >
                                    Multi Mode Contracts
                                </span>
                                <span className="collapse-button fs-14 pa fRegular" >
                                    {
                                        !this.state.openMultiModeContracts && <span>+</span>
                                    }
                                    {
                                        this.state.openMultiModeContracts && <span>-</span>
                                    }
                                </span>
                            </div>
                            {this.state.openMultiModeContracts && <>
                                <li className="sub-menu-item"><Link to ="/multiModeContracts" className="fs-12 ml-10">
                                    Generate Contracts
                                </Link></li>
                                <li className="sub-menu-item"><Link to ="/viewGeneratedContracts" className="fs-12 ml-10">
                                    View Generated Contracts
                                </Link></li>
                            </>}

                        </ul>
                    }
                </div> 
            </div>
        )
    }
}