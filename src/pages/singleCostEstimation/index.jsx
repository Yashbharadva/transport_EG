import React, { Component, useState } from "react";
import Sticky from "Components/Sticky/index";
import Dropdown from "Components/Dropdown";
import { ReactComponent as Back } from 'Icons/back.svg'
import Checkbox from "Components/Checkbox/index";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import Input from "Components/FormInput/index";


class SingleCostEstimation extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      wagon: "",
      wagonWt: "",
      selectedArray: [],
      selectedArray2: [],
      selectedArray3: [],
      selectedArray4: [],
      selectedArray5: [],
      selectedArray6: [],
      allSelected: true,
      destinationYardFull: [{
        toDestination: "To",
        destinationYard: "Destination Yard"
      }],
      DATARAIL: [],
      values: [
        {
          id: 1,
          rake: "Rake",
          commodityCategory: "Commodity Category",
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
      OriginData: [
        {
          allName: [
            { name1: "Transporters" },
            { name2: "Surveyors" },
            { name3: "Handling Agents" },
            { name4: "Security" }
          ],
          L1: [
            { name1: "Transporter 1", Rate: 4000, SAP: 454567, Contract: "26 Mar To 26 Sep 2022" },
            { name2: "Surveyor 1", Rate: 200, SAP: 454568, Contract: "26 Mar To 26 Sep 2022" },
            { name3: "Handling Agents 1", Rate: 300, SAP: 454569, Contract: "26 Mar To 26 Sep 2022" },
            { name4: "Security 1", Rate: 290, SAP: 454570, Contract: "26 Mar To 26 Sep 2022" }
          ],
          L2: [
            { name2: "Transporter 2", Rate: 4000 },
            { name2: "Surveyor 2", Rate: 200 },
            { name2: "Handling Agents 2", Rate: 300 },
            { name2: "Security 2", Rate: 290 }
          ],
          L3: [
            { name3: "Transporter 3", Rate: 4000 },
            { name3: "Surveyor 3", Rate: 200 },
            { name3: "Handling Agents 3", Rate: 300 },
            { name3: "Security 3", Rate: 290 }
          ],
        }
      ],
      allData: [
        { id: 44, name: "Transporters", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3", Rate: 4500, Rate2: 4000, Rate3: 300, Contract_No: 454567, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 45, name: "Surveyors", check1: "Surveyor 1", check2: "Surveyor 2", check3: "Surveyor 3", Rate: 200, Rate2: 3000, Rate3: 200, Contract_No: 454568, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 46, name: "Handling Agents", check1: "Handling Agents 1", check2: "Handling Agents 2", check3: "Handling Agents 3", Rate: 210, Rate2: 2000, Rate3: 150, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 47, name: "Lashers", check1: "Lashers 1", check2: "Lashers 2", check3: "Lashers 3", Rate: 280, Rate2: 290, Rate3: 300, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 48, name: "Security", check1: "Security 1", check2: "Security 2", check3: "Security 3", Rate: 300, Rate2: 1000, Rate3: 100, Contract_No: 454570, date: "26 Mar 2022 To 26 Sep 2022" }
      ],
      allData2: [
        { id: 44, name: "Transporters", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3", Rate: 4500, Contract_No: 454567, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 45, name: "Surveyors", check1: "Surveyor 1", check2: "Surveyor 2", check3: "Surveyor 3", Rate: 200, Contract_No: 454568, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 46, name: "Handling Agents", check1: "Handling Agents 1", check2: "Handling Agents 2", check3: "Handling Agents 3", Rate: 210, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 47, name: "Lashers", check1: "Lashers 1", check2: "Lashers 2", check3: "Lashers 3", Rate: 280, Rate2: 290, Rate3: 300, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 48, name: "Security", check1: "Security 1", check2: "Security 2", check3: "Security 3", Rate: 300, Contract_No: 454570, date: "26 Mar 2022 To 26 Sep 2022" }
      ],
      allData3: [
        { id: 44, name: "Transporters", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3", Rate: 4500, Contract_No: 454567, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 45, name: "Surveyors", check1: "Surveyor 1", check2: "Surveyor 2", check3: "Surveyor 3", Rate: 200, Contract_No: 454568, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 46, name: "Handling Agents", check1: "Handling Agents 1", check2: "Handling Agents 2", check3: "Handling Agents 3", Rate: 210, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 47, name: "Lashers", check1: "Lashers 1", check2: "Lashers 2", check3: "Lashers 3", Rate: 280, Rate2: 290, Rate3: 300, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 48, name: "Security", check1: "Security 1", check2: "Security 2", check3: "Security 3", Rate: 300, Contract_No: 454570, date: "26 Mar 2022 To 26 Sep 2022" }
      ],
      allData4: [
        { id: 44, name: "Transporters", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3", Rate: 4500, Contract_No: 454567, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 45, name: "Surveyors", check1: "Surveyor 1", check2: "Surveyor 2", check3: "Surveyor 3", Rate: 200, Contract_No: 454568, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 46, name: "Handling Agents", check1: "Handling Agents 1", check2: "Handling Agents 2", check3: "Handling Agents 3", Rate: 210, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 47, name: "Lashers", check1: "Lashers 1", check2: "Lashers 2", check3: "Lashers 3", Rate: 280, Rate2: 290, Rate3: 300, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 48, name: "Security", check1: "Security 1", check2: "Security 2", check3: "Security 3", Rate: 300, Contract_No: 454570, date: "26 Mar 2022 To 26 Sep 2022" }
      ],
      allData5: [
        { id: 44, name: "Transporters", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3", Rate: 4500, Contract_No: 454567, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 45, name: "Surveyors", check1: "Surveyor 1", check2: "Surveyor 2", check3: "Surveyor 3", Rate: 200, Contract_No: 454568, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 46, name: "Handling Agents", check1: "Handling Agents 1", check2: "Handling Agents 2", check3: "Handling Agents 3", Rate: 210, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 47, name: "Lashers", check1: "Lashers 1", check2: "Lashers 2", check3: "Lashers 3", Rate: 280, Rate2: 290, Rate3: 300, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 48, name: "Security", check1: "Security 1", check2: "Security 2", check3: "Security 3", Rate: 300, Contract_No: 454570, date: "26 Mar 2022 To 26 Sep 2022" }
      ],
      allData6: [
        { id: 44, name: "Transporters", check1: "Transporter 1", check2: "Transporter 2", check3: "Transporter 3", Rate: 4500, Contract_No: 454567, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 45, name: "Surveyors", check1: "Surveyor 1", check2: "Surveyor 2", check3: "Surveyor 3", Rate: 200, Contract_No: 454568, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 46, name: "Handling Agents", check1: "Handling Agents 1", check2: "Handling Agents 2", check3: "Handling Agents 3", Rate: 210, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 47, name: "Lashers", check1: "Lashers 1", check2: "Lashers 2", check3: "Lashers 3", Rate: 280, Rate2: 290, Rate3: 300, Contract_No: 454569, date: "26 Mar 2022 To 26 Sep 2022" },
        { id: 48, name: "Security", check1: "Security 1", check2: "Security 2", check3: "Security 3", Rate: 300, Contract_No: 454570, date: "26 Mar 2022 To 26 Sep 2022" }
      ],
      routeCode: [],
      from: [],
      to: [],
      originYard: [],
      destination_Yard: [],
      rakeOf: [],
      commodity_cato: [],
      commodity_N: [],
      WagonType: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInput2Change = this.handleInput2Change.bind(this);
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
        destinationYard: "Destination Yard",
        toDestination: "To"
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

  checkedFullRow = (ele) => {
    const { selectedArray } = this.state;
    const temp = [...selectedArray]
    if (temp.find(obj => obj.id === ele.id)) {
      temp.splice(temp.findIndex(obj => obj.id === ele.id), 1)
      this.setState({ selectedArray: temp })
    } else {
      temp.push(ele)
      this.setState({ selectedArray: temp })
    }
  }

  checkedFullRow2 = (ele) => {
    const { selectedArray2 } = this.state;
    const temp = [...selectedArray2]
    if (temp.find(obj => obj.id === ele.id)) {
      temp.splice(temp.findIndex(obj => obj.id === ele.id), 1)
      this.setState({ selectedArray2: temp })
    } else {
      temp.push(ele)
      this.setState({ selectedArray2: temp })
    }
  }

  checkedFullRow3 = (ele) => {
    const { selectedArray3 } = this.state;
    const temp = [...selectedArray3]
    if (temp.find(obj => obj.id === ele.id)) {
      temp.splice(temp.findIndex(obj => obj.id === ele.id), 1)
      this.setState({ selectedArray3: temp })
    } else {
      temp.push(ele)
      this.setState({ selectedArray3: temp })
    }
  }

  checkedFullRow4 = (ele) => {
    const { selectedArray4 } = this.state;
    const temp = [...selectedArray4]
    if (temp.find(obj => obj.id === ele.id)) {
      temp.splice(temp.findIndex(obj => obj.id === ele.id), 1)
      this.setState({ selectedArray4: temp })
    } else {
      temp.push(ele)
      this.setState({ selectedArray4: temp })
    }
  }

  checkedFullRow5 = (ele) => {
    const { selectedArray5 } = this.state;
    const temp = [...selectedArray5]
    if (temp.find(obj => obj.id === ele.id)) {
      temp.splice(temp.findIndex(obj => obj.id === ele.id), 1)
      this.setState({ selectedArray5: temp })
    } else {
      temp.push(ele)
      this.setState({ selectedArray5: temp })
    }
  }

  checkedFullRow6 = (ele) => {
    const { selectedArray6 } = this.state;
    const temp = [...selectedArray6]
    if (temp.find(obj => obj.id === ele.id)) {
      temp.splice(temp.findIndex(obj => obj.id === ele.id), 1)
      this.setState({ selectedArray6: temp })
    } else {
      temp.push(ele)
      this.setState({ selectedArray6: temp })
    }
  }

  selectAllScheduleRecords = () => {
    const { allData } = this.state;
    const { selectedArray } = this.state
    let selectedSchedulesCopy = [...selectedArray]
    const value = (selectedSchedulesCopy.length !== allData.length);

    if (value) {
      (allData || []).map((obj) => {
        if (!selectedSchedulesCopy.find(ele => ele.id === obj.id)) {
          selectedSchedulesCopy.push(obj);
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
        if (!selectedSchedulesCopy.find(ab => ab.id === obj.id)) {
          selectedSchedulesCopy.push(obj);
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
        if (!selectedSchedulesCopy.find(abc => abc.id === obj.id)) {
          selectedSchedulesCopy.push(obj);
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
        if (!selectedSchedulesCopy.find(abc => abc.id === obj.id)) {
          selectedSchedulesCopy.push(obj);
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
        if (!selectedSchedulesCopy.find(abc => abc.id === obj.id)) {
          selectedSchedulesCopy.push(obj);
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
        if (!selectedSchedulesCopy.find(abc => abc.id === obj.id)) {
          selectedSchedulesCopy.push(obj);
        }
      })
    } else {
      selectedSchedulesCopy = [];
    }
    this.setState({ selectedArray6: selectedSchedulesCopy });
  }

  selectRouteCode = (item) => {
    this.setState({
      routeCode: item
    })
  }

  selectFrom = (item) => {
    this.setState({
      from: item
    })
  }

  selectTo = (item) => {
    this.setState({
      to: item
    })
  }

  selectOriginYard = (item) => {
    this.setState({
      originYard: item
    })
  }

  selectDestinationYard = (item) => {
    this.setState({
      destination_Yard: item
    })
  }

  selectRake = (item) => {
    this.setState({
      rakeOf: item
    })
  }

  selectCommodityCat = (item) => {
    this.setState({
      commodity_cato: item
    })
  }

  selectCommodityName = (item) => {
    this.setState({
      commodity_N: item
    })
  }

  selectWagonType = (item) => {
    this.setState({
      WagonType: item
    })
  }

  handleInputChange(event) {
    this.setState({ wagon: event.target.value2 })
  }

  handleInput2Change(event) {
    this.setState({ wagonWt: event.target.value2 })
  }

  handleRefresh = () => {
    close();
    window.location.reload(false);
  }

  pageChange = () => {
    this.props.history.location('/singleCostEstimation');
    console.log("kbhjkljbsdjklfshkdjlfhlkjs");
  }



  render() {
    var Handlechange = e => {
      this.setState({ show: !this.state.show });
    }

    const contentStyle = {
      width: "90%",
      height: "auto",
      maxHeight: "80%",
      // overflowY: "scroll",
      background: "none",
      border: "none"
    }

    let total = parseInt(this.state.selectedArray.map((a) => a.Rate) + this.state.selectedArray.map((a) => a.Rate2) + this.state.selectedArray.map((a) => a.Rate3));

    const temp = [{ id: 1, label: "123456" }, { id: 2, label: "123457" }, { id: 3, label: "123458" }, { id: 4, label: "123459" }, { id: 5, label: "123460" }];

    const From = [{ id: 1, label: "Surat" }, { id: 2, label: "Bharuch" }, { id: 3, label: "Vadodara" }, { id: 4, label: "Anand" }, { id: 5, label: "Ahmedabad" }];

    const To = [{ id: 1, label: "Surat" }, { id: 2, label: "Bharuch" }, { id: 3, label: "Vadodara" }, { id: 4, label: "Anand" }, { id: 5, label: "Ahmedabad" }];

    const origin_yard = [{ id: 1, label: "Teeka" }, { id: 2, label: "Silva" }, { id: 3, label: "Namor" }, { id: 4, label: "Waild" }, { id: 5, label: "Anna" }];

    const destination_yard = [{ id: 1, label: "Sunar" }, { id: 2, label: "Aqua" }, { id: 3, label: "Dilon" }, { id: 4, label: "Max" }, { id: 5, label: "Vidar" }];

    const Rake = [{ id: 1, label: "Empty" }, { id: 2, label: "Half" }, { id: 3, label: "Full" }];

    const Commodity_cat = [{ id: 1, label: "Fual" }, { id: 2, label: "Oil" }, { id: 3, label: "Sugar" }, { id: 4, label: "Salt" }, { id: 5, label: "Milk" }];

    const Commodity_name = [{ id: 1, label: "Refined" }, { id: 2, label: "Non-Refined" }, { id: 3, label: "All Refined" }, { id: 4, label: "All Non-Refined" }, { id: 5, label: "All Refined and Non-Refined" }];

    const Wagon_type = [{ id: 1, label: "Open Wagon" }, { id: 2, label: "Covered-Wagon" }, { id: 3, label: "Tank Wagon" }, { id: 4, label: "Flat Wagon" }, { id: 5, label: "Brake van" }];

    return (

      <Sticky>
        <div className="main-div" style={{ maxWidth: "2000px" }}>

          <div className="arrow-text" style={{ cursor: "pointer" }}>
            <div onClick={() => {
              this.props.history.push('/viewGeneratedContracts')
            }}>
              <Back className="fill-theme mr-5" />
            </div>
            <div className="header-text" style={{ color: "#528aea" }}>
              Back
            </div>
          </div>

          <div className="back-light-blue">

            <div className="input-fields">
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "black", fontWeight: "700" }}>
                  Route Code
                </div>
                <Dropdown
                  items={temp}
                  label="Route Code"
                  displayKey="label"
                  onSelect={this.selectRouteCode}
                  className="mb-0 wt-250 ht-30"
                  searchEnabled={true}
                />
              </div>
              <hr width="1" size="100" />
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "black", fontWeight: "700" }}>
                  From
                </div>
                <Dropdown
                  items={From}
                  label="From"
                  displayKey="label"
                  onSelect={this.selectFrom}
                  className="mb-0 wt-250 ht-30"
                  searchEnabled={true}
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "black", fontWeight: "700" }}>
                  Origin Yard
                </div>
                <Dropdown
                  items={origin_yard}
                  label="Origin Yard"
                  displayKey="label"
                  selectedItem={null}
                  onSelect={this.selectOriginYard}
                  className="mb-0 wt-250 ht-30"
                  searchEnabled={true}
                />
              </div>
              <hr width="1" size="100" />
              <div className="fs-14 header-dark-color mr-10">
                {this.state.destinationYardFull.map((ele, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center" }}>
                    <div className="fs-14 header-dark-color mr-10">
                      <div style={{ paddingBottom: "5px", color: "black", fontWeight: "700" }} key={idx}>
                        {ele.toDestination}
                      </div>
                      <Dropdown
                        items={To}
                        label={ele.toDestination}
                        displayKey="label"
                        selectedItem={null}
                        onSelect={this.selectTo}
                        className="mb-0 wt-250 ht-30"
                        searchEnabled={true}
                      />
                    </div>
                    <div className="fs-14 header-dark-color mr-10">
                      <div style={{ paddingBottom: "5px", color: "black", fontWeight: "700" }} key={idx}>
                        {ele.destinationYard}
                      </div>
                      <Dropdown
                        items={destination_yard}
                        label={ele.destinationYard}
                        displayKey="label"
                        selectedItem={null}
                        onSelect={this.selectDestinationYard}
                        className="mb-0 wt-250 ht-30"
                        searchEnabled={true}
                      />
                    </div>

                    <div>
                      {
                        idx ?
                          <div className="fs-14 header-dark-color mr-10 cursor-pointer" style={{ display: "flex", alignItems: "center", paddingTop: "25px", gap: "5px" }}>
                            <br></br>
                            <br></br>
                            <div onClick={() => this.addDestinationYard()} style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid #528aea", padding: "10px", borderRadius: "5px", color: "#528aea", cursor: "pointer" }}>
                              <div>
                                <AiOutlinePlus />
                              </div>
                              <div>DESTINATION</div>
                            </div>
                            <AiOutlineCloseCircle style={{ width: "25px", height: "25px", color: "#528aea", cursor: "pointer" }} onClick={() => this.removeDestionationYard(idx)} />
                          </div>
                          :
                          <div className="fs-14 header-dark-color cursor-pointer">
                            <br></br>
                            <br></br>
                            <div onClick={() => this.addDestinationYard()} style={{ display: "flex", alignItems: "center", gap: "5px", border: "1px solid #528aea", padding: "10px", borderRadius: "5px", color: "#528aea", cursor: "pointer" }}>
                              <div>
                                <AiOutlinePlus />
                              </div>
                              <div>DESTINATION</div>
                            </div>
                          </div>
                      }
                    </div>
                  </div>
                ))}
              </div>
              {/* <button
                className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15 mt-20 bg-blue"}
              >Search</button> */}
            </div>



            <hr width="98%" />


            {/* ADD FULL ROW ON PLUS BUTTON */}

            <div style={{ display: "flex", justifyContent: "end", padding: "5px 35px 15px 0px", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "center", paddingRight: "20px", border: "1px solid #528aea", width: "400px", alignItems: "center", padding: "8px 20px", backgroundColor: "#528aea", fontWeight: "700", color: "white", borderRadius: "5px" }}>Search Route</div>
            </div>


          </div>

          {/* TABLE SURAT */}

          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }
          }>
            <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
              <tr className="br-10">

                <th className=''>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ paddingLeft: "5px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                        <g fill="none" fill-rule="nonzero">
                          <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                          <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                          <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                        </g>
                      </svg>
                    </div>
                    <span>
                      {this.state.originYard}
                    </span>
                  </div>
                </th>

                <th className='col-4 tLeft'><Checkbox type="square" label="L1" checked={this.state.selectedArray.length === this.state.allData.length} onCheck={() => { this.selectAllScheduleRecords() }} /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L2" checked={this.state.selectedArray2.length === this.state.allData2.length} onCheck={() => { this.selectAllScheduleRecords2() }} /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L3" checked={this.state.selectedArray3.length === this.state.allData3.length} onCheck={() => { this.selectAllScheduleRecords3() }} /></th>
              </tr>
            </thead>


            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
              {this.state.allData.map((ele, idx) => {
                return (
                  <tr key={idx} >

                    <td className="tLeft p-5 pl-10  master-contract-font-color last-chil      v dddd" style={{ borderBottom: "1px solid black" }}>
                      {ele.name}
                    </td>

                    <td style={{ paddingTop: "20px", borderBottom: "1px solid black" }}>
                      <div>
                        <th className='col-4 tLeft' key={idx}>
                          <Checkbox type="square" label={ele.check1} onCheck={() => { this.checkedFullRow(ele) }} checked={this.state.selectedArray.find(obj => obj.id === ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px", alignItems: "center" }}>
                        <storng>Rate:</storng> $ {ele.Rate} Per MT
                        <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
                      </span>

                      <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                        <div style={{ fontSize: "12px", fontWeight: "800" }}>
                          SAP Contract No:
                          <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                        </div>
                        <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                          <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                        </div>
                      </div>
                    </td>

                    <td style={{ color: "rgb(164, 164, 164)", borderBottom: "1px solid black" }}>
                      <div style={{ paddingBottom: "10px" }}>
                        <th className='col-4 tLeft'><Checkbox type="square" label={ele.check2} onCheck={() => { this.checkedFullRow2(ele) }} checked={this.state.selectedArray2.find(obj => obj.id === ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                        <storng>Rate:</storng> $ {ele.Rate2} Per MT
                        <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px", marginLeft: "5px" }}>L2</span>
                      </span>
                      <div style={{ paddingLeft: "20px", paddingTop: "10px", paddingBottom: "10px" }}>

                        <button style={{ padding: "5px 10px", background: "#528aea", color: "white", borderRadius: "5px" }}>
                          send LOI
                        </button>
                      </div>
                      <div></div>
                    </td>

                    <td style={{ color: "rgb(164, 164, 164)", borderBottom: "1px solid black" }}>
                      <div style={{ paddingBottom: "10px" }}>
                        <th className='col-4 tLeft'><Checkbox type="square" label={ele.check3} onCheck={() => { this.checkedFullRow3(ele) }} checked={this.state.selectedArray3.find(obj => obj.id === ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                        <storng>Rate:</storng> $ {ele.Rate3} Per MT
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

          {/* {this.state.values.map((element, index) => (
            <div>
              <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }} key={index}>
                <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                  <tr className="br-10">
                    <th className=''>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ paddingLeft: "5px" }}>
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
                        </div>
                        <span>Rail Freight For Commodity : {this.state.commodity_cato}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">

                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }} key={element.id}>
                    <div style={{ width: "50%" }}>
                      <div style={{ padding: "10px" }}>
                        <div style={{ border: "1px solid black", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "15px" }}>
                          <div label style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            From:
                            <span style={{ color: "black" }}>
                              {this.state.from}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            To:
                            <span style={{ color: "black" }}>
                              {this.state.to}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            Origin Yard:
                            <span style={{ color: "black" }}>
                              {this.state.originYard}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            Destination Yard:
                            <span style={{ color: "black" }}>
                              {this.state.destination_Yard}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div style={{ padding: "10px" }}>
                        <div style={{ border: "1px solid black", display: "grid", gridTemplateColumns: "1fr 1fr", padding: "15px" }}>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            Commodity:
                            <span style={{ color: "black" }}>
                              {this.state.commodity_cato}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            Commodity Type:
                            <span style={{ color: "black" }}>
                              {this.state.commodity_N}
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div style={{ width: "50%" }}>

                      <div style={{ padding: "10px" }}>
                        <div style={{ border: "1px solid black", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "15px" }}>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            Wagon Type:
                            <span style={{ color: "black" }}>
                              {this.state.WagonType}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            Rake Type:
                            <span style={{ color: "black" }}>
                              {this.state.rakeOf}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            No of Wagons:
                            <span style={{ color: "black" }}>
                              {this.state.wagon}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            Loadable Weight:
                            <span style={{ color: "black" }}>
                              {this.state.wagonWt} per MT Wagon
                            </span>
                          </div>
                        </div>
                      </div>

                      <div style={{ padding: "10px" }}>
                        <div style={{ border: "1px solid black", display: "grid", gridTemplateColumns: "1fr 1fr", padding: "15px" }}>
                          <div style={{ display: "flex", flexDirection: "column", color: "rgb(164, 164, 164)" }}>
                            Total Cost:
                            <span style={{ color: "black" }}>
                              230880
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid black", paddingLeft: "20px", color: "rgb(164, 164, 164)" }}>
                            Total Cost:
                            <span style={{ color: "black" }}>
                              230880
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          )
          )} */}

          {/* TABLE VADODARA */}

          {this.state.destinationYardFull.map((ele, idx) =>
          (<table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
              <tr className="br-10">
                <th className=''>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ paddingLeft: "5px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                        <g fill="none" fill-rule="nonzero">
                          <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                          <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                          <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                        </g>
                      </svg>
                    </div>
                    <span>{this.state.to}</span>
                  </div></th>

                <th className='col-4 tLeft'><Checkbox type="square" label="L1" checked={this.state.selectedArray4.length === this.state.allData4.length} onCheck={() => { this.selectAllScheduleRecords4() }} /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L2" checked={this.state.selectedArray5.length === this.state.allData5.length} onCheck={() => { this.selectAllScheduleRecords5() }} /></th>
                <th className='col-4 tLeft'><Checkbox type="square" label="L3" checked={this.state.selectedArray6.length === this.state.allData6.length} onCheck={() => { this.selectAllScheduleRecords6() }} /></th>
              </tr>
            </thead>


            <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
              {/* FIRST TABLE */}

              {this.state.allData.filter((e, i) => i != 0).map((ele, idx) => {
                return (
                  <tr key={idx}>
                    <td style={{ borderRight: "0px solid" }} className="tLeft p-5 pl-10  master-contract-font-color">
                      {ele.name}
                    </td>
                    <td style={{ paddingTop: "20px" }}>
                      <div>
                        <th className='col-4 tLeft' key={idx}><Checkbox type="square" label={ele.check1} onCheck={() => { this.checkedFullRow4(ele) }} checked={this.state.selectedArray4.find(obj => obj.id === ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", display: "flex", gap: "20px", alignItems: "center" }}>
                        <storng>Rate:</storng> $ {ele.Rate} Per MT
                        <div style={{ border: "1px solid green", background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</div>
                      </span>
                      <div style={{ display: "flex", paddingLeft: "20px", paddingTop: "10px", gap: "20px" }}>
                        <div style={{ fontSize: "12px", fontWeight: "800" }}>
                          SAP Contract No:
                          <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                        </div>
                        <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                          <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div style={{ paddingBottom: "10px" }}>
                        <th className='col-4 tLeft'><Checkbox type="square" label={ele.check2} onCheck={() => { this.checkedFullRow5(ele) }} checked={this.state.selectedArray5.find(obj => obj.id === ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                        <storng>Rate:</storng> $ {ele.Rate2} Per MT
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
                        <th className='col-4 tLeft'><Checkbox type="square" label={ele.check3} onCheck={() => { this.checkedFullRow6(ele) }} checked={this.state.selectedArray6.find(obj => obj.id === ele.id)} /></th>
                      </div>
                      <span style={{ paddingTop: "10px", paddingLeft: "20px", fontSize: "15px" }}>
                        <storng>Rate:</storng> $ {ele.Rate3} Per MT
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
          </table>))}


          <div style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>

            <div style={{ paddingTop: "20px", justifyContent: "end" }}>
              <Popup
                trigger={
                  ((this.state.selectedArray.length > 0 && this.state.selectedArray4.length > 0) || (this.state.selectedArray2.length > 0 && this.state.selectedArray3.length > 0)) || (this.state.selectedArray.length > 0 && this.state.selectedArray3.length > 0)
                    ?
                    (<button style={{ border: "1px solid #528aea", color: "#528aea" }}
                      className={" wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 ml-15"}
                    >Check Cost Estimation
                    </button>) : <div></div>
                }
                modal
                contentStyle={contentStyle}
              >
                {close =>
                  <>
                    <div className="modal scroll" style={{ padding: "10px", fontFamily: "Proximanova-Regular", height: "500px" }}>
                      <div style={{ padding: "10px 5px", display: "flex", justifyContent: "end", transform: "translate(5px, 5px)", color: "white", cursor: "pointer" }}>
                        <AiOutlineCloseCircle size="2em" onClick={this.handleRefresh} />
                      </div>

                      <div style={{ background: "white", padding: "20px", height: "500px", overflowY: "scroll" }}>
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "800", fontSize: "20px" }}>
                            Enter Commodity & Rake Details
                          </div>
                          <hr />
                        </div>

                        {/* HIDE AND SHOW PART DROPDOWN */}
                        <div>
                          <div style={{ width: "100%", gap: "20px" }}>
                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px", overflowY: "scroll" }}>
                              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color" style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                                <tr className="br-10" style={{ alignItems: "start" }}>
                                  <th className=''>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                      <div style={{ paddingLeft: "5px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                          <g fill="none" fill-rule="nonzero">
                                            <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                            <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                            <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                          </g>
                                        </svg>
                                      </div>
                                      <span>{this.state.destination_Yard}</span>
                                    </div>
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <td style={{ padding: "20px" }}>
                                    {this.state.values.map((element, index) => (
                                      <div className="input-fields" key={element.id} style={{ display: "flex", marginBottom: "15px" }}>
                                        <div className="fs-14 header-dark-color mr-10">
                                          <div style={{ paddingBottom: "5px", color: "blue", fontWeight: "700" }}>
                                            {element.commodityCategory}
                                          </div>
                                          <Dropdown
                                            items={Commodity_cat}
                                            label="Commodity Category"
                                            displayKey="label"
                                            selectedItem={null}
                                            onSelect={this.selectCommodityCat}
                                            className="mb-0 wt-350 ht-30 wd-350"
                                            searchEnabled={true}
                                          />
                                        </div>
                                        <div className="fs-14 header-dark-color mr-10">
                                          <div style={{ paddingBottom: "5px", color: "blue", fontWeight: "700" }}>
                                            {element.commodityName}
                                          </div>
                                          <Dropdown
                                            items={Commodity_name}
                                            label="Commodity Name"
                                            displayKey="label"
                                            selectedItem={null}
                                            onSelect={this.selectCommodityName}
                                            className="mb-0 wt-350 ht-30 wd-350"
                                            searchEnabled={true}
                                          />
                                        </div>
                                        <div className="fs-14 header-dark-color mr-10">
                                          <div style={{ paddingBottom: "5px", color: "blue", fontWeight: "700" }}>
                                            {element.rake}
                                          </div>
                                          <Dropdown
                                            items={Rake}
                                            label="Full Rake"
                                            displayKey="label"
                                            onSelect={this.selectRake}
                                            className="mb-0 wt-350 ht-30"
                                            searchEnabled={true}
                                          />
                                        </div>
                                        <div className="fs-14 header-dark-color mr-10">
                                          <div style={{ paddingBottom: "5px", color: "blue", fontWeight: "700" }}>
                                            {element.typeWagon}
                                          </div>
                                          <Dropdown
                                            items={Wagon_type}
                                            label="BCN"
                                            displayKey="label"
                                            selectedItem={null}
                                            onSelect={this.selectWagonType}
                                            className="wt-180 mb-0 wd-200 ht-30"
                                            searchEnabled={true}
                                          />
                                        </div>
                                        <div className="fs-14 header-dark-color mr-10">
                                          <div style={{ paddingBottom: "5px", color: "blue", fontWeight: "700" }}>
                                            {element.numberWagonn}
                                          </div>
                                          <Input
                                            type="number"
                                            value={this.state.wagon}
                                            onChange={this.handleInputChange}
                                            className="mb-0 wt-150 ht-30 wd-100"
                                            style={{ height: "36px", background: "white", borderRadius: "5px", display: "flex", alignItems: "center", border: "1px solid #528aea" }}
                                          />
                                        </div>
                                        <div className="fs-14 header-dark-color mr-10">
                                          <div style={{ paddingBottom: "5px", color: "blue", fontWeight: "700" }}>
                                            {element.weightWagon}
                                          </div>
                                          <Input
                                            type="number"
                                            value={this.state.wagonWt}
                                            onChange={this.handleInput2Change}
                                            className="mb-0 wt-150 ht-30 wd-100"
                                            style={{ height: "36px", background: "white", borderRadius: "5px", border: "1px solid #528aea" }}
                                          />
                                        </div>
                                        {
                                          index ?
                                            <div className="fs-14 header-dark-color cursor-pointer">
                                              <br></br>
                                              <br></br>
                                              <AiOutlineCloseCircle style={{ width: "25px", height: "25px", color: "#528aea", cursor: "pointer" }} onClick={() => this.removeFields(index)} />
                                              {/* <AiOutlinePlusCircle style={{ width: "25px", height: "25px", color: "#528aea", cursor: "pointer" }} onClick={() => this.addFields()} /> */}
                                              
                                            </div>
                                            :
                                            <div className="fs-14 header-dark-color cursor-pointer">
                                              <br></br>
                                              <br></br>
                                              {/* <AiOutlineCloseCircle style={{ width: "25px", height: "25px", color: "#528aea", cursor: "pointer" }} onClick={() => this.removeFields(index)} /> */}
                                              <AiOutlinePlusCircle style={{ width: "25px", height: "25px", color: "#528aea", cursor: "pointer" }} onClick={() => this.addFields()} />
                                              
                                            </div>
                                        }
                                      </div>
                                    ))
                                    }
                                  </td>
                                </tr>

                              </tbody>

                            </table>
                            <div className="actions" style={{ justifyContent: "end", padding: "20px", display: "flex" }}>
                              <button
                                style={{ border: "1px solid #528aea", color: "#528aea" }}
                                className={"wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 ml-15"}
                                onClick={this.handleRefresh}
                              >Cancel
                              </button>
                              <button 
                              onClick={() => {this.props.history.push('/singleCostEstimation')}}
                                  className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15"}
                                >Check Cost Estimationnnnnnnn
                                </button>
                             
                            </div>
                          </div>
                        </div>



                      </div>




                    </div>
                  </>
                }
              </Popup>
            </div>

            <div style={{ paddingTop: "20px", justifyContent: "end" }}>
              <Popup
                trigger={
                  ((this.state.selectedArray.length > 0 && this.state.selectedArray4.length > 0) || (this.state.selectedArray2.length > 0 && this.state.selectedArray3.length > 0)) || (this.state.selectedArray.length > 0 && this.state.selectedArray3.length > 0)
                    ?
                    (<button
                      className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15"}
                    >Preview & Generate Contract
                    </button>) : <div></div>
                }
                modal
                contentStyle={contentStyle}
              >
                {close =>

                ((this.state.selectedArray.length > 0 || this.state.selectedArray4.length > 0 || this.state.selectedArray2.length > 0 || this.state.selectedArray3.length > 0) && ((this.state.selectedArray2.length > 0 || this.state.selectedArray3.length > 0) || (this.state.selectedArray5.length > 0 || this.state.selectedArray6.length > 0)) ?

                  <div className="modal scroll" style={{ padding: "10px", fontFamily: "Proximanova-Regular" }}>
                    <div style={{ padding: "10px 5px", display: "flex", justifyContent: "end", transform: "translate(10px, -20px)" }}>
                      <a className="chcek-close-button" onClick={this.handleRefresh} style={{ border: "5px solid black", padding: "1px 5px", borderRadius: "999px", fontSize: "20px", color: "black" }}>
                        &times;
                      </a>
                    </div>

                    <div style={{ boxShadow: "0 0 27px 4px rgb(69 68 68 / 40%)", padding: "20px" }}>
                      <div onClick={Handlechange} style={{ cursor: "pointer" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "800", fontSize: "20px" }}>
                          Contract No : 23456666
                          <span>{!this.state.show ? <IoIosArrowDropdown size="1.5em" color="#528aea" style={{ cursor: "pointer" }} /> : <IoIosArrowDropup size="1.5em" color="#528aea" style={{ cursor: "pointer" }} />}</span>
                        </div>
                        <hr />
                      </div>

                      <div style={{ padding: "10px 0px", width: "50%" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>

                          <div style={{ fontWeight: "800" }}>Route Code:</div>
                          <div style={{ fontWeight: "800" }}>From:</div>
                          <div style={{ fontWeight: "800" }}>To:</div>
                          <div style={{ fontWeight: "800" }}>Origin Yard:</div>
                          <div style={{ fontWeight: "800" }}>Destination Yard:</div>

                          <span className="span">{this.state.routeCode}</span>
                          <span className="span">{this.state.from}</span>
                          <span className="span">{this.state.to}</span>
                          <span className="span">{this.state.originYard}</span>
                          <span className="span">{this.state.destination_Yard}</span>
                        </div>
                      </div>

                      <div style={{ padding: "10px 0px", width: "100%" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>

                          <div style={{ fontWeight: "800" }}>Rake:</div>
                          <div style={{ fontWeight: "800" }}>Commodity Category:</div>
                          <div style={{ fontWeight: "800" }}>Commodity Name:</div>
                          <div style={{ fontWeight: "800" }}>Type of Wagon:</div>
                          <div style={{ fontWeight: "800" }}>No of Wagon:</div>
                          <div style={{ fontWeight: "800" }}>Wagon Wt:</div>

                          <span className="span">{this.state.rakeOf}</span>
                          <span className="span">{this.state.commodity_cato}</span>
                          <span className="span">{this.state.commodity_N}</span>
                          <span className="span">{this.state.WagonType}</span>
                          <span className="span">{this.state.wagon}</span>
                          <span className="span">{this.state.wagonWt} per MT Wagon</span>
                        </div>
                      </div>

                      <div style={{ padding: "20px 0" }}>


                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", width: "50%" }}>

                          <div style={{ display: "block", padding: "10px 10px", background: "blue", color: "white", fontWeight: "700" }}>
                            <p>Total Cost : $ 35,05,000</p>
                            <p> Cost / PTPK : $ 1430 PTPK<span style={{ background: "green", color: "white", padding: "15px", borderRadius: "99px", marginLeft: "100px" }}>L1</span></p>
                            <p>Cost / MT : $ 4500 per MT</p>
                          </div>

                          <div style={{ display: "block", padding: "10px 10px", background: "blue", color: "white", fontWeight: "700" }}>
                            <p>Total Cost : $ 35,05,000</p>
                            <p> Cost / PTPK : $ 1430 PTPK<span style={{ background: "orange", color: "white", padding: "15px", borderRadius: "99px", marginLeft: "100px" }}>L2</span></p>
                            <p>Cost / MT : $ 4500 per MT</p>
                          </div>

                        </div>


                        {/* HIDE AND SHOW PART DROPDOWN */}


                        {this.state.show &&
                          <div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px", height: "auto" }}>

                              <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px", height: "10px" }}>
                                <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "10px" }}>
                                  <tr className="br-10">
                                    <th className=''>
                                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <div style={{ paddingLeft: "5px" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                            <g fill="none" fill-rule="nonzero">
                                              <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                              <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                              <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                            </g>
                                          </svg>
                                        </div>
                                        <span>{this.state.from}</span>
                                      </div>
                                    </th>
                                    {/* <th>$ 8200</th> */}
                                  </tr>
                                  <tr>$ 8200</tr>
                                </thead>
                                <tbody style={{ padding: "10px" }} className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">


                                  {this.state.selectedArray.map((ele) => {
                                    console.log(ele.Rate);
                                    return (
                                      <tr>
                                        <td style={{ borderRight: "0px solid", paddingTop: "10px", borderBottom: "1px solid black" }} className="tLeft p-5 pl-10">
                                          <div>
                                            {ele.check1}
                                          </div>
                                          <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                            <storng>Rate:</storng> $ {ele.Rate} Per MT
                                            <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
                                          </span>

                                          <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                              SAP Contract No:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                                            </div>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    )
                                  })}

                                </tbody>
                              </table>

                              <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px", height: "10px" }}>
                                <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "10px" }}>
                                  <tr className="br-10">
                                    <th className=''>
                                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <div style={{ paddingLeft: "5px" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                            <g fill="none" fill-rule="nonzero">
                                              <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                              <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                              <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                            </g>
                                          </svg>
                                        </div>
                                        <span>{this.state.from}</span>
                                      </div>
                                    </th>
                                  </tr>
                                  <tr>$ 8200</tr>
                                </thead>
                                <tbody style={{ padding: "10px" }} className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">

                                  {this.state.selectedArray2.map((ele) => {
                                    console.log(ele.Rate2);
                                    return (
                                      <tr>
                                        <td style={{ borderRight: "0px solid", paddingTop: "10px", borderBottom: "1px solid black" }} className="tLeft p-5 pl-10">
                                          <div>
                                            {ele.check2}
                                          </div>
                                          <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                            <storng>Rate:</storng> $ {ele.Rate2} Per MT
                                            <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px" }}>L2</span>
                                          </span>

                                          <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                              SAP Contract No:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                                            </div>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>)
                                  })}

                                  {this.state.selectedArray3.map((ele) => {
                                    console.log(ele.Rate3);
                                    return (
                                      <tr>
                                        <td style={{ borderRight: "0px solid", paddingTop: "10px", borderBottom: "1px solid black" }} className="tLeft p-5 pl-10">
                                          <div>
                                            {ele.check3}
                                          </div>
                                          <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                            <storng>Rate:</storng> $ {ele.Rate3} Per MT
                                            <span style={{ background: "orange", color: "white", padding: "5px", borderRadius: "99px" }}>L3</span>
                                          </span>

                                          <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                              SAP Contract No:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                                            </div>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>)
                                  })}

                                </tbody>
                              </table>

                            </div>

                            {/* OIL */}

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>

                              <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                                <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                                  <tr className="br-10">
                                    <th className=''>
                                      <div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
                                        <div style={{ paddingLeft: "0px" }}>
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
                                        </div>
                                        <span>Rail Fright</span>
                                      </div>
                                    </th>
                                    <th>$ 24,00,000</th>

                                  </tr>
                                </thead>
                                <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                  {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                  {/* FIRST TABLE */}

                                  <tr>
                                    <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10 ">
                                      <div>
                                        Cost / MT : $2500 per MT
                                      </div>
                                    </td>
                                  </tr>

                                </tbody>
                              </table>

                              <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                                <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-dark-red white-color">
                                  <tr className="br-10">
                                    <th className=''>
                                      <div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
                                        <div style={{ paddingLeft: "0px" }}>
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
                                        </div>
                                        <span>Rail Fright</span>
                                      </div>
                                    </th>
                                    <th>$ 24,00,000</th>
                                  </tr>
                                </thead>
                                <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                  {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}
                                  {/* FIRST TABLE */}

                                  <tr>
                                    <td style={{ borderRight: "0px solid", paddingTop: "10px" }} className="tLeft p-5 pl-10 ">
                                      <div>
                                        Cost / MT : $2500 per MT
                                      </div>
                                    </td>
                                  </tr>


                                </tbody>
                              </table>

                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: "50%", gap: "20px" }}>

                              <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px", height: "10px" }}>
                                <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "10px" }}>
                                  <tr className="br-10">
                                    <th className=''>
                                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <div style={{ paddingLeft: "5px" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                            <g fill="none" fill-rule="nonzero">
                                              <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                              <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                              <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                            </g>
                                          </svg>
                                        </div>
                                        <span>{this.state.to}</span>
                                      </div>
                                    </th>
                                    {/* <th>$ 8200</th> */}
                                  </tr>
                                  <tr> $ 8200</tr>
                                </thead>
                                <tbody style={{ padding: "10px" }} className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                  {this.state.selectedArray4.map((ele) => {
                                    console.log(ele.Rate);
                                    return (
                                      <tr>
                                        <td style={{ borderRight: "0px solid", paddingTop: "10px", borderBottom: "1px solid black" }} className="tLeft p-5 pl-10">
                                          <div>
                                            {ele.check1}
                                          </div>
                                          <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                            <storng>Rate:</storng> $ {ele.Rate} Per MT
                                            <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
                                          </span>

                                          <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                              SAP Contract No:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                                            </div>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    )
                                  })}

                                </tbody>
                              </table>

                              <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px", height: "10px" }}>
                                <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "10px" }}>
                                  <tr className="br-10">
                                    <th className=''>
                                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <div style={{ paddingLeft: "5px" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                            <g fill="none" fill-rule="nonzero">
                                              <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                              <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                              <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                            </g>
                                          </svg>
                                        </div>
                                        <span>{this.state.to}</span>
                                      </div>
                                    </th>
                                  </tr>
                                  <tr> $ 8200</tr>
                                </thead>
                                <tbody style={{ padding: "10px" }} className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                  {this.state.selectedArray5.map((ele) => {
                                    console.log(ele.Rate2);
                                    return (
                                      <tr>
                                        <td style={{ borderRight: "0px solid", paddingTop: "10px", borderBottom: "1px solid black" }} className="tLeft p-5 pl-10">
                                          <div>
                                            {ele.check2}
                                          </div>
                                          <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                            <storng>Rate:</storng> $ {ele.Rate2} Per MT
                                            <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
                                          </span>

                                          <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                              SAP Contract No:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                                            </div>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    )
                                  })}
                                  {this.state.selectedArray6.map((ele) => {
                                    console.log(ele.Rate3);
                                    return (
                                      <tr>
                                        <td style={{ borderRight: "0px solid", paddingTop: "10px", borderBottom: "1px solid black" }} className="tLeft p-5 pl-10">
                                          <div>
                                            {ele.check3}
                                          </div>
                                          <span style={{ paddingTop: "10px", display: "flex", gap: "20px", alignItems: "center" }}>
                                            <storng>Rate:</storng> $ {ele.Rate3} Per MT
                                            <span style={{ background: "green", color: "white", padding: "5px", borderRadius: "99px" }}>L1</span>
                                          </span>

                                          <div style={{ display: "flex", paddingTop: "10px", gap: "20px" }}>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                              SAP Contract No:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                                            </div>
                                            <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                              <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    )
                                  })}
                                </tbody>
                              </table>

                            </div>

                          </div>}
                      </div>
                    </div>

                    <div className="actions" style={{ display: "flex", justifyContent: "end", paddingTop: "20px" }}>
                      <button
                        className={"bg-theme wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 white-color ml-15"}
                        onClick={this.handleRefresh}
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
                      <a className="chcek-close-button" onClick={this.handleRefresh} style={{ border: "5px solid black", padding: "1px 5px", borderRadius: "999px", fontSize: "20px", color: "black" }}>
                        &times;
                      </a>
                    </div>

                    <div style={{ boxShadow: "0 0 27px 4px rgb(69 68 68 / 60%)", padding: "20px" }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "800", fontSize: "20px" }}>
                          Contract No : 23456666
                        </div>
                        <hr />
                      </div>

                      <div style={{ padding: "10px 0px", width: "50%" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>

                          <div style={{ fontWeight: "800" }}>Route Code:</div>
                          <div style={{ fontWeight: "800" }}>From:</div>
                          <div style={{ fontWeight: "800" }}>To:</div>
                          <div style={{ fontWeight: "800" }}>Origin Yard:</div>
                          <div style={{ fontWeight: "800" }}>Destination Yard:</div>

                          <span className="span">{this.state.routeCode}</span>
                          <span className="span">{this.state.from}</span>
                          <span className="span">{this.state.to}</span>
                          <span className="span">{this.state.originYard}</span>
                          <span className="span">{this.state.destination_Yard}</span>
                        </div>
                      </div>

                      {/* <div style={{ padding: "10px 0px", width: "100%" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>

                        <div style={{ fontWeight: "800" }}>Rake:</div>
                        <div style={{ fontWeight: "800" }}>Commodity Category:</div>
                        <div style={{ fontWeight: "800" }}>Commodity Name:</div>
                        <div style={{ fontWeight: "800" }}>Type of Wagon:</div>
                        <div style={{ fontWeight: "800" }}>No of Wagon:</div>
                        <div style={{ fontWeight: "800" }}>Wagon Wt:</div>

                        <span className="span">{this.state.rakeOf}</span>
                        <span className="span">{this.state.commodity_cato}</span>
                        <span className="span">{this.state.commodity_N}</span>
                        <span className="span">{this.state.WagonType}</span>
                        <span className="span">{this.state.wagon}</span>
                        <span className="span">{this.state.wagonWt} per MT Wagon</span>
                      </div>
                    </div> */}

                      <div style={{ padding: "20px 0" }}>


                        {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "20px", width: "100%" }}>

                        <div style={{ display: "flex", flexDirection: "row", padding: "0px 10px", background: "blue", color: "white", gap: "25%", justifyContent: "space-between" }}>
                          <p style={{ alignItems: "start", fontWeight: "800", fontSize: "18px" }}>Cost / PTPK : $ 5 PTPK</p>
                          <p style={{ alignItems: "center", fontWeight: "800", fontSize: "18px" }}>Cost / MT : $ 4300 per MT</p>
                          <p style={{ alignItems: "end", fontWeight: "800", fontSize: "18px" }}>Total Cost : $ 30,00,000</p>
                        </div>

                      </div> */}
                        {/* HIDE AND SHOW PART DROPDOWN */}


                        <div>

                          <div style={{ width: "100%", gap: "20px" }}>

                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color" style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                                <tr className="br-10" style={{ alignItems: "start" }}>
                                  <th className=''>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                      <div style={{ paddingLeft: "5px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                          <g fill="none" fill-rule="nonzero">
                                            <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                            <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                            <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                          </g>
                                        </svg>
                                      </div>
                                      <span>{this.state.from}</span>
                                    </div>
                                  </th>
                                </tr>
                                {/* <tr className="br-10" style={{ alignItems: "end" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'>COST / MT : 1200 per MT</th>
                              </tr>
                              <tr className="br-10" style={{ alignItems: "end" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'>Total Cose : $ 456</th>
                              </tr> */}
                              </thead>

                              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {this.state.selectedArray.map((ele) => {
                                  return (
                                    <tr>
                                      <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", alignItems: "center", borderBottom: "1px solid black" }} className="tLeft p-5 pl-10 pr-10">
                                        <div style={{ width: "40%" }}>
                                          {ele.check1}
                                        </div>
                                        <div style={{ display: "flex", gap: "25px", width: "50%" }}>
                                          <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                            SAP Contract No:
                                            <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                                          </div>
                                          <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                            <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                                          </div>
                                        </div>

                                        <div>
                                          Rate: $ {ele.Rate} per MT
                                        </div>
                                      </td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>

                          </div>

                          {/* <div style={{ width: "100%", gap: "20px" }}>

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

                        </div> */}

                          <div style={{ width: "100%", gap: "20px" }}>



                            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "30px" }}>
                              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color" style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                                <tr className="br-10" style={{ alignItems: "start" }}>
                                  <th className=''>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                      <div style={{ paddingLeft: "5px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 21">
                                          <g fill="none" fill-rule="nonzero">
                                            <path fill="#9FA8DA" d="M7.5 0C3.364 0 0 3.412 0 7.605 0 12.81 6.712 20.45 6.998 20.773a.67.67 0 0 0 1.004 0C8.288 20.45 15 12.81 15 7.605 15 3.412 11.635 0 7.5 0zm0 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                            <path fill="#FFF" d="M7.5 19.266c-2.259-2.72-6.15-8.089-6.15-11.66 0-3.44 2.76-6.236 6.15-6.236 3.39 0 6.15 2.797 6.15 6.235 0 3.572-3.89 8.94-6.15 11.661z" />
                                            <path fill="#9FA8DA" d="M7.5 3.23c-2.394 0-4.342 1.994-4.342 4.443 0 2.45 1.948 4.442 4.342 4.442 2.394 0 4.342-1.992 4.342-4.442S9.894 3.231 7.5 3.231zm0 7.108c-1.524 0-2.763-1.195-2.763-2.665S5.977 5.008 7.5 5.008c1.524 0 2.763 1.195 2.763 2.665s-1.24 2.665-2.763 2.665z" />
                                          </g>
                                        </svg>
                                      </div>
                                      <span>{this.state.to}</span>
                                    </div>
                                  </th>
                                </tr>
                                {/* <tr className="br-10" style={{ alignItems: "end" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'>COST / MT : 1200 per MT</th>
                              </tr>
                              <tr className="br-10" style={{ alignItems: "end" }}>
                                <th className='col-3 pl-10 pr-10 tLeft'>Total Cost : $ 56465</th>
                              </tr> */}
                              </thead>

                              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color">
                                {this.state.selectedArray4.slice(1).map((ele) => {
                                  console.log(this.state.selectedArray4.slice(4).map((ele) => ele.Rate))
                                  return (
                                    <tr>
                                      <td style={{ borderRight: "0px solid", paddingTop: "10px", display: "flex", flexDirection: "row", alignItems: "center", borderBottom: "1px solid black" }} className="tLeft p-5 pl-10 pr-10">
                                        <div style={{ width: "40%" }}>
                                          {ele.check1}
                                        </div>
                                        <div style={{ display: "flex", gap: "25px", width: "50%" }}>
                                          <div style={{ fontSize: "12px", fontWeight: "800" }}>
                                            SAP Contract No:
                                            <div style={{ fontWeight: "normal", paddingTop: "8px", paddingBottom: "10px" }}>{ele.Contract_No}</div>
                                          </div>
                                          <div style={{ fontSize: "12px", fontWeight: "800" }}> Contract Tenure:
                                            <div style={{ fontWeight: "normal", paddingTop: "8px" }}>{ele.date}</div>
                                          </div>
                                        </div>

                                        <div>
                                          Rate: $ {ele.Rate} per MT
                                        </div>
                                      </td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div>
                    </div>

                    <div className="actions" style={{ display: "flex", justifyContent: "end", paddingTop: "20px" }}>
                      <button
                        style={{ border: "1px solid #528aea", color: "#528aea" }}
                        className={"wt-250 pl-15 pr-15 mr-5 ht-40 br-5 fBold fs-14 ml-15"}
                        onClick={this.handleRefresh}
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

          </div>

        </div >
      </Sticky >
    )
  }
}

export default SingleCostEstimation;