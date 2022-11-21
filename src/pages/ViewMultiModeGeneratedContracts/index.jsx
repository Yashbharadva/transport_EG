import React, { Component, Fragment } from "react";
import Sticky from "Components/Sticky";
import Heading from "Components/Heading";
import Dropdown from "Components/Dropdown";
import Checkbox from "Components/Checkbox/index";
import { DateRangePicker } from "react-dates";
import { ReactComponent as Back } from 'Icons/back.svg'

class MultiModeGeneratedContracts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        }
    }
    render() {
        const temp = [{ id: 1, name: "Option1" }, { id: 2, name: "Option2" }, { id: 3, name: "Option3" }];
        return (
            <Sticky>
                <div className="p-15">
                    <div className=" curP fBold pb-10 "
                        onClick={() => {
                            this.props.history.push('/seeker')
                        }
                        }>
                        <Back className="fill-theme mr-5" />
                        {'Back'}
                    </div>
                    <div className="flex flex-between" style={{ justifyContent: "space-between", alignItems: "center" }}>

                        <div className="mt-25 borderBox bg-white">
                            <Heading text="Master Contracts" className="flex-1 fs-23" />
                        </div>
                        <div className="fs-14 header-dark-color">
                            <button
                                className={"bg-theme wt-250 ht-40 br-5 fBold fs-14 white-color"}
                                onClick={() => {
                                    this.props.history.push('/createNewContracts')
                                }}
                            >+ Create New Contract</button>
                        </div>
                    </div>
                    <div className="mt-20"></div>
                    <Fragment>
                        <div className="flex" style={{ width: "100%", justifyContent: "space-between" }}>
                            <div style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "300px" }} className="fs-14 header-dark-color">
                                <input
                                    placeholder={"Search Master contract No. / Route No."}
                                    type="text"
                                    className="wt-300 ht-40 search"
                                    onChange={(e) => {
                                        console.log(e);
                                    }}
                                />
                            </div>
                            <div className="fs-14 header-dark-color ">
                                <Dropdown
                                    items={temp}
                                    label="From"
                                    displayKey="name"
                                    selectedItem={null}
                                    onSelect={this.selectBranchId}
                                    className="mb-0 wt-300"
                                    searchEnabled={true}
                                />
                            </div>

                            <div className="fs-14 header-dark-color">
                                <Dropdown
                                    items={temp}
                                    selectedItem={null}
                                    name="To"
                                    onSelect={this.selectLoadType}
                                    displayKey="name"
                                    className="mb-0 wt-300"
                                    label="To"
                                    searchEnabled={true}
                                />
                            </div>
                            <div className="fs-14 header-dark-color">
                                <Dropdown
                                    items={temp}
                                    selectedItems={null}
                                    name="Origin Yard"
                                    onSelect={this.selectVendorCode}
                                    displayKey="name"
                                    className="mb-0 wt-300"
                                    label="Origin Yard"
                                    searchEnabled={true}
                                />
                            </div>
                            <div className="fs-14 header-dark-color mr-10">
                                <Dropdown
                                    items={temp}
                                    selectedItems={null}
                                    name="Origin Yard"
                                    onSelect={this.selectVendorCode}
                                    displayKey="name"
                                    className="mb-0 wt-300"
                                    label="Origin Yard"
                                    searchEnabled={true}
                                />
                            </div>
                            <div className="flex-between theme-font-color">
                                <DateRangePicker
                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                    startDateId="start" // PropTypes.string.isRequired,
                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                    endDateId="end" // PropTypes.string.isRequired,
                                    isOutsideRange={() => null}
                                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                />
                            </div>
                        </div>
                        <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "40px" }}>
                            <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                                <tr className="br-10">
                                    <th className='col-5 pl-10 pr-10 tLeft'>Master Contract No.</th>
                                    <th className='col-8 tLeft'>Route No.</th>
                                    <th className='col-8 tLeft'>From</th>
                                    <th className='col-8 tLeft'>To</th>
                                    <th className='col-9 tLeft'>Origin Yard</th>
                                    <th className='col-9 tLeft'>Destination Yard</th>
                                    <th className='col-9 tLeft'>Commodity</th>
                                    <th className='wt-5p tLeft'>details</th>
                                </tr>
                            </thead>
                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                <tr>
                                    <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10 border-light fs-12 master-contract-font-color">1234567890</td>
                                    <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">12345</td>
                                    <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">Bangalore</td>
                                    <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">Ludhiyana</td>
                                    <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">Bangalore Yard</td>
                                    <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">Ludhiyana Yard</td>
                                    <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">xxx</td>
                                    <td style={{ borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12 theme-font-color">details</td>
                                </tr>
                                {/* )
                                })} */}

                            </tbody>
                        </table>
                    </Fragment>
                </div>
            </Sticky>
        )

    }
}

export default MultiModeGeneratedContracts;
