import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import ClassNames from 'classnames';
import TegLogoIcon from 'Icons/T_EG.jpg';
import { ReactComponent as LogoIcon } from 'Icons/teg.svg';
import { ReactComponent as BellIcon } from 'Icons/bell.svg';
import { ReactComponent as PhoneIcon } from 'Icons/phone.svg';
import { ReactComponent as DropdownIcon } from 'Icons/downArrow.svg';
import { ReactComponent as BranchIcon } from 'Icons/branch.svg';
import UserImage from 'Icons/nithin.png'
import Adani from 'Icons/adani.png';
import GREENPLY from 'Icons/greenply.png';

import { getCompanyType, deleteToken, getUser } from 'Utils/storage';
import { SEEKER_VALUE, GREEN_PLY } from 'Constants/commonConstants';
import { GET_BRANCHES, GET_ALL_SUBPLANTS, GET_GROUPS_AND_TRANSPORTERS, POST_SELECTED_BRANCH_DETAILS } from 'Constants/actionConstants';
import OutsideClickHandler from 'react-outside-click-handler';
import { withRouter } from 'react-router';
import { isAdaniWilmar } from 'Utils';
import { logOutWithToken, SSO_BASE_URL, SSO_URL } from 'Utils/api';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    const branchLocalName = localStorage.getItem('branchDetail')
    const name = (branchLocalName && branchLocalName.length > 0) ? JSON.parse(localStorage.getItem('branchDetail')) : '';
  }
  state = {
    isDropdownShown: false,
    shownBranchList: false,
    branchesList: [],
    branchSelected: {
      branch_id: '',
      branch_name: (name && Object.keys(name).length > 0 && name.branch_name) ? name.branch_name : '',
    },
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const user = getUser();
    const companyType = getCompanyType();
    if (user && Object.keys(user).length > 0 && user.isAdmin && user.id) {
      dispatch({
        type: GET_BRANCHES,
        data: {
          companyId: user.id,
        },
        onSuccess: ((data) => {
          this.setState({ branchesList: (data && data.list) ? data.list : [], shownBranchList: false });
        })

      })
    } else if (user && Object.keys(user).length > 0 && !user.isAdmin && user.id && companyType === SEEKER_VALUE) {
      dispatch({
        type: GET_BRANCHES,
        data: {
          branchId: user.branchId,
          email: user.email
        },
        onSuccess: ((data) => {
          this.setState({ branchesList: (data && data.list) ? data.list : [], shownBranchList: false });
        })

      })
    }
  }

  componentWillReceiveProps() {
    const { branchSelected } = this.state;
    const branchLocalName = localStorage.getItem('branchDetail')
    const name = (branchLocalName && branchLocalName.length > 0) ? JSON.parse(localStorage.getItem('branchDetail')) : '';
    branchSelected.branch_name = (name && Object.keys(name).length > 0 && name.branch_name) ? name.branch_name : '',

      this.setState({
        branchSelected
      }, () => {
        this.getAllSubPlants();
      });
  }

  getAllSubPlants = () => {
    const { dispatch, branchesList } = this.props;
    const branchLocalName = localStorage.getItem('branchDetail');
    const name = (branchLocalName && branchLocalName.length > 0) ? JSON.parse(localStorage.getItem('branchDetail')) : '';
    const user = getUser();
    if (!name.branch_id) {
      (branchesList || []).map(branch => {
        if (branch.label === name.branch_name) {
          name.branch_id = branch.value;
          localStorage.setItem('branchDetail', JSON.stringify({
            branch_name: branch.label,
            branch_id: branch.value
          }));
          dispatch({
            type: POST_SELECTED_BRANCH_DETAILS,
            data: {
              branch_name: branch.label,
              branch_id: branch.value
            }
          })
        }
      })
    }

    dispatch({
      type: GET_ALL_SUBPLANTS,
      params: {
        branchName: name ? name.branch_name : user.branchName, //'Mundra' 
        branchId: name ? name.branch_id : user.branchId
      }
    })
    if (name && name.branch_id && getCompanyType() === SEEKER_VALUE) {
      this.searchGroupsAndTransporters(name);
    }
  }

  searchGroupsAndTransporters = (name) => {
    const { dispatch } = this.props;
    dispatch({
      type: GET_GROUPS_AND_TRANSPORTERS,
      params: {
        branchId: name.branch_id
      }
    })
  }

  logout = () => {
    // deleteToken();
    // location.href="/";
    logOutWithToken();
    setTimeout(() => location.href = "/", 2000);
  }

  SSOLogout = () => {
    location.replace(`${SSO_BASE_URL}${SSO_URL}/?slo`);
    setTimeout(() => { deleteToken(), localStorage.clear() }, 5000);
  }

  resetPassword = () => {
    const { dispatch, history } = this.props;
    history.push('/resetpassword');
  }


  toggleDropDown = () => {
    this.setState({ isDropdownShown: !this.state.isDropdownShown });
  }

  handleShowBranchList = () => {
    this.setState({
      shownBranchList: !this.state.shownBranchList
    });
  }

  handleBranchSelection = (branch) => {
    this.setState({
      branchSelected: (this.state.branchSelected === branch) ? {} : branch,
      searchBranch: ''
    });
    localStorage.setItem('branchDetail', (this.state.branchSelected === branch) ? '' : JSON.stringify(branch));
    this.props.dispatch({
      type: POST_SELECTED_BRANCH_DETAILS,
      data: {
        branch_name: branch.branch_name,
        branch_id: branch.branch_id
      }
    })
    this.getAllSubPlants();
    this.componentWillMount();
  }

  render() {
    const { shownBranchList, branchSelected, branchesList } = this.state;
    const isSSO = localStorage.getItem('isSSOUser');
    // const { branchesList } = this.props;
    const companyType = getCompanyType();
    const user = getUser();
    return (
      <div className="pf flex navbar-wrap pr col-1 ht-60 border-bottom-theme box-shadow bg-white z-501 p-15">
        <div className="flex col-1 flex-middle flex-between pl-50">
          <Link className="mr-10" to={companyType === SEEKER_VALUE ? '/seeker' : '/transporters'}>
            <div style={{ backgroundImage: `url(${TegLogoIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '115px', height: '30px' }} />
          </Link>
          {(isAdaniWilmar() || GREEN_PLY.includes(user.id)) && <a className="mr-10 wt-120 ht-50">
            <img className="teg-logo nav-bar-logo wt-100p ht-50" src={isAdaniWilmar() ? Adani : GREENPLY} alt="teg logo" />
          </a>}
          <div className="flex-1 flex flex-bottom">
            {/* <div className="theme-color fs-14 fSemibold pr t--4"><PhoneIcon className="mr-10 pr t-5"/>Need help call us : 8767227722 | Monday - Saturday 10:00 AM To 06:00 PM</div> */}
            {isAdaniWilmar() ?
              <div className="theme-color fs-16 fSemibold pr t--7 ml-20">
                Please
                <a href={'https://adaniwilmar.service-now.com/adani'} target="_blank" rel="noopener" className={'border-bottom-theme curP'}>{' Click Here '}</a>
                {/* <a href={'https://caliper.atlassian.net/servicedesk/customer/portal/1'} target="_blank" rel="noopener" className={'border-bottom-theme curP'}>{' Click Here '}</a>  */}
                to report issues
              </div> :
              <div className="theme-color fs-14 fSemibold pr t--7 ml-20">
                <PhoneIcon className="mr-10 pr t-5" />Need Help Call Us : 8767227722 | Monday - Saturday 10:00 AM To 06:00 PM
              </div>
            }
          </div>
          <div className="flex flex-between flex-middle curP row-1">
            <div className="pr">
              <OutsideClickHandler
                onOutsideClick={() => {
                  this.setState({ shownBranchList: false });
                }}>
                <div
                  className={ClassNames("border-theme flex flex-middle flex-center ht-40 pl-10 pr-10 br-5 mr-25", {
                    // 'border-error-color': localStorage.getItem('branchNameError') && localStorage.getItem('branchNameError') === 'true'
                  })}
                  onClick={this.handleShowBranchList}
                >
                  <BranchIcon className="mr-10" />
                  <div className="mr-10 theme-color">
                    <div className={ClassNames("fSemibold", {
                      "fs-12 mb-2": user.branchName,
                      "fs-16": !user.branchName
                    })}>{user.companyName}</div>
                    {
                      <div className="fs-12 fSemibold">
                        {(branchSelected && Object.keys(branchSelected).length > 0) && branchSelected.branch_name ? branchSelected.branch_name : user.branchName}
                      </div>
                    }
                  </div>
                  <DropdownIcon />
                </div>
                {
                  shownBranchList &&
                  <div className="pa t-50 r-30 wt-250">
                    <div className="dropTriangle" />
                    <div className="pv-25 ph-20 highlighted-box-shadow z-1 bg-white ht-350 overflowAuto">
                      {
                        (branchesList && branchesList.length > 0)
                          ?
                          <div>
                            <div className="mb-10 fs-18 fSemibold theme-color border-bottom-light">Branches</div>
                            <span className="clearable">
                              <input placeholder={"Search Branch"}
                                type="text"
                                className="mr-30 wt-200 br-20 ht-40 bg-gray search"
                                value={this.state.searchBranch}
                                onChange={(e) => this.setState({
                                  searchBranch: e.target.value
                                })}
                              />
                              {this.state.searchBranch && this.state.searchBranch.length > 0 &&
                                <span
                                  className="clearable__clear"
                                  onClick={() => {
                                    this.setState({ searchBranch: "" });
                                  }}
                                >&times;</span>
                              }
                            </span>
                            {
                              (this.state.searchBranch ? (branchesList || []).filter(branch => ((branch.branch_name || '').toLowerCase()).includes((this.state.searchBranch || '').toLowerCase())) : branchesList).map((branch, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={ClassNames('pv-10', {
                                      "bg-theme white-color fSemibold": (branchSelected && Object.keys(branchSelected).length > 0 && branchSelected.branch_name === branch.branch_name)
                                    })}
                                    onClick={() => this.handleBranchSelection(branch)}
                                  >
                                    {branch.branch_name}
                                  </div>
                                )
                              })
                            }
                          </div>
                          :
                          <h4>No Branches Listed.</h4>
                      }
                    </div>
                  </div>
                }
              </OutsideClickHandler>
            </div>
            <BellIcon className="mr-25" />

            <OutsideClickHandler
              onOutsideClick={() => {
                this.setState({ isDropdownShown: false });
              }}>
              <div className="flex flex-middle" onClick={this.toggleDropDown}>
                {/* <img src={user.userImage || UserImage} className="ht-30 wt-30 br-50p mr-5" alt="user"/> */}
                <span className="mr-5 fs-16 fSemibold theme-color">{user.adminName}</span>
                <DropdownIcon />
                {
                  this.state.isDropdownShown &&
                  <div className="box-shadow bg-white br-5 z-100 pa t-90p wt-200 r-0">
                    <div className="pl-8 pt-8 pr-8 pb-8 pl-16 ht-40 fs-16 label-color bg-hover-theme" onClick={this.resetPassword}> Reset Password </div>
                    <div className="pl-8 pt-8 pr-8 pb-8 pl-16 ht-40 fs-16 label-color bg-hover-theme" onClick={isSSO == 'true' ? this.SSOLogout : this.logout}> Logout </div>
                  </div>
                }

              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ constants }) => {
  return {
    branchesList: constants.branchesList || [],
  }
};


export default connect(mapStateToProps)(withRouter(Navbar));
