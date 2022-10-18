import React, { Component } from "react";
import Sticky from "Components/Sticky/index";
import Dropdown from "Components/Dropdown";
import { ReactComponent as Back } from 'Icons/back.svg'

class CreateNewContracts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sticky>
        <div className="main-div">


          <div className="arrow-text">
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
                <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Route Code"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="From"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="To"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Origin Yard"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Destination Yard"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px" }}>.</div>
                <div className="search-button">
                  Search
                </div>
              </div>
            </div>

            <div className="input-fields">
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Route Code"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="From"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="To"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Origin Yard"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Destination Yard"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px" }}>.</div>
                <div className="search-button">
                  Search
                </div>
              </div>
            </div>

            <div className="input-fields">
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Route Code"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="From"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="To"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Origin Yard"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
              <div style={{ paddingBottom: "5px" }}>
                Route Code
                </div>
                <Dropdown
                  label="Destination Yard"
                  displayKey="name"
                  selectedItem={null}
                  className="mb-0 wt-250 ht-30"
                />
              </div>
              <div className="fs-14 header-dark-color mr-10">
                <div style={{ paddingBottom: "5px" }}>.</div>
                <div className="search-button">
                  Search
                </div>
              </div>
            </div> 

          </div>

        </div>
      </Sticky>
    )
  }
}

export default CreateNewContracts;