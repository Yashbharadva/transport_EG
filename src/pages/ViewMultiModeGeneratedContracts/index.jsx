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
            data: [
                { id: 1, masterNO: 123456, routeCode: "001123", From: "AWL Plant, Mudra", originYard: "Dhrub", Destination: "kishanganj", to: "Delhi", details: "details" },
                { id: 2, masterNO: 123457, routeCode: "001124", From: "AWL Plant, Hazira", originYard: "Hazira Yard", Destination: "Adarsh Nagar", to: "Surat", details: "details" }
            ]
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
                                    console.log(this.props.history);
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
                                    label="Destination Yard"
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
                                    <th className='col-9 tLeft'>Origin Yard</th>
                                    <th className='col-9 tLeft'>Destination Yard</th>
                                    <th className='col-8 tLeft'></th>
                                    {/* <th className='col-9 tLeft'>Commodity</th> */}
                                    <th className='wt-5p tLeft'>details</th>
                                </tr>
                            </thead>
                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {(this.state.data || []).map((a, index) => {
                                    console.log(this.state.data);
                                    return (
                                        <tr className="ht-40">
                                            <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10 border-light fs-12 master-contract-font-color">{a.masterNO}</td>
                                            <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">{a.routeCode}</td>
                                            <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">
                                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                                        <g fill="#364680" fill-rule="nonzero">
                                                            <path fill="#364680" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                                            <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                                            <path fill="#364680" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                                        </g>
                                                    </svg>

                                                    {a.From}
                                                </div>

                                            </td>
                                            <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">{a.originYard}</td>
                                            <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">{a.Destination}</td>
                                            <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">
                                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                                    <g fill="#364680" fill-rule="nonzero">
                                                        <path fill="#364680" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                                        <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                                        <path fill="#364680" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                                    </g>
                                                </svg>
                                                {a.to}
                                                </div>

                                            </td>
                                            {/* <td style={{ borderRight: "0px solid", borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12">xxx</td> */}
                                            <td style={{ borderLeft: "0px solid" }} className="tLeft p-5 border-light fs-12 theme-font-color">{a.details}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </Fragment>
                </div>
            </Sticky>
        )

    }
}

export default MultiModeGeneratedContracts;
