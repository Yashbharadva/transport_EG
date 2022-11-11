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
      selectedArray: [],
      selectedArray2: [],
      selectedArray3: [],
      selectedArray4: [],
      selectedArray5: [],
      selectedArray6: [],
      allSelected: true,
      destinationYardFull: [{
        destinationYard: "Destination Yard"
      }],
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
      ],
      allData: [
        { id: 44, name: "Transporters", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 45, name: "Surveyors", check1: "Surveyor 1", check2: "Surveyor 2", check3: "Surveyor 3" },
        { id: 46, name: "Handling Agents", check1: "Handling Agents 1", check2: "Handling Agents 2", check3: "Handling Agents 3" },
        { id: 47, name: "Security", check1: "Security 1", check2: "Security 2", check3: "Security 3" }
      ],
      allData2: [
        { id: 44, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 45, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 46, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 47, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" }
      ],
      allData3: [
        { id: 44, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 45, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 46, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 47, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" }
      ],
      allData4: [
        { id: 44, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 45, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 46, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 47, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" }
      ],
      allData5: [
        { id: 44, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 45, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 46, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 47, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" }
      ],
      allData6: [
        { id: 44, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 45, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 46, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" },
        { id: 47, name: "Transporter", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3" }
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

  addDestinationYard() {
    this.setState(({
      destinationYardFull: [...this.state.destinationYardFull, {
        destinationYard: "Destination Yard"
      }]
    }))
  }

  removeDestionationYard(i) {
    console.log(i);
    let destinationYardFull = this.state.destinationYardFull;
    destinationYardFull.splice(i, 1);
    this.setState({ destinationYardFull });
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

  checkedFullRow = (id) => {
    console.log(id);
    const { selectedArray } = this.state;
    if (selectedArray.includes(id)) {
      let schIndex = selectedArray.indexOf(id)
      selectedArray.splice(schIndex, 1)
      this.setState({ selectedArray: selectedArray })
    } else {
      this.setState({ selectedArray: [...selectedArray, id] })
    }
  }

  checkedFullRow2 = (id) => {
    console.log(id);
    const { selectedArray2 } = this.state;
    if (selectedArray2.includes(id)) {
      let schIndex = selectedArray2.indexOf(id)
      selectedArray2.splice(schIndex, 2)
      this.setState({ selectedArray2: selectedArray2 })
    } else {
      this.setState({ selectedArray2: [...selectedArray2, id] })
    }
  }

  checkedFullRow3 = (id) => {
    console.log(id);
    const { selectedArray3 } = this.state;
    if (selectedArray3.includes(id)) {
      let schIndex = selectedArray3.indexOf(id)
      selectedArray3.splice(schIndex, 1)
      this.setState({ selectedArray3: selectedArray3 })
    } else {
      this.setState({ selectedArray3: [...selectedArray3, id] })
    }
  }

  checkedFullRow4 = (id) => {
    console.log(id);
    const { selectedArray4 } = this.state;
    if (selectedArray4.includes(id)) {
      let schIndex = selectedArray4.indexOf(id)
      selectedArray4.splice(schIndex, 1)
      this.setState({ selectedArray4: selectedArray4 })
    } else {
      this.setState({ selectedArray4: [...selectedArray4, id] })
    }
  }

  checkedFullRow5 = (id) => {
    console.log(id);
    const { selectedArray5 } = this.state;
    if (selectedArray5.includes(id)) {
      let schIndex = selectedArray5.indexOf(id)
      selectedArray5.splice(schIndex, 1)
      this.setState({ selectedArray5: selectedArray5 })
    } else {
      this.setState({ selectedArray5: [...selectedArray5, id] })
    }
  }

  checkedFullRow6 = (id) => {
    console.log(id);
    const { selectedArray6 } = this.state;
    if (selectedArray6.includes(id)) {
      let schIndex = selectedArray6.indexOf(id)
      selectedArray6.splice(schIndex, 1)
      this.setState({ selectedArray6: selectedArray6 })
    } else {
      this.setState({ selectedArray6: [...selectedArray6, id] })
    }
  }

  selectAllScheduleRecords = () => {
    console.log("checkedcheckedcheckedcheckedchecked");
    const { allData } = this.state;
    const { selectedArray } = this.state
    let selectedSchedulesCopy = [...selectedArray]
    const value = (selectedSchedulesCopy.length !== allData.length);
    console.log(value, "valuevaluevaluevaluevaluevaluevaluevalue");

    if (value) {
      (allData || []).map((obj) => {
        if (!selectedSchedulesCopy.find(a => a === obj.id)) {
          selectedSchedulesCopy.push(obj.id);
        }
      })
    }
    else {
      selectedSchedulesCopy = [];
    }
    this.setState({ selectedArray: selectedSchedulesCopy });
  }

  selectAllScheduleRecords2 = () => {
    const { allData2 } = this.state;
    const { selectedArray2 } = this.state
    let selectedSchedulesCopy = [...selectedArray2]
    const value = (selectedSchedulesCopy.length !== allData2.length);

    if (value) {
      (allData2 || []).map((obj) => {
        if (!selectedSchedulesCopy.find(ab => ab === obj.id)) {
          selectedSchedulesCopy.push(obj.id);
        }
      })
    } else {
      selectedSchedulesCopy = [];
    }
    this.setState({ selectedArray2: selectedSchedulesCopy });
  }

  selectAllScheduleRecords3 = () => {
    const { allData3 } = this.state;
    const { selectedArray3 } = this.state
    let selectedSchedulesCopy = [...selectedArray3]
    const value = (selectedSchedulesCopy.length !== allData3.length);

    if (value) {
      (allData3 || []).map((obj) => {
        if (!selectedSchedulesCopy.find(abc => abc === obj.id)) {
          selectedSchedulesCopy.push(obj.id);
        }
      })
    } else {
      selectedSchedulesCopy = [];
    }
    this.setState({ selectedArray3: selectedSchedulesCopy });
  }

  selectAllScheduleRecords4 = () => {
    const { allData4 } = this.state;
    const { selectedArray4 } = this.state
    let selectedSchedulesCopy = [...selectedArray4]
    const value = (selectedSchedulesCopy.length !== allData4.length);

    if (value) {
      (allData4 || []).map((obj) => {
        if (!selectedSchedulesCopy.find(abc => abc === obj.id)) {
          selectedSchedulesCopy.push(obj.id);
        }
      })
    } else {
      selectedSchedulesCopy = [];
    }
    this.setState({ selectedArray4: selectedSchedulesCopy });
  }

  selectAllScheduleRecords5 = () => {
    const { allData5 } = this.state;
    const { selectedArray5 } = this.state
    let selectedSchedulesCopy = [...selectedArray5]
    const value = (selectedSchedulesCopy.length !== allData5.length);

    if (value) {
      (allData5 || []).map((obj) => {
        if (!selectedSchedulesCopy.find(abc => abc === obj.id)) {
          selectedSchedulesCopy.push(obj.id);
        }
      })
    } else {
      selectedSchedulesCopy = [];
    }
    this.setState({ selectedArray5: selectedSchedulesCopy });
  }

  selectAllScheduleRecords6 = () => {
    const { allData6 } = this.state;
    const { selectedArray6 } = this.state
    let selectedSchedulesCopy = [...selectedArray6]
    const value = (selectedSchedulesCopy.length !== allData6.length);

    if (value) {
      (allData6 || []).map((obj) => {
        if (!selectedSchedulesCopy.find(abc => abc === obj.id)) {
          selectedSchedulesCopy.push(obj.id);
        }
      })
    } else {
      selectedSchedulesCopy = [];
    }
    this.setState({ selectedArray6: selectedSchedulesCopy });
  }



  render() {

    console.log(this.state.selectedArray);

    var Handlechange = e => {
      this.setState({ show: !this.state.show });
    }

    var alterHandleChange = e => {
      this.setState({ alterShow: !this.state.alterShow });
    }

    const contentStyle = {
      width: "auto",
      height: "auto",
      maxHeight: "80%",
      overflowY: "scroll"
    }


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
              <div>
                {this.state.destinationYardFull.map((ele, idx) => (
                  <div key={idx} style={{ display: "flex", paddingBottom: "15px" }}>
                    <div className="fs-14 header-dark-color mr-10" >
                      <div style={{ paddingBottom: "5px", color: "white" }} key={idx}>
                        {ele.destinationYard}
                      </div>
                      <Dropdown
                        items={temp}
                        label={ele.destinationYard}
                        displayKey="name"
                        selectedItem={null}
                        onSelect={this.selectBranchId}
                        className="mb-0 wt-250 ht-30"
                        searchEnabled={true}
                      />
                    </div>
                    <div>
                      {idx ?
                        <div className="fs-14 header-dark-color mr-10 cursor-pointer">
                          <br></br>
                          <br></br>
                          <AiOutlineCloseCircle style={{ width: "25px", height: "25px", color: "white", cursor: "pointer" }} onClick={() => this.removeDestionationYard(idx)} />
                        </div>
                        :
                        <div className="fs-14 header-dark-color mr-10 cursor-pointer">
                          <br></br>
                          <br></br>
                          <AiOutlinePlusCircle style={{ width: "25px", height: "25px", color: "white", cursor: "pointer" }} onClick={() => this.addDestinationYard()} />
                        </div>}
                    </div>
                  </div>
                ))}
              </div>
              <button
                className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15 mt-20 bg-blue"}
              >Search</button>
            </div>


            {/* ADD FULL ROW ON PLUS BUTTON */}

            {
              this.state.values.map((element, index) => (
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
                      {element.commodityName}
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
                        <AiOutlineCloseCircle style={{ width: "25px", height: "25px", color: "white", cursor: "pointer" }} onClick={() => this.removeFields(index)} />
                      </div>
                      :
                      <div className="fs-14 header-dark-color mr-10 cursor-pointer">
                        <br></br>
                        <br></br>
                        <AiOutlinePlusCircle style={{ width: "25px", height: "25px", color: "white", cursor: "pointer" }} onClick={() => this.addFields()} />
                      </div>
                  }

                </div>
              ))
            }

          </div >

          {/* TABLE SURAT */}

          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "98.5%", marginLeft: "30px", borderSpacing: '0px', marginTop: "30px" }
          }>
            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
              <tr className="br-10">

                <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                    <g fill="none" fill-rule="nonzero">
                      <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                      <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                      <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                    </g>
                  </svg>Surat</th>

                <th className='col-4 tLeft'><Checkbox type="square" label="L1" checked={this.state.selectedArray.length === this.state.allData.length} onCheck={() => { this.selectAllScheduleRecords() }} /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L2" checked={this.state.selectedArray2.length === this.state.allData2.length} onCheck={() => { this.selectAllScheduleRecords2() }} /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L3" checked={this.state.selectedArray3.length === this.state.allData3.length} onCheck={() => { this.selectAllScheduleRecords3() }} /></th>
              </tr>
            </thead>


            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
              {/* FIRST TABLE */}


              {this.state.allData.map((ele, idx) => {
                return (
                  <tr key={idx}>
                    <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                      {ele.name}
                    </td>

                    <td style={{ paddingTop: "20px" }}>
                      <div>
                        <th className='col-4 tLeft' key={idx}>
                          <Checkbox type="square" label={ele.check1} onCheck={() => { this.checkedFullRow(ele.id) }} checked={this.state.selectedArray.includes(ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px", alignItems: "center" }}>
                        <storng>Rate:</storng> $ 4000 Per MT
                        <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                        <th className='col-4 tLeft'><Checkbox type="square" label={ele.check2} onCheck={() => { this.checkedFullRow2(ele.id) }} checked={this.state.selectedArray2.includes(ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                        <storng>Rate:</storng> $ 4300 Per MT
                        <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px", marginLeft: "5px" }}>L2</span>
                      </span>
                      <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                        <button style={{ padding: "5px 10px", background: "#528aea", color: "white", borderRadius: "5px" }}>
                          send LOI
                        </button>
                      </div>
                      <div></div>
                    </td>

                    <td>
                      <div style={{ paddingBottom: "10px" }}>
                        <th className='col-4 tLeft'><Checkbox type="square" label={ele.check3} onCheck={() => { this.checkedFullRow3(ele.id) }} checked={this.state.selectedArray3.includes(ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                        <storng>Rate:</storng> $ 4250 Per MT
                        <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px", marginLeft: "5px" }}>L3</span>
                      </span>
                      <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                        <button style={{ padding: "5px 10px", background: "#528aea", color: "white", borderRadius: "5px" }}>
                          send LOI
                        </button>
                      </div>
                      <div></div>
                    </td>


                  </tr>
                )
              })}


            </tbody>
          </table >


          {/* TABLE OIL */}

          {
            this.state.values.map((element, index) => (
              <div>
                <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "98.5%", marginLeft: "30px", borderSpacing: '0px', marginTop: "30px" }}>
                  <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                    <tr className="br-10">
                      <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "15px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 42 44">
                          <g fill="#FFF" fill-rule="evenodd" stroke-width=".5">
                            <path d="M1.1 43.731a.41.41 0 0 1-.21 0 .49.49 0 0 1-.24-.66l9.26-19.54a.49.49 0 0 1 .66-.24.5.5 0 0 1 .24.67L1.6 43.491a.48.48 0 0 1-.5.24zM40.42 43.731a.48.48 0 0 1-.45-.28l-9.26-19.49a.5.5 0 0 1 .24-.67.49.49 0 0 1 .66.24l9.26 19.53a.49.49 0 0 1-.27.67.41.41 0 0 1-.18 0z" />
                            <path d="M32.68 27.441H8.84a.5.5 0 1 1 0-1h23.84a.5.5 0 1 1 0 1zM35.37 33.671H5.85a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5h29.52a.5.5 0 1 1 0 1zM38.6 39.891H2.94a.5.5 0 0 1-.5-.5.51.51 0 0 1 .5-.5H38.6a.5.5 0 1 1 0 1z" />
                            <path fill-rule="nonzero" d="M31.33 24.241H10.44a2.61 2.61 0 0 1-2.61-2.61V3.341a2.61 2.61 0 0 1 2.61-2.61h20.89a2.61 2.61 0 0 1 2.61 2.61v18.29a2.61 2.61 0 0 1-2.61 2.61zM10.44 1.731c-.89 0-1.61.721-1.61 1.61v18.29c0 .89.72 1.61 1.61 1.61h20.89a1.61 1.61 0 0 0 1.61-1.61V3.341a1.61 1.61 0 0 0-1.61-1.61H10.44z" />
                            <path d="M33.44 16.381H8.33a.5.5 0 1 1 0-1h25.11a.5.5 0 1 1 0 1z" />
                            <path d="M20.65 16.381a.5.5 0 0 1-.5-.5V1.231a.5.5 0 1 1 1 0v14.65a.51.51 0 0 1-.5.5z" />
                            <path fill-rule="nonzero" d="M29.66 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1.045 1.045 0 1 0 0 2.09 1.045 1.045 0 0 0 0-2.09zM11.73 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1 1 0 1 0 .002 2 1 1 0 0 0-.003-2z" />
                            <path d="M22.6 21.081h-3.66a.5.5 0 1 1 0-1h3.66a.5.5 0 1 1 0 1z" />
                          </g>
                        </svg>
                        Rail Freight For Commodity : Oil</th>
                    </tr>
                  </thead>
                  <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>

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
            ))
          }

          {/* TABLE VADODARA */}

          {
            this.state.destinationYardFull.map((ele, idx) =>
            (<table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "98.5%", marginLeft: "30px", borderSpacing: '0px', marginTop: "30px" }}>
              <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                <tr className="br-10">
                  <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                      <g fill="none" fill-rule="nonzero">
                        <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                        <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                        <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                      </g>
                    </svg>Vadodara</th>

                  <th className='col-4 tLeft'><Checkbox type="square" label="L1" checked={this.state.selectedArray4.length === this.state.allData4.length} onCheck={() => { this.selectAllScheduleRecords4() }} /></th>
                  <th className='col-4 tLeft'><Checkbox type="square" label="L2" checked={this.state.selectedArray5.length === this.state.allData5.length} onCheck={() => { this.selectAllScheduleRecords5() }} /></th>
                  <th className='col-4 tLeft'><Checkbox type="square" label="L3" checked={this.state.selectedArray6.length === this.state.allData6.length} onCheck={() => { this.selectAllScheduleRecords6() }} /></th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                {/* FIRST TABLE */}

                {this.state.allData.map((ele, idx) => {
                  return (
                    <tr key={idx}>
                      <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                        {ele.name}
                      </td>

                      <td style={{ paddingTop: "20px" }}>
                        <div>
                          <th className='col-4 tLeft' key={idx}><Checkbox type="square" label={ele.check1} onCheck={() => { this.checkedFullRow4(ele.id) }} checked={this.state.selectedArray4.includes(ele.id)} /></th>
                        </div>
                        <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px", alignItems: "center" }}>
                          <storng>Rate:</storng> $ 4500 Per MT
                          <div style={{ border: "1px solid green", background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</div>
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
                          <th className='col-4 tLeft'><Checkbox type="square" label={ele.check2} onCheck={() => { this.checkedFullRow5(ele.id) }} checked={this.state.selectedArray5.includes(ele.id)} /></th>
                        </div>
                        <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                          <storng>Rate:</storng> $ 4300 Per MT
                          <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px", marginLeft: "5px" }}>L2</span>
                        </span>
                        <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                          <button style={{ padding: "5px 10px", background: "#528aea", color: "white", borderRadius: "5px" }}>
                            send LOI
                          </button>
                        </div>
                        <div></div>
                      </td>

                      <td>
                        <div style={{ paddingBottom: "10px" }}>
                          <th className='col-4 tLeft'><Checkbox type="square" label={ele.check3} onCheck={() => { this.checkedFullRow6(ele.id) }} checked={this.state.selectedArray6.includes(ele.id)} /></th>
                        </div>
                        <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                          <storng>Rate:</storng> $ 4250 Per MT
                          <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px", marginLeft: "5px" }}>L3</span>
                        </span>
                        <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                          <button style={{ padding: "5px 10px", background: "#528aea", color: "white", borderRadius: "5px" }}>
                            send LOI
                          </button>
                        </div>
                        <div></div>
                      </td>

                    </tr>
                  )
                })}


              </tbody>
            </table>))

          }

          <div style={{ paddingTop: "20px", width: "100%", justifyContent: "end", display: "flex" }}>

            <Popup
              trigger={this.state.selectedArray.length > 0 || this.state.selectedArray2.length > 0 || this.state.selectedArray3.length > 0 ?
                (<button
                  className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15"}
                >Preview & Generate Contract
                </button>) : <div></div>
              }
              modal
              contentStyle={contentStyle}
            >
              {close =>

              (this.state.selectedArray.length > 0 && (this.state.selectedArray2.length > 0 || this.state.selectedArray3.length > 0)
                ?

                <div className="modal scroll" style={{ padding: "10px", fontFamily: "Proximanova-Regular" }}>
                  <div style={{ padding: "10px 5px", display: "flex", justifyContent: "end", transform: "translate(10px, -20px)" }}>
                    <a className="chcek-close-button" onClick={close} style={{ border: "5px solid black", padding: "1px 5px", borderRadius: "999px", fontSize: "20px", color: "black" }}>
                      &times;
                    </a>
                  </div>

                  <div style={{ boxShadow: "0 0 27px 4px rgb(69 68 68 / 40%)", padding: "20px" }}>
                    <div onClick={Handlechange} style={{ cursor: "pointer" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        Contract No : 23456666
                        <span>{!this.state.show ? <IoIosArrowDropdown size="1.5em" color="#528aea" style={{ cursor: "pointer" }} /> : <IoIosArrowDropup size="1.5em" color="#528aea" style={{ cursor: "pointer" }} />}</span>
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
                          <p> Cost / PTPK : $ 1430 PTPK<span style={{ background: "green", color: "white", padding: "15px", borderRadius: "99px", marginLeft: "100px" }}>L1</span></p>
                          <p>Cost / MT : $ 4500 per MT</p>
                        </div>

                        <div style={{ display: "block", padding: "10px 10px", background: "blue", color: "white" }}>
                          <p>Total Cost : $ 35,05,000</p>
                          <p> Cost / PTPK : $ 1430 PTPK<span style={{ background: "orange", color: "white", padding: "15px", borderRadius: "99px", marginLeft: "100px" }}>L2</span></p>
                          <p>Cost / MT : $ 4500 per MT</p>
                        </div>

                      </div>


                      {/* HIDE AND SHOW PART DROPDOWN */}


                      {this.state.show && <div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>



                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                              <tr className="br-10">
                                <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                    <g fill="none" fill-rule="nonzero">
                                      <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                    </g>
                                  </svg>Surat</th>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                    <g fill="none" fill-rule="nonzero">
                                      <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                    </g>
                                  </svg>Surat</th>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px" }}>L2</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                <th className='col-3 pl-10 pr-10 tLeft'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 42 44">
                                  <g fill="#FFF" fill-rule="evenodd" stroke-width=".5">
                                    <path d="M1.1 43.731a.41.41 0 0 1-.21 0 .49.49 0 0 1-.24-.66l9.26-19.54a.49.49 0 0 1 .66-.24.5.5 0 0 1 .24.67L1.6 43.491a.48.48 0 0 1-.5.24zM40.42 43.731a.48.48 0 0 1-.45-.28l-9.26-19.49a.5.5 0 0 1 .24-.67.49.49 0 0 1 .66.24l9.26 19.53a.49.49 0 0 1-.27.67.41.41 0 0 1-.18 0z" />
                                    <path d="M32.68 27.441H8.84a.5.5 0 1 1 0-1h23.84a.5.5 0 1 1 0 1zM35.37 33.671H5.85a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5h29.52a.5.5 0 1 1 0 1zM38.6 39.891H2.94a.5.5 0 0 1-.5-.5.51.51 0 0 1 .5-.5H38.6a.5.5 0 1 1 0 1z" />
                                    <path fill-rule="nonzero" d="M31.33 24.241H10.44a2.61 2.61 0 0 1-2.61-2.61V3.341a2.61 2.61 0 0 1 2.61-2.61h20.89a2.61 2.61 0 0 1 2.61 2.61v18.29a2.61 2.61 0 0 1-2.61 2.61zM10.44 1.731c-.89 0-1.61.721-1.61 1.61v18.29c0 .89.72 1.61 1.61 1.61h20.89a1.61 1.61 0 0 0 1.61-1.61V3.341a1.61 1.61 0 0 0-1.61-1.61H10.44z" />
                                    <path d="M33.44 16.381H8.33a.5.5 0 1 1 0-1h25.11a.5.5 0 1 1 0 1z" />
                                    <path d="M20.65 16.381a.5.5 0 0 1-.5-.5V1.231a.5.5 0 1 1 1 0v14.65a.51.51 0 0 1-.5.5z" />
                                    <path fill-rule="nonzero" d="M29.66 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1.045 1.045 0 1 0 0 2.09 1.045 1.045 0 0 0 0-2.09zM11.73 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1 1 0 1 0 .002 2 1 1 0 0 0-.003-2z" />
                                    <path d="M22.6 21.081h-3.66a.5.5 0 1 1 0-1h3.66a.5.5 0 1 1 0 1z" />
                                  </g>
                                </svg>Dhrub</th>
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
                                <th className='col-3 pl-10 pr-10 tLeft'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 42 44">
                                  <g fill="#FFF" fill-rule="evenodd" stroke-width=".5">
                                    <path d="M1.1 43.731a.41.41 0 0 1-.21 0 .49.49 0 0 1-.24-.66l9.26-19.54a.49.49 0 0 1 .66-.24.5.5 0 0 1 .24.67L1.6 43.491a.48.48 0 0 1-.5.24zM40.42 43.731a.48.48 0 0 1-.45-.28l-9.26-19.49a.5.5 0 0 1 .24-.67.49.49 0 0 1 .66.24l9.26 19.53a.49.49 0 0 1-.27.67.41.41 0 0 1-.18 0z" />
                                    <path d="M32.68 27.441H8.84a.5.5 0 1 1 0-1h23.84a.5.5 0 1 1 0 1zM35.37 33.671H5.85a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5h29.52a.5.5 0 1 1 0 1zM38.6 39.891H2.94a.5.5 0 0 1-.5-.5.51.51 0 0 1 .5-.5H38.6a.5.5 0 1 1 0 1z" />
                                    <path fill-rule="nonzero" d="M31.33 24.241H10.44a2.61 2.61 0 0 1-2.61-2.61V3.341a2.61 2.61 0 0 1 2.61-2.61h20.89a2.61 2.61 0 0 1 2.61 2.61v18.29a2.61 2.61 0 0 1-2.61 2.61zM10.44 1.731c-.89 0-1.61.721-1.61 1.61v18.29c0 .89.72 1.61 1.61 1.61h20.89a1.61 1.61 0 0 0 1.61-1.61V3.341a1.61 1.61 0 0 0-1.61-1.61H10.44z" />
                                    <path d="M33.44 16.381H8.33a.5.5 0 1 1 0-1h25.11a.5.5 0 1 1 0 1z" />
                                    <path d="M20.65 16.381a.5.5 0 0 1-.5-.5V1.231a.5.5 0 1 1 1 0v14.65a.51.51 0 0 1-.5.5z" />
                                    <path fill-rule="nonzero" d="M29.66 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1.045 1.045 0 1 0 0 2.09 1.045 1.045 0 0 0 0-2.09zM11.73 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1 1 0 1 0 .002 2 1 1 0 0 0-.003-2z" />
                                    <path d="M22.6 21.081h-3.66a.5.5 0 1 1 0-1h3.66a.5.5 0 1 1 0 1z" />
                                  </g>
                                </svg>Dhrub</th>
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
                                <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                    <g fill="none" fill-rule="nonzero">
                                      <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                    </g>
                                  </svg>Dhrub</th>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                    <g fill="none" fill-rule="nonzero">
                                      <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                    </g>
                                  </svg>Dhrub</th>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                    <storng>Rate:</storng> $ 4500 Per MT
                                    <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                      <div onClick={alterHandleChange} style={{ cursor: "pointer" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          Contract No : 23456666
                          <span>{!this.state.alterShow ? <IoIosArrowDropdown size="1.5em" color="#528aea" style={{ cursor: "pointer" }} /> : <IoIosArrowDropup size="1.5em" color="#528aea" style={{ cursor: "pointer" }} />}</span>
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
                            <p> Cost / PTPK : $ 1430 PTPK<span style={{ background: "green", color: "white", padding: "15px", borderRadius: "99px", marginLeft: "100px" }}>L1</span></p>
                            <p>Cost / MT : $ 4500 per MT</p>
                          </div>

                          <div style={{ display: "block", padding: "10px 10px", background: "blue", color: "white" }}>
                            <p>Total Cost : $ 35,05,000</p>
                            <p> Cost / PTPK : $ 1430 PTPK<span style={{ background: "orange", color: "white", padding: "15px", borderRadius: "99px", marginLeft: "100px" }}>L2</span></p>
                            <p>Cost / MT : $ 4500 per MT</p>
                          </div>

                        </div>


                        {/* HIDE AND SHOW PART DROPDOWN */}


                        {this.state.alterShow && <div>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>



                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                      <g fill="none" fill-rule="nonzero">
                                        <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                        <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                        <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                      </g>
                                    </svg>Surat</th>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                      <g fill="none" fill-rule="nonzero">
                                        <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                        <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                        <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                      </g>
                                    </svg>Surat</th>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px" }}>L2</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <th className='col-3 pl-10 pr-10 tLeft'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 42 44">
                                    <g fill="#FFF" fill-rule="evenodd" stroke-width=".5">
                                      <path d="M1.1 43.731a.41.41 0 0 1-.21 0 .49.49 0 0 1-.24-.66l9.26-19.54a.49.49 0 0 1 .66-.24.5.5 0 0 1 .24.67L1.6 43.491a.48.48 0 0 1-.5.24zM40.42 43.731a.48.48 0 0 1-.45-.28l-9.26-19.49a.5.5 0 0 1 .24-.67.49.49 0 0 1 .66.24l9.26 19.53a.49.49 0 0 1-.27.67.41.41 0 0 1-.18 0z" />
                                      <path d="M32.68 27.441H8.84a.5.5 0 1 1 0-1h23.84a.5.5 0 1 1 0 1zM35.37 33.671H5.85a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5h29.52a.5.5 0 1 1 0 1zM38.6 39.891H2.94a.5.5 0 0 1-.5-.5.51.51 0 0 1 .5-.5H38.6a.5.5 0 1 1 0 1z" />
                                      <path fill-rule="nonzero" d="M31.33 24.241H10.44a2.61 2.61 0 0 1-2.61-2.61V3.341a2.61 2.61 0 0 1 2.61-2.61h20.89a2.61 2.61 0 0 1 2.61 2.61v18.29a2.61 2.61 0 0 1-2.61 2.61zM10.44 1.731c-.89 0-1.61.721-1.61 1.61v18.29c0 .89.72 1.61 1.61 1.61h20.89a1.61 1.61 0 0 0 1.61-1.61V3.341a1.61 1.61 0 0 0-1.61-1.61H10.44z" />
                                      <path d="M33.44 16.381H8.33a.5.5 0 1 1 0-1h25.11a.5.5 0 1 1 0 1z" />
                                      <path d="M20.65 16.381a.5.5 0 0 1-.5-.5V1.231a.5.5 0 1 1 1 0v14.65a.51.51 0 0 1-.5.5z" />
                                      <path fill-rule="nonzero" d="M29.66 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1.045 1.045 0 1 0 0 2.09 1.045 1.045 0 0 0 0-2.09zM11.73 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1 1 0 1 0 .002 2 1 1 0 0 0-.003-2z" />
                                      <path d="M22.6 21.081h-3.66a.5.5 0 1 1 0-1h3.66a.5.5 0 1 1 0 1z" />
                                    </g>
                                  </svg>Dhrub</th>
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
                                  <th className='col-3 pl-10 pr-10 tLeft'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 42 44">
                                    <g fill="#FFF" fill-rule="evenodd" stroke-width=".5">
                                      <path d="M1.1 43.731a.41.41 0 0 1-.21 0 .49.49 0 0 1-.24-.66l9.26-19.54a.49.49 0 0 1 .66-.24.5.5 0 0 1 .24.67L1.6 43.491a.48.48 0 0 1-.5.24zM40.42 43.731a.48.48 0 0 1-.45-.28l-9.26-19.49a.5.5 0 0 1 .24-.67.49.49 0 0 1 .66.24l9.26 19.53a.49.49 0 0 1-.27.67.41.41 0 0 1-.18 0z" />
                                      <path d="M32.68 27.441H8.84a.5.5 0 1 1 0-1h23.84a.5.5 0 1 1 0 1zM35.37 33.671H5.85a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5h29.52a.5.5 0 1 1 0 1zM38.6 39.891H2.94a.5.5 0 0 1-.5-.5.51.51 0 0 1 .5-.5H38.6a.5.5 0 1 1 0 1z" />
                                      <path fill-rule="nonzero" d="M31.33 24.241H10.44a2.61 2.61 0 0 1-2.61-2.61V3.341a2.61 2.61 0 0 1 2.61-2.61h20.89a2.61 2.61 0 0 1 2.61 2.61v18.29a2.61 2.61 0 0 1-2.61 2.61zM10.44 1.731c-.89 0-1.61.721-1.61 1.61v18.29c0 .89.72 1.61 1.61 1.61h20.89a1.61 1.61 0 0 0 1.61-1.61V3.341a1.61 1.61 0 0 0-1.61-1.61H10.44z" />
                                      <path d="M33.44 16.381H8.33a.5.5 0 1 1 0-1h25.11a.5.5 0 1 1 0 1z" />
                                      <path d="M20.65 16.381a.5.5 0 0 1-.5-.5V1.231a.5.5 0 1 1 1 0v14.65a.51.51 0 0 1-.5.5z" />
                                      <path fill-rule="nonzero" d="M29.66 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1.045 1.045 0 1 0 0 2.09 1.045 1.045 0 0 0 0-2.09zM11.73 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1 1 0 1 0 .002 2 1 1 0 0 0-.003-2z" />
                                      <path d="M22.6 21.081h-3.66a.5.5 0 1 1 0-1h3.66a.5.5 0 1 1 0 1z" />
                                    </g>
                                  </svg>Dhrub</th>
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
                                  <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                      <g fill="none" fill-rule="nonzero">
                                        <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                        <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                        <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                      </g>
                                    </svg>Dhrub</th>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                  <th className='col-3 pl-10 pr-10 tLeft' style={{ display: "flex", paddingTop: "10px", gap: "10px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                      <g fill="none" fill-rule="nonzero">
                                        <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                        <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                        <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                      </g>
                                    </svg>Dhrub</th>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                                    <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                      <storng>Rate:</storng> $ 4500 Per MT
                                      <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
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
                :
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


                      <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "20px", width: "100%" }}>

                        <div style={{ display: "flex", flexDirection: "row", padding: "10px 10px", background: "blue", color: "white", gap: "25%", justifyContent: "space-between" }}>
                          <p style={{ alignItems: "start" }}>Total Cost : $ 35,05,000</p>
                          <p style={{ alignItems: "center" }}>Total Cost : $ 35,05,000</p>
                          <p style={{ alignItems: "end" }}>Total Cost : $ 35,05,000</p>
                        </div>

                      </div>
                      {/* HIDE AND SHOW PART DROPDOWN */}


                      <div>

                        <div style={{ width: "100%", gap: "20px" }}>



                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color" style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                              <tr className="br-10" style={{ alignItems: "start" }}>
                                <th className='col-3 pl-10 pr-10 tLeft' style={{ alignItems: "center" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21" style={{ marginRight: "10px" }}>
                                    <g fill="none" fill-rule="nonzero">
                                      <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                      <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                    </g>
                                  </svg>Dhrub</th>
                              </tr>
                              <tr className="br-10" style={{ alignItems: "end" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'>COST / MT : 1200 per MT</th>
                              </tr>
                              <tr className="br-10" style={{ alignItems: "end" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'>Total Cose : $ 30,00,000</th>
                              </tr>
                            </thead>

                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                              {/* FIRST TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="tLeft p-5 pl-10 pr-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  {/* <div> */}
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                    SAP Contract No:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                  </div>
                                  {/* </div> */}

                                  <div>
                                    Rate: $ 200perMT
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* SECOND TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="tLeft p-5 pl-10 pr-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  {/* <div> */}
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                    SAP Contract No:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                  </div>
                                  {/* </div> */}

                                  <div>
                                    Rate: $ 200perMT
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* THIRD TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="tLeft p-5 pl-10 pr-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  {/* <div> */}
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                    SAP Contract No:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                  </div>
                                  {/* </div> */}

                                  <div>
                                    Rate: $ 200perMT
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* FOURTH TABLE  */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="tLeft p-5 pl-10 pr-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  {/* <div> */}
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                    SAP Contract No:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                  </div>
                                  {/* </div> */}

                                  <div>
                                    Rate: $ 200perMT
                                  </div>
                                </td>
                              </tr>

                            </tbody>
                          </table>

                        </div>



                        <div style={{ width: "100%", gap: "20px" }}>



                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px" }}>
                                <tr className="" style={{ display: "flex" }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 42 44">
                                    <g fill="#FFF" fill-rule="evenodd" stroke-width=".5">
                                      <path d="M1.1 43.731a.41.41 0 0 1-.21 0 .49.49 0 0 1-.24-.66l9.26-19.54a.49.49 0 0 1 .66-.24.5.5 0 0 1 .24.67L1.6 43.491a.48.48 0 0 1-.5.24zM40.42 43.731a.48.48 0 0 1-.45-.28l-9.26-19.49a.5.5 0 0 1 .24-.67.49.49 0 0 1 .66.24l9.26 19.53a.49.49 0 0 1-.27.67.41.41 0 0 1-.18 0z" />
                                      <path d="M32.68 27.441H8.84a.5.5 0 1 1 0-1h23.84a.5.5 0 1 1 0 1zM35.37 33.671H5.85a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5h29.52a.5.5 0 1 1 0 1zM38.6 39.891H2.94a.5.5 0 0 1-.5-.5.51.51 0 0 1 .5-.5H38.6a.5.5 0 1 1 0 1z" />
                                      <path fill-rule="nonzero" d="M31.33 24.241H10.44a2.61 2.61 0 0 1-2.61-2.61V3.341a2.61 2.61 0 0 1 2.61-2.61h20.89a2.61 2.61 0 0 1 2.61 2.61v18.29a2.61 2.61 0 0 1-2.61 2.61zM10.44 1.731c-.89 0-1.61.721-1.61 1.61v18.29c0 .89.72 1.61 1.61 1.61h20.89a1.61 1.61 0 0 0 1.61-1.61V3.341a1.61 1.61 0 0 0-1.61-1.61H10.44z" />
                                      <path d="M33.44 16.381H8.33a.5.5 0 1 1 0-1h25.11a.5.5 0 1 1 0 1z" />
                                      <path d="M20.65 16.381a.5.5 0 0 1-.5-.5V1.231a.5.5 0 1 1 1 0v14.65a.51.51 0 0 1-.5.5z" />
                                      <path fill-rule="nonzero" d="M29.66 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1.045 1.045 0 1 0 0 2.09 1.045 1.045 0 0 0 0-2.09zM11.73 21.341a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3.09a1 1 0 1 0 .002 2 1 1 0 0 0-.003-2z" />
                                      <path d="M22.6 21.081h-3.66a.5.5 0 1 1 0-1h3.66a.5.5 0 1 1 0 1z" />
                                    </g>
                                  </svg>
                                  <th className='pl-10 pr-10 tLeft'>Rail Fright</th>
                                </tr>
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft'>COST / MT : $ 1200 per MT</th>
                                </tr>
                                <tr className="br-10">
                                  <th className='col-3 pl-10 pr-10 tLeft'>Total Cost : $ 30,00,00</th>
                                </tr>
                              </div>
                            </thead>
                          </table>


                        </div>

                        <div style={{ width: "100%", gap: "20px" }}>



                          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                            <thead style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px" }} className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
                              <tr className="br-10" style={{ alignItems: "start" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21" style={{ marginRight: "10px" }}>
                                  <g fill="none" fill-rule="nonzero">
                                    <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                    <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                    <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                  </g>
                                </svg>Dhrub</th>
                              </tr>
                              <tr className="br-10" style={{ alignItems: "end" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'>COST / MT : 1200 per MT</th>
                              </tr>
                              <tr className="br-10" style={{ alignItems: "end" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'>Total Cose : $ 30,00,000</th>
                              </tr>
                            </thead>

                            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                              {/* {(vehicleSchedulerDetails || []).map((details, index) => {
          return ( */}
                              {/* FIRST TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="tLeft p-5 pl-10 pr-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  {/* <div> */}
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                    SAP Contract No:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                  </div>
                                  {/* </div> */}

                                  <div>
                                    Rate: $ 200perMT
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* SECOND TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="tLeft p-5 pl-10 pr-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  {/* <div> */}
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                    SAP Contract No:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                  </div>
                                  {/* </div> */}

                                  <div>
                                    Rate: $ 200perMT
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* THIRD TABLE */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="tLeft p-5 pl-10 pr-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  {/* <div> */}
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                    SAP Contract No:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                  </div>
                                  {/* </div> */}

                                  <div>
                                    Rate: $ 200perMT
                                  </div>
                                </td>
                              </tr>

                              <hr />

                              {/* FOURTH TABLE  */}

                              <tr>
                                <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="tLeft p-5 pl-10 pr-10">
                                  <div>
                                    Transporter 1
                                  </div>
                                  {/* <div> */}
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                    SAP Contract No:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>454567</div>
                                  </div>
                                  <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                    <div style={{ fontWeight: "normal", paddingTop: "8px" }}>26 Mar 2022 To 26 Sep 2022</div>
                                  </div>
                                  {/* </div> */}

                                  <div>
                                    Rate: $ 200perMT
                                  </div>
                                </td>
                              </tr>

                            </tbody>
                          </table>

                        </div>






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