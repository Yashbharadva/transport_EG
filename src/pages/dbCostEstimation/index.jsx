import Sticky from "Components/Sticky/index";
import React, { Component } from "react";
import { ReactComponent as Back } from "Icons/back.svg";

class DbCostEstimation extends Component {
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

          <div style={{ borderBottom: "1px solid black", paddingBottom: "20px" }}>
            <div>
              <div style={{ display: "flex", gap: "80px", alignItems: "center", paddingTop: "15px" }}>
                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>Estinated Cost</strong>: $ 10,50,000
                </div>
                <div style={{ fontSize: "20px", borderRight: "1px solid black", paddingRight: "80px" }}>
                  <strong>Cost/PTPK</strong>: $1430 PTPK
                </div>
                <div style={{ fontSize: "20px" }}>
                  <strong>Cost/MT</strong>: $200 per MT
                </div>
              </div>
            </div>
          </div>

        </div>
      </Sticky>
    )
  }
}

export default DbCostEstimation;