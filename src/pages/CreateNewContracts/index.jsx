import React, { Component } from "react";
import Sticky from "Components/Sticky/index";
import Dropdown from "Components/Dropdown";
import { ReactComponent as Back } from 'Icons/back.svg'
import Checkbox from "Components/Checkbox/index";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";


class CreateNewContracts extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const contentStyle = {
      maxWidth: "100%",
      width: "90%",
      height: "90%"
    }

    const temp = [{ id: 1, name: "Option1" }, { id: 2, name: "Option2" }, { id: 3, name: "Option3" }];

    return (
      <Sticky>
        <div className="main-div">


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

            <div className="input-fields">
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  Rake
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
                  Commodity Category
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
                  Commodity Name
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
                  Type of Wagon
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
                  No. of Wagon
                </div>
                <Dropdown
                  label="42"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30 wd-100"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  Wagon Wt.
                </div>
                <Dropdown
                  label="55"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30 wd-100"
                />
              </div>

              <div className="fs-14 header-dark-color mr-10">
                <br></br>
                <br></br>
                <AiOutlineCloseCircle style={{ width: "25px", height: "25px", color: "white" }} />
              </div>







            </div>




            <div className="input-fields">
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  Rake
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
                  Commodity Category
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
                  Commodity Name
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
                  Type of Wagon
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
                  No. of Wagon
                </div>
                <Dropdown
                  label="42"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30 wd-100"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px", color: "white" }}>
                  Wagon Wt.
                </div>
                <Dropdown
                  label="55"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30 wd-100"
                />
              </div>

              <div className="fs-14 header-dark-color mr-10">
                <br></br>
                <br></br>
                <AiOutlinePlusCircle style={{ width: "25px", height: "25px", color: "white" }} />
              </div>

            </div>

          </div>

          {/* TABLE DHRUB */}

          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "98.5%", marginLeft: "30px", borderSpacing: '0px', marginTop: "30px" }}>
            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
              <tr className="br-10">
                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>

                <th className='col-4 tLeft'><input type="checkbox" />L1</th>
                <th className='col-4 tLeft'><input type="checkbox" />L2</th>
                <th className='col-4 tLeft'><input type="checkbox" />L3</th>
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
                    <input type="checkbox" /> Transporter 1
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
                    <input type="checkbox" /> Transporter 2
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
                    <input type="checkbox" /> Transporter 3
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
                    <input type="checkbox" /> Transporter 1
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
                    <input type="checkbox" /> Transporter 2
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
                    <input type="checkbox" /> Transporter 3
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
                    <input type="checkbox" /> Transporter 1
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
                    <input type="checkbox" /> Transporter 2
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
                    <input type="checkbox" /> Transporter 3
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
                    <input type="checkbox" /> Transporter 1
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
                    <input type="checkbox" /> Transporter 2
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
                    <input type="checkbox" /> Transporter 3
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
                {/* {(vehicleSchedulerDetails || []).map((details, index) => {
                                    return ( */}

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


          {/* TABLE SUGAR */}





          {/* FINAL TABLE */}

          <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "98.5%", marginLeft: "30px", borderSpacing: '0px', marginTop: "30px" }}>
            <thead className="ht-40 fs-14 fBold mr-5 mt-10 curP table-bg-blue white-color">
              <tr className="br-10">
                <th className='col-3 pl-10 pr-10 tLeft'>Dhrub</th>

                <th className='col-4 tLeft'><input type="checkbox" />L1</th>
                <th className='col-4 tLeft'><input type="checkbox" />L2</th>
                <th className='col-4 tLeft'><input type="checkbox" />L3</th>
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
                    <input type="checkbox" /> Transporter 1
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
                    <input type="checkbox" /> Transporter 2
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
                    <input type="checkbox" /> Transporter 3
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
                    <input type="checkbox" /> Transporter 1
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
                    <input type="checkbox" /> Transporter 2
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
                    <input type="checkbox" /> Transporter 3
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
                    <input type="checkbox" /> Transporter 1
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
                    <input type="checkbox" /> Transporter 2
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
                    <input type="checkbox" /> Transporter 3
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
                <div className="modal">
                  <a className="close" onClick={close} style={{ border: "1px solid black", padding: "1px 5px", borderRadius: "999px" }}>
                    &times;
                  </a>
                  <div className="header"> Modal Title </div>
                  <div className="content">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                    nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                    quibusdam voluptates delectus doloremque, explicabo tempore dicta
                    adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                    sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                    repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                    alias. Vitae?
                  </div>
                  <div className="actions">
                    <Popup
                      trigger={<button className="button"> Menu Demo </button>}
                      position="top center"
                      closeOnDocumentClick
                      contentStyle={{ padding: "0px", border: "none" }}
                    >
                      <div className="menu">
                        <div className="menu-item"> Menu item 1</div>
                        <div className="menu-item"> Menu item 2</div>
                        <div className="menu-item"> Menu item 3</div>
                        <Popup
                          trigger={<div className="menu-item"> sup Menu </div>}
                          position="right top"
                          on="hover"
                          closeOnDocumentClick
                          mouseLeaveDelay={300}
                          mouseEnterDelay={0}
                          contentStyle={{ padding: "0px", border: "none" }}
                          arrow={false}
                        >
                          <div className="menu">
                            <div className="menu-item"> item 1</div>
                            <div className="menu-item"> item 2</div>
                            <div className="menu-item"> item 3</div>
                          </div>
                        </Popup>
                        <div className="menu-item"> Menu item 4</div>
                      </div>
                    </Popup>
                    <button
                      className="button"
                      onClick={() => {
                        console.log("modal closed");
                        close();
                      }}
                    >
                      close modal
                    </button>
                  </div>
                </div>
              )}
            </Popup>


          </div>


        </div>
      </Sticky >
    )
  }
}

export default CreateNewContracts;