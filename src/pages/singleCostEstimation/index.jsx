import React, { Component, useState } from "react";
import Sticky from "Components/Sticky/index";
import { ReactComponent as Back } from 'Icons/back.svg'
import 'reactjs-popup/dist/index.css';
import { MdLocationPin } from "react-icons/md";
import { BiTrain } from "react-icons/bi";


class SingleCostEstimation extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (

      <Sticky>
        <div className="main-div" style={{ maxWidth: "2000px" }}>

          <div className="arrow-text" style={{ cursor: "pointer" }}>
            <div onClick={() => { this.props.history.push('/createNewContracts') }}>
              <Back className="fill-theme mr-5" />
            </div>
            <div className="header-text" style={{ color: "#528aea" }}>
              Back
            </div>
          </div>

          <div>
            <div style={{ display: "flex", gap: "80px", alignItems: "center", borderBottom: "1px solid black", paddingBottom: "15px" }}>
              <div style={{ fontSize: "32px", borderRight: "1px solid black", paddingRight: "80px" }}>
                <strong>Estinated Cost:</strong> $ 10,50,000
              </div>
              <div style={{ fontSize: "25px", borderRight: "1px solid black", paddingRight: "80px" }}>
                <strong> Cost/PTPK:</strong> $1430 PTPK
              </div>
              <div style={{ fontSize: "25px" }}>
                <strong>Cost/MT:</strong> $200 per MT
              </div>
            </div>

          </div>

          <div style={{ borderBottom: "1px solid black", paddingBottom: "20px" }}>


            <div>

              <div style={{ display: "flex", gap: "80px", alignItems: "center", paddingTop: "15px" }}>

                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>1. Estinated Cost</strong>: $ 10,50,000
                </div>
                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>Cost/PTPK</strong>: $1430 PTPK
                </div>
                <div style={{ fontSize: "20px" }}>
                  <strong>Cost/MT</strong>: $200 per MT
                </div>
              </div>
            </div>

            {/* TABLE SURAT */}

            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "20px" }
            }>
              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                <tr className="br-10">

                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <MdLocationPin size="1.5em" />
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Surat
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color">
                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(5, auto)" }}>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>


                </div>

              </tbody>

            </table>


            {/* TABLE OIL */}


            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px' }}>
              <thead className="ht-40 fs-14 fBold mr-5 curP table-bg-dark-red white-color">
                <tr className="br-10">
                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <BiTrain size="1.5em" />
                      {/* <span>Rail Freight For Commodity : {this.state.commodity_cato}</span> */}
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Rail Fright
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">

                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(2, auto)" }}>

                  <div>
                    <div style={{ marginBottom: "8px" }}>Cost / MT: $2500 per MT</div>
                    <span>No of Wagons: 20 Nos</span>
                  </div>

                  <div>
                    <div style={{ marginBottom: "8px" }}>Commodity: Hydrogented and other Edible oil</div>
                    <span>Commodity Type: All Refined and Non-Refined Edible oil</span>
                  </div>
                </div>

              </tbody>
            </table>

            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px' }
            }>
              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                <tr className="br-10">
                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <MdLocationPin size="1.5em" />
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Surat
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">
                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(4, auto)" }}>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                </div>
              </tbody>
            </table>
          </div>

          <div style={{ borderBottom: "1px solid black", paddingBottom: "20px" }}>
            <div>
              <div style={{ display: "flex", gap: "80px", alignItems: "center", paddingTop: "15px" }}>

                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>2. Estinated Cost</strong>: $ 10,50,000
                </div>
                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>Cost/PTPK</strong>: $1430 PTPK
                </div>
                <div style={{ fontSize: "20px" }}>
                  <strong>Cost/MT</strong>: $200 per MT
                </div>
              </div>
            </div>

            {/* TABLE SURAT */}

            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "20px" }
            }>
              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                <tr className="br-10">

                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <MdLocationPin size="1.5em" />
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Surat
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">
                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(5, auto)" }}>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>


                </div>

              </tbody>

            </table>


            {/* TABLE OIL */}


            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px' }}>
              <thead className="ht-40 fs-14 fBold mr-5 curP table-bg-dark-red white-color">
                <tr className="br-10">
                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <BiTrain size="1.5em" />
                      {/* <span>Rail Freight For Commodity : {this.state.commodity_cato}</span> */}
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Rail Fright
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">

                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(2, auto)" }}>

                  <div>
                    <div style={{ marginBottom: "8px" }}>Cost / MT: $2500 per MT</div>
                    <span>No of Wagons: 20 Nos</span>
                  </div>

                  <div>
                    <div style={{ marginBottom: "8px" }}>Commodity: Hydrogented and other Edible oil</div>
                    <span>Commodity Type: All Refined and Non-Refined Edible oil</span>
                  </div>
                </div>

              </tbody>
            </table>

            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px' }
            }>
              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                <tr className="br-10">
                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <MdLocationPin size="1.5em" />
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Surat
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">
                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(4, auto)" }}>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                </div>
              </tbody>
            </table>
          </div>

          <div style={{ borderBottom: "1px solid black", paddingBottom: "20px" }}>
            <div>
              <div style={{ display: "flex", gap: "80px", alignItems: "center", paddingTop: "15px" }}>

                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>3. Estinated Cost</strong>: $ 10,50,000
                </div>
                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>Cost/PTPK</strong>: $1430 PTPK
                </div>
                <div style={{ fontSize: "20px" }}>
                  <strong>Cost/MT</strong>: $200 per MT
                </div>
              </div>
            </div>

            {/* TABLE SURAT */}

            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "20px" }
            }>
              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                <tr className="br-10">

                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <MdLocationPin size="1.5em" />
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Surat
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">
                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(5, auto)" }}>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>


                </div>

              </tbody>

            </table>


            {/* TABLE OIL */}


            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px' }}>
              <thead className="ht-40 fs-14 fBold mr-5 curP table-bg-dark-red white-color">
                <tr className="br-10">
                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <BiTrain size="1.5em" />
                      {/* <span>Rail Freight For Commodity : {this.state.commodity_cato}</span> */}
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Rail Fright
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">

                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(2, auto)" }}>

                  <div>
                    <div style={{ marginBottom: "8px" }}>Cost / MT: $2500 per MT</div>
                    <span>No of Wagons: 20 Nos</span>
                  </div>

                  <div>
                    <div style={{ marginBottom: "8px" }}>Commodity: Hydrogented and other Edible oil</div>
                    <span>Commodity Type: All Refined and Non-Refined Edible oil</span>
                  </div>
                </div>

              </tbody>
            </table>

            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px' }
            }>
              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                <tr className="br-10">
                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <MdLocationPin size="1.5em" />
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Surat
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">
                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(4, auto)" }}>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                </div>
              </tbody>
            </table>
          </div>

          <div>
            <div>
              <div style={{ display: "flex", gap: "80px", alignItems: "center", paddingTop: "15px" }}>

                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>4. Estinated Cost</strong>: $ 10,50,000
                </div>
                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>Cost/PTPK</strong>: $1430 PTPK
                </div>
                <div style={{ fontSize: "20px" }}>
                  <strong>Cost/MT</strong>: $200 per MT
                </div>
              </div>
            </div>

            {/* TABLE SURAT */}

            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px', marginTop: "20px" }
            }>
              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                <tr className="br-10">

                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <MdLocationPin size="1.5em" />
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Surat
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">
                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(5, auto)" }}>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>

                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>


                </div>

              </tbody>

            </table>


            {/* TABLE OIL */}


            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px' }}>
              <thead className="ht-40 fs-14 fBold mr-5 curP table-bg-dark-red white-color">
                <tr className="br-10">
                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <BiTrain size="1.5em" />
                      {/* <span>Rail Freight For Commodity : {this.state.commodity_cato}</span> */}
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Rail Fright
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">

                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(2, auto)" }}>

                  <div>
                    <div style={{ marginBottom: "8px" }}>Cost / MT: $2500 per MT</div>
                    <span>No of Wagons: 20 Nos</span>
                  </div>

                  <div>
                    <div style={{ marginBottom: "8px" }}>Commodity: Hydrogented and other Edible oil</div>
                    <span>Commodity Type: All Refined and Non-Refined Edible oil</span>
                  </div>
                </div>

              </tbody>
            </table>

            <table style={{ boxShadow: 'rgba(136, 165, 300, 0.6) 0px 0px 5px 0px, rgba(255, 255, 255, 0.7) 0px 0px 5px 0px', width: "100%", borderSpacing: '0px' }
            }>
              <thead className="ht-40 fs-14 fBold curP table-bg-blue white-color">
                <tr className="br-10">
                  <th className=''>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "5px" }}>
                      <MdLocationPin size="1.5em" />
                      <div style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingRight: "10px" }}>
                        {/* {this.state.originYard} */}
                        Surat
                        <span>$ 8200</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>


              <tbody className="ht-40 fs-14 fBold mr-5 mt-10 curP label-color bg-color bg-color">
                <div style={{ padding: "15px", display: "grid", gridTemplateColumns: "repeat(4, auto)" }}>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                  <div>
                    <div>Transporter 1</div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", gap: "5px", fontSize: "12px" }}>
                      <span>Cost: 200$ per MT</span>
                      <span>Total Est. Cost : $ 10000</span>
                    </div>
                  </div>
                </div>
              </tbody>
            </table>
          </div>

        </div >
      </Sticky >
    )
  }
}

export default SingleCostEstimation;