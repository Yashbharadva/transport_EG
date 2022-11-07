import React, { Component, useState } from "react";
import Sticky from "Components/Sticky/index";
import Dropdown from "Components/Dropdown";
import { ReactComponent as Back } from 'Icons/back.svg'
import Checkbox from "Components/Checkbox/index";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import Input from "Components/FormInput/index";


class CreateNewContracts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [
        {
          rake: "Rake",
          ommodityCategory: "Commodity Category",
          commodityName: "Commodity Name",
          typeWagon: "Type of Wagon",
          numberWagonn: "No. of Wagon",
          weightWagon: "Wagon Wt."
        }
      ],
      isCheckAll: "false",
      checkedBlue: false,
      transporter: [
        { id: 1, value: "Transporter 1", isChecked: false },
        { id: 2, value: "Transporter 2", isChecked: false },
        { id: 3, value: "Transporter 3", isChecked: false },
      ]
    };
  }

  handleChange(i, e) {
    let Values = this.state.values;
    Values[i][e.target.name] = e.target.value;
    this.setState({ values });
  }

  addFields() {
    this.setState(({
      values: [...this.state.values, {
        rake: "Rake",
        commodityCategory: "Commodity Category",
        commodityName: "Commodity Name",
        typeWagon: "Type of Wagon",
        numberWagonn: "No. of Wagon",
        weightWagon: "Wagon Wt."
      }]
    }))
  }

  unCheck(i) {
    let ref = 'ref_' + i;
    this.refs[ref].checked = !this.refs[ref].checked;
  }

  removeFields(i) {
    console.log(i);
    let Values = this.state.values;
    Values.splice(i, 1);
    this.setState({ Values });
  }

  render() {

    var Handlechange = e => {
      this.setState({ show: !this.state.show });
    }

    var alterHandleChange = e => {
      this.setState({ alterShow: !this.state.alterShow });
    }


    var toggleChecked = e => {
      this.state.checked((prevState) => {
        let newState = { ...prevState }
        newState[e] = !prevState[e];
        return newState;
      });
    };

    // var selectAll = value => {
    //   this.state.checked(value);
    //   this.state
    // }

    const handleChecked = () => {
      this.state.checkedBlue == true;
    }



    const contentStyle = {
      width: "auto",
      height: "auto",
      maxHeight: "80%",
      overflowY: "scroll"
    }

    // let selectAllScheduleRecords = () => {
    //   const { PreviewData } = this.state;
    //   const { selectedArray } = this.state
    //   let selectedSchedulesCopy = [...selectedArray]
    //   const value = (selectedSchedulesCopy.length !== PreviewData.length);

    //   if (value) {
    //     (PreviewData || []).map((obj, index) => {
    //       if (!selectedSchedulesCopy.includes(index)) {
    //         selectedSchedulesCopy.push(index);
    //       }
    //     })
    //   }
    //   else {
    //     selectedSchedulesCopy = [];
    //   }
    //   this.setState({ selectedArray: selectedSchedulesCopy });

    // }

    // const checkAll = document.querySelector("#L1All");

    // const checkOptions = document.querySelectorAll(".select-option");

    // var selectAllCheckbox = e => {
    //   const isChecked = checkAll.checked;
    //   for (let i = 0; i < checkOptions.length; i++) {
    //     checkOptions[i].checked = isChecked;
    //   }
    // }


    // checkedFullRow = (id) => {
    //   const { selectedArray } = this.state
    //   if (selectedArray.includes(id)) {
    //     let schIndex = selectedArray.indexOf(id)
    //     selectedArray.splice(schIndex, 1)
    //     this.setState({ selectedArray: selectedArray })
    //   } else {
    //     this.setState({ selectedArray: [...selectedArray, id] })
    //   }
    // }

    const temp = [{ id: 1, name: "Option1" }, { id: 2, name: "Option2" }, { id: 3, name: "Option3" }];

    return (

      <Sticky>
        <div className="main-div" style={{ maxWidth: "2000px" }}>


          <div className="arrow-text" style={{ cursor: "pointer" }}>
            <div onClick={() => {
              this.props.history.push('/viewGeneratedContracts')
            }}>
              <Back className="fill-theme mr-5" />
            </div>
            <div className="header-text">
              Create New Contract
            </div>
          </div>

          <div className="back-light-blue">

            <div className="input-fields">
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  Route Code
                </div>
                <Dropdown
                  items={temp}
                  label="Route Code"
                  displayKey="name"
                  selectedItem={null}
                  onSelect={this.selectBranchId}
                  className="mb-0 wt-250 ht-30"
                  searchEnabled={true}
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  From
                </div>
                <Dropdown
                  items={temp}
                  label="From"
                  displayKey="name"
                  selectedItem={null}
                  onSelect={this.selectBranchId}
                  className="mb-0 wt-250 ht-30"
                  searchEnabled={true}
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  To
                </div>
                <Dropdown
                  items={temp}
                  label="To"
                  displayKey="name"
                  selectedItem={null}
                  onSelect={this.selectBranchId}
                  className="mb-0 wt-250 ht-30"
                  searchEnabled={true}
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  Origin Yard
                </div>
                <Dropdown
                  items={temp}
                  label="Origin Yard"
                  displayKey="name"
                  selectedItem={null}
                  onSelect={this.selectBranchId}
                  className="mb-0 wt-250 ht-30"
                  searchEnabled={true}
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  Destination Yard
                </div>
                <Dropdown
                  items={temp}
                  label="Destination Yard"
                  displayKey="name"
                  selectedItem={null}
                  onSelect={this.selectBranchId}
                  className="mb-0 wt-250 ht-30"
                  searchEnabled={true}
                />
              </div>
              {/* <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px" }}>.</div>
                <div className="search-button">
                  Search
                </div>
              </div> */}
              <button
                className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15 mt-20 bg-blue"}
              >Search</button>
            </div>

            {this.state.values.map((element, index) => (
              <div className="input-fields" key={index}>
                <div className="fs-14 header-dark-color mr-10">
                  <div style={{ paddingBottom: "5px", color: "white" }}>
                    {element.rake}
                  </div>
                  <Dropdown
                    items={temp}
                    label=" Full Rake"
                    displayKey="name"
                    selectedItem={null}
                    onSelect={this.selectBranchId}
                    className="mb-0 wt-250 ht-30"
                    searchEnabled={true}
                  />
                </div>
                <div className="fs-14 header-dark-color mr-10">
                  <div style={{ paddingBottom: "5px", color: "white" }}>
                    {element.commodityCategory}
                  </div>
                  <Dropdown
                    items={temp}
                    label="Commodity Category"
                    displayKey="name"
                    selectedItem={null}
                    onSelect={this.selectBranchId}
                    className="mb-0 wt-250 ht-30 wd-500"
                    searchEnabled={true}
                  />
                </div>
                <div className="fs-14 header-dark-color mr-10">
                  <div style={{ paddingBottom: "5px", color: "white" }}>
                    {element.commodityName}
                  </div>
                  <Dropdown
                    items={temp}
                    label="Commdity Name"
                    displayKey="name"
                    selectedItem={null}
                    onSelect={this.selectBranchId}
                    className="mb-0 wt-250 ht-30 wd-500"
                    searchEnabled={true}
                  />
                </div>
                <div className="fs-14 header-dark-color mr-10">
                  <div style={{ paddingBottom: "5px", color: "white" }}>
                    {element.typeWagon}
                  </div>
                  <Dropdown
                    items={temp}
                    label="BCN"
                    displayKey="name"
                    selectedItem={null}
                    onSelect={this.selectBranchId}
                    className="mb-0 wt-250 ht-30 wd-100"
                    searchEnabled={true}
                  />
                </div>
                <div className="fs-14 header-dark-color mr-10">
                  <div style={{ paddingBottom: "5px", color: "white" }}>
                    {element.numberWagonn}
                  </div>
                  <Input
                    label="55"
                    displayKey="name"
                    selectedItem={null}
                    className="mb-0 wt-250 ht-30 wd-100"
                    style={{ width: "120px", height: "36px", background: "white", borderRadius: "5px" }}
                  />
                </div>
                <div className="fs-14 header-dark-color mr-10">
                  <div style={{ paddingBottom: "5px", color: "white" }}>
                    {element.weightWagon}
                  </div>
                  <Input
                    label="55"
                    displayKey="name"
                    selectedItem={null}
                    className="mb-0 wt-250 ht-30 wd-100"
                    style={{ width: "120px", height: "36px", background: "white", borderRadius: "5px" }}
                  />
                </div>
                {
                  index ?
                    <div className="fs-14 header-dark-color mr-10 cursor-pointer">
                      <br></br>
                      <br></br>
                      <AiOutlineCloseCircle style={{ width: "25px", height: "25px", color: "white" }} onClick={() => this.removeFields(index)} />
                    </div>
                    :
                    <div className="fs-14 header-dark-color mr-10 cursor-pointer">
                      <br></br>
                      <br></br>
                      <AiOutlinePlusCircle style={{ width: "25px", height: "25px", color: "white" }} onClick={() => this.addFields()} />
                    </div>
                }

              </div>
            ))}

          </div>

          {/* TABLE DHRUB */}

          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "98.5%", marginLeft: "30px", borderSpacing: '0px', marginTop: "30px" }}>
            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
              <tr className="br-10">
                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>

                <th className='col-4 tLeft'><Checkbox type="square" label="L1" /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L2" /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L3" /></th>
              </tr>
            </thead>


            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
              {/* FIRST TABLE */}

              <tr>
                <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                  Transporter
                </td>

                <td>
                  <label>
                    <th className='col-4 tLeft'><Checkbox type="square" onCheck={() => { handleChecked }} label="Transporter 1" /></th>
                  </label>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px" }}>
                    <storng>Rate:</storng> $ 4500 Per MT
                  </span>

                  <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                      SAP Contract No:
                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 2" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4300 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 3" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4250 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

              </tr>

              <hr style={{ width: "300%" }} />

              {/* SECOND TABLE */}

              <tr>
                <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                  Transporter
                </td>

                <td>
                  <div>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 1" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px" }}>
                    <storng>Rate:</storng> $ 4500 Per MT
                  </span>

                  <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                      SAP Contract No:
                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 2" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4300 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 3" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4250 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

              </tr>

              <hr style={{ width: "300%" }} />

              {/* THIRD TABLE */}

              <tr>
                <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                  Transporter
                </td>

                <td>
                  <div>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 1" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px" }}>
                    <storng>Rate:</storng> $ 4500 Per MT
                  </span>

                  <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                      SAP Contract No:
                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 2" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4300 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 3" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4250 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

              </tr>

              <hr style={{ width: "300%" }} />

              {/* FOURTH TABLE  */}

              <tr>
                <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                  Transporter
                </td>

                <td>
                  <div>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 1" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px" }}>
                    <storng>Rate:</storng> $ 4500 Per MT
                  </span>

                  <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                      SAP Contract No:
                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 2" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4300 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 3" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4250 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

              </tr>

            </tbody>
          </table>


          {/* TABLE OIL */}

          {this.state.values.map((element, index) => (
            <div>
              <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "98.5%", marginLeft: "30px", borderSpacing: '0px', marginTop: "30px" }}>
                <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                  <tr className="br-10">
                    <th className='col-3 pl-10 pr-10 tLeft'>Rail Freight For Commodity : Oil</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">

                  <div style={{ display: "flex", justifyContent: "space-between", width: "300%" }}>

                    <div style={{ width: "50%" }}>

                      <div style={{ padding: "10px" }}>
                        <div style={{ border: "1px solid black" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "15px" }}>
                            From:
                            <span>
                              To:
                            </span>
                            Origin Yard:
                            <div>
                              Destination Yard:
                            </div>
                            <div>
                              Vadodara
                            </div>
                            <div>
                              Surat
                            </div>
                            <div>
                              Vadodara
                            </div>
                            <div>
                              Adajan
                            </div>
                          </div>

                        </div>
                      </div>

                      <div style={{ padding: "10px" }}>
                        <div style={{ border: "1px solid black" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "15px" }}>
                            Commodity:
                            <span>
                              Commodity Type:
                            </span>
                            <div>
                              Oil
                            </div>
                            Oil
                          </div>

                        </div>
                      </div>

                    </div>

                    {/* Half Component */}

                    <div style={{ width: "50%" }}>

                      <div style={{ padding: "10px" }}>
                        <div style={{ border: "1px solid black" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "15px" }}>
                            Wagon Type:
                            <span>
                              Rake Type:
                            </span>
                            No. of Wagon:
                            <div>
                              Loadable Weight:
                            </div>
                            <div>
                              BCN
                            </div>
                            <div>
                              Full
                            </div>
                            <div>
                              42
                            </div>
                            <div>
                              55 MTper Wagon
                            </div>
                          </div>

                        </div>
                      </div>

                      <div style={{ padding: "10px" }}>
                        <div style={{ border: "1px solid black" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "15px" }}>
                            Total Cost:
                            <span>
                              Cost / MT:
                            </span>
                            <div>
                              $ 230880.00
                            </div>
                            $ 1470.00
                          </div>

                        </div>
                      </div>


                    </div>


                  </div>
                </tbody>
              </table>
            </div>
          ))}

          {/* FINAL TABLE */}

          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "98.5%", marginLeft: "30px", borderSpacing: '0px', marginTop: "30px" }}>
            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
              <tr className="br-10">
                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>

                <th className='col-4 tLeft'><Checkbox type="square" label="L1" /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L2" /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L3" /></th>
              </tr>
            </thead>
            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
              {/* FIRST TABLE */}

              <tr>
                <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                  Transporter
                </td>

                <td>
                  <div>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 1" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px" }}>
                    <storng>Rate:</storng> $ 4500 Per MT
                  </span>

                  <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                      SAP Contract No:
                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 2" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4300 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 3" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4250 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

              </tr>

              <hr style={{ width: "300%" }} />


              {/* THIRD TABLE */}

              <tr>
                <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                  Transporter
                </td>

                <td>
                  <div>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 1" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px" }}>
                    <storng>Rate:</storng> $ 4500 Per MT
                  </span>

                  <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                      SAP Contract No:
                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 2" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4300 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 3" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4250 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

              </tr>

              <hr style={{ width: "300%" }} />

              {/* FOURTH TABLE  */}

              <tr>
                <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                  Transporter
                </td>

                <td>
                  <div>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 1" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px" }}>
                    <storng>Rate:</storng> $ 4500 Per MT
                  </span>

                  <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                      SAP Contract No:
                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 2" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4300 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

                <td>
                  <div style={{ paddingBottom: "10px" }}>
                    <th className='col-4 tLeft'><Checkbox type="square" label="Transporter 3" /></th>
                  </div>
                  <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                    <storng>Rate:</storng> $ 4250 Per MT
                  </span>
                  <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                    <button style={{ padding: "5px 10px", background: "blue", color: "white", borderRadius: "5px" }}>
                      send LOI
                    </button>
                  </div>
                  <div></div>
                </td>

              </tr>

            </tbody>
          </table>

          <div style={{ paddingTop: "20px", width: "100%", justifyContent: "end", display: "flex" }}>

            <Popup trigger={
              <button
                className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15"}
              >Preview & Generate Contract
              </button>
            }
              modal
              contentStyle={contentStyle}
            >
              {close => (
                <div className="modal scroll" style={{ padding: "10px", fontFamily: "Proximanova-Regular" }}>
                  <div style={{ padding: "10px 5px", display: "flex", justifyContent: "end", transform: "translate(10px, -20px)" }}>
                    <a className="chcek-close-button" onClick={close} style={{ border: "5px solid black", padding: "1px 5px", borderRadius: "999px", fontSize: "20px", color: "black" }}>
                      &times;
                    </a>
                  </div>

                  <div style={{ boxShadow: "0 0 27px 4px rgb(69 68 68 / 60%)", padding: "20px" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        Contract No : 23456666
                        <span onClick={Handlechange}>{!this.state.show ? <IoIosArrowDropdown size="1.5em" color="#528aea" style={{ cursor: "pointer" }} /> : <IoIosArrowDropup size="1.5em" color="#528aea" style={{ cursor: "pointer" }} />}</span>
                      </div>
                      <hr />
                    </div>

                    <div style={{ padding: "10px 0px", width: "50%" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>

                        <div>Route Code:</div>
                        <div>From:</div>
                        <div>To:</div>
                        <div>Origin Yard:</div>
                        <div>Destination Yard:</div>

                        <span className="span">454567</span>
                        <span className="span">Mundra</span>
                        <span className="span">Lucknow</span>
                        <span className="span">Dhrub</span>
                        <span className="span">Surat</span>
                      </div>
                    </div>

                    <div style={{ padding: "10px 0px", width: "100%" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>

                        <div>Rake:</div>
                        <div>Commodity Category:</div>
                        <div>Commodity Name:</div>
                        <div>Type of Wagon:</div>
                        <div>No of Wagon:</div>
                        <div>Wagon Wt:</div>

                        <span className="span">Full Rake</span>
                        <span className="span">Hydrogeneted and other Edible Oil</span>
                        <span className="span">All Refined and Non Refined Edible Oils</span>
                        <span className="span">BCN</span>
                        <span className="span">42</span>
                        <span className="span">55 MT</span>
                      </div>
                    </div>

                    <div style={{ padding: "20px 0" }}>


                      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", width: "50%" }}>

                        <div style={{ display: "block", padding: "10px 10px", background: "blue", color: "white" }}>
                          <p>Total Cost : $ 35,05,000</p>
                          <p> Cost / PTPK : $ 1430 PTPK</p>
                          <p>Cost / MT : $ 4500 per MT</p>
                        </div>

                        <div style={{ display: "block", padding: "10px 10px", background: "blue", color: "white" }}>
                          <p>Total Cost : $ 35,05,000</p>
                          <p> Cost / PTPK : $ 1430 PTPK</p>
                          <p>Cost / MT : $ 4500 per MT</p>
                        </div>

                      </div>


                      {/* HIDE AND SHOW PART DROPDOWN */}


                      {this.state.show && <div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>



                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                              <tr className="br-10">
                                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                              </tr>
                            </thead>
                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                              {/* FIRST TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* SECOND TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* THIRD TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* FOURTH TABLE  */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                            </tbody>
                          </table>

                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                              <tr className="br-10">
                                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                              </tr>
                            </thead>
                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                              {/* FIRST TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* SECOND TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* THIRD TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* FOURTH TABLE  */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                            </tbody>
                          </table>

                        </div>







                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>



                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                              <tr className="br-10">
                                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                              </tr>
                            </thead>
                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                              {/* FIRST TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10 ">
                                  <div>
                                    Transporter 1
                                  </div>
                                </td>
                              </tr>

                            </tbody>
                          </table>

                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                              <tr className="br-10">
                                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                              </tr>
                            </thead>
                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                              {/* FIRST TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10 ">
                                  <div>
                                    Transporter 1
                                  </div>
                                </td>
                              </tr>


                            </tbody>
                          </table>

                        </div>




                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>



                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                              <tr className="br-10">
                                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                              </tr>
                            </thead>
                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                              {/* FIRST TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* SECOND TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* THIRD TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>


                            </tbody>
                          </table>

                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                              <tr className="br-10">
                                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                              </tr>
                            </thead>
                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                              {/* FIRST TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* SECOND TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* THIRD TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                  </span>

                                  <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                      SAP Contract No:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                    </div>
                                    <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                      <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>


                            </tbody>
                          </table>

                        </div>

                      </div>}


                    </div>
                  </div>

                  <div style={{ paddingTop: "20px" }}>
                    <div style={{ boxShadow: "0 0 27px 4px rgb(69 68 68 / 60%)", padding: "20px" }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          Contract No : 23456666
                          <span onClick={alterHandleChange}>{!this.state.alterShow ? <IoIosArrowDropdown size="1.5em" color="#528aea" style={{ cursor: "pointer" }} /> : <IoIosArrowDropup size="1.5em" color="#528aea" style={{ cursor: "pointer" }} />}</span>
                        </div>
                        <hr />
                      </div>

                      <div style={{ padding: "10px 0px", width: "50%" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>

                          <div>Route Code:</div>
                          <div>From:</div>
                          <div>To:</div>
                          <div>Origin Yard:</div>
                          <div>Destination Yard:</div>

                          <span className="span">454567</span>
                          <span className="span">Mundra</span>
                          <span className="span">Lucknow</span>
                          <span className="span">Dhrub</span>
                          <span className="span">Surat</span>
                        </div>
                      </div>

                      <div style={{ padding: "10px 0px", width: "100%" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>

                          <div>Rake:</div>
                          <div>Commodity Category:</div>
                          <div>Commodity Name:</div>
                          <div>Type of Wagon:</div>
                          <div>No of Wagon:</div>
                          <div>Wagon Wt:</div>

                          <span className="span">Full Rake</span>
                          <span className="span">Hydrogeneted and other Edible Oil</span>
                          <span className="span">All Refined and Non Refined Edible Oils</span>
                          <span className="span">BCN</span>
                          <span className="span">42</span>
                          <span className="span">55 MT</span>
                        </div>
                      </div>

                      <div style={{ padding: "20px 0" }}>


                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", width: "50%" }}>

                          <div style={{ display: "block", padding: "10px 10px", background: "blue", color: "white" }}>
                            <p>Total Cost : $ 35,05,000</p>
                            <p> Cost / PTPK : $ 1430 PTPK</p>
                            <p>Cost / MT : $ 4500 per MT</p>
                          </div>

                          <div style={{ display: "block", padding: "10px 10px", background: "blue", color: "white" }}>
                            <p>Total Cost : $ 35,05,000</p>
                            <p> Cost / PTPK : $ 1430 PTPK</p>
                            <p>Cost / MT : $ 4500 per MT</p>
                          </div>

                        </div>


                        {/* HIDE AND SHOW PART DROPDOWN */}


                        {this.state.alterShow && <div>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>



                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                                </tr>
                              </thead>
                              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                {/* FIRST TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* SECOND TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* THIRD TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* FOURTH TABLE  */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                              </tbody>
                            </table>

                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                                </tr>
                              </thead>
                              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                {/* FIRST TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* SECOND TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* THIRD TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* FOURTH TABLE  */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                              </tbody>
                            </table>

                          </div>







                          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>



                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                                </tr>
                              </thead>
                              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                {/* FIRST TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10 ">
                                    <div>
                                      Transporter 1
                                    </div>
                                  </td>
                                </tr>

                              </tbody>
                            </table>

                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                                </tr>
                              </thead>
                              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                {/* FIRST TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10 ">
                                    <div>
                                      Transporter 1
                                    </div>
                                  </td>
                                </tr>


                              </tbody>
                            </table>

                          </div>




                          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>



                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                                </tr>
                              </thead>
                              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                {/* FIRST TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* SECOND TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* THIRD TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>


                              </tbody>
                            </table>

                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>
                                </tr>
                              </thead>
                              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                {/* FIRST TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* SECOND TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <hr />

                                {/* THIRD TABLE */}

                                <tr>
                                  <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10">
                                    <div>
                                      Transporter 1
                                    </div>
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                    </span>

                                    <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                        SAP Contract No:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                      </div>
                                      <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                        <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>


                              </tbody>
                            </table>

                          </div>

                        </div>}


                      </div>
                    </div>
                  </div>





                  <div className="actions" style={{ display: "flex", justifyContent: "end", paddingTop: "20px" }}>
                    <button
                      className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15"}
                      onClick={() => {
                        console.log("modal closed");
                        close();
                      }}
                    >Cancel
                    </button>
                    <Popup
                      trigger={<button
                        className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15"}
                      >Generate Contract
                      </button>}
                      position="top center"
                      closeOnDocumentClick
                      contentStyle={{ padding: "0px", border: "none" }}
                    >
                    </Popup>


                  </div>


                </div>
              )}
            </Popup>


          </div>


        </div >
      </Sticky >
    )
  }
}

export default CreateNewContracts;