import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { validateEmail } from "../../Utilities/SharedFunctions";
import { Divider } from "@material-ui/core";

export default class Ownership extends Component {
  constructor() {
    super();
    this.state = {
      owners: [],
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      streetAddress: "",
      floorNo: "",
      city: "",
      stateRegion: "",
      zipCode: "",
      dob: "",
      ssn: "",
      validEmail: false,
      view: 0,
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }
  handleFormInput(event) {
    if (event.target.id) {
      if (event.target.id === "email") {
        this.setState({ validEmail: validateEmail(event.target.value) });
      }
      this.setState({ [event.target.id]: event.target.value });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }
  handleSave() {
    var ownerdetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
    };
    this.setState({ owners: ownerdetails, view: 0 });
  }
  addNewItem = () => {
    let obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
    };
    this.setState({
      owners: [...this.state.owners, obj],
      view: 0,
    });
  };
  render() {
    //console.log(this.state.owners)
    return (
      <div>
        {this.state.view === 0 && (
          <div
            style={{ marginBottom: "50px", height: "auto" }}
            className="onboardForm"
          >
            <h3>Add company owners</h3>
            <p className="subtitle">
              Regulations require that we collect information about any
              individual with an ownership stake of 25% or more of your company.
            </p>
            <h3>Company owners</h3>
            {this.state.owners.map((owner, index) => (
              <div key={index} className="companyOwnerDiv">
                <div className="dot"></div>
                <div style={{ textAlign: "left" }} className="details">
                  <p style={{ margin: "0" }}>
                    {owner.firstName} {owner.lastName}
                  </p>
                  <span style={{ fontSize: "14px", color: " #454545" }}>
                    {owner.email} <br />
                    {owner.phoneNumber}
                  </span>
                </div>
              </div>
            ))}
            <button
              className="plainButton"
              onClick={() => this.setState({ view: 1 })}
            >
              <div className="addNewOwnerDiv">
                <AddCircleOutlineOutlinedIcon
                  style={{
                    fontSize: "43px",
                    color: "#3297F4",
                    marginLeft: "16px",
                    marginRight: "14px",
                  }}
                />
                <div className="details">
                  <p>Add new Owner</p>
                  <div></div>
                  <div style={{ width: "100px" }}></div>
                </div>
              </div>
            </button>

            <Divider
              light
              style={{ backgroundColor: "#e4e4e4", height: "0.3px" }}
            />
            <div style={{ height: "96px" }} className="myInfo">
              <input type="radio" />
              <span>No other individual owns 25% or more of the company</span>
            </div>
            <div style={{ top: "35px" }} className="formButtons">
              <button onClick={this.props.prevStep} className="form__button">
                <ArrowBackIosIcon fontSize="small" />
                Back
              </button>
              <button
                onClick={this.props.nextStep}
                className="blueForm__button"
              >
                Save & Continue
                <ArrowForwardIosIcon fontSize="small" />
              </button>
            </div>
          </div>
        )}
        {this.state.view === 1 && (
          <>
            <div
              style={{ marginBottom: "45px", height: "490px" }}
              className="onboardForm"
            >
              <h3>Individual Owner</h3>
              <p style={{ marginBottom: "22px" }} className="subtitle">
                Regulations require that we collect information about any
                individual with an ownership stake of 25% or more of your
                company. <br /> We take privacy and security seriously; we
                follow best security practices and do not store or share this
                information with third parties for marketing purposes.
              </p>
              <h3>Executive's Name</h3>
              <div className="displayFlexOnboard">
                <input
                  className="formInput"
                  id="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  type="text"
                  onChange={this.handleFormInput}
                />
                <input
                  className="formInput"
                  id="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleFormInput}
                  type="text"
                />
              </div>
              <input
                className="formInput"
                id="title"
                placeholder="Title"
                type="text"
                value={this.state.title}
                onChange={this.handleFormInput}
              />
            </div>
            <div
              style={{ marginBottom: "45px", height: "370px" }}
              className="onboardForm"
            >
              <h3> Contact Information </h3>
              <p className="subtitle">
                We take privacy seriously, and will never share this information
                with third parties for marketing purposes.
              </p>
              <input
                className="formInput"
                style={
                  this.state.email !== "" && this.state.validEmail !== true
                    ? { border: "2px solid #F05050" }
                    : null
                }
                id="email"
                placeholder="Executive’s Email address"
                type="text"
                value={this.state.email}
                onChange={this.handleFormInput}
              />
              <input
                className="formInput"
                id="phoneNumber"
                placeholder="Executive’s Phone address"
                type="text"
                value={this.state.phoneNumber}
                onChange={this.handleFormInput}
              />
            </div>

            <div
              style={{ marginBottom: "45px", height: "530px" }}
              className="onboardForm"
            >
              <h3> Executive’s Home Address </h3>
              <p className="subtitle">
                Please provide a personal home address, as we are unable to
                verify PO box addresses.
              </p>
              <input
                className="formInput"
                id="streetAddress"
                placeholder="Street Address"
                type="text"
                value={this.state.streetAddress}
                onChange={this.handleFormInput}
              />
              <input
                className="formInput"
                id="floorNo"
                placeholder="Floor/Suite/Office"
                type="text"
                value={this.state.floorNo}
                onChange={this.handleFormInput}
              />
              <input
                className="formInput"
                id="city"
                placeholder="City"
                type="text"
                value={this.state.city}
                onChange={this.handleFormInput}
              />
              <div className="displayFlexOnboard">
                <input
                  className="formInput"
                  id="stateRegion"
                  placeholder="State"
                  type="text"
                  value={this.state.stateRegion}
                  onChange={this.handleFormInput}
                />
                <input
                  className="formInput"
                  id="zipCode"
                  placeholder="ZIP Code"
                  type="text"
                  value={this.state.zipCode}
                  onChange={this.handleFormInput}
                />
              </div>
            </div>
            <div style={{ height: "490px" }} className="onboardForm">
              <h3> Personal Information </h3>
              <p className="subtitle">
                To verify the executive’s identity, we’re required to ask for
                the last 4 digits of their SSN. This information – as well as
                any information collected within this form – is securely
                encrypted with industry-leading practices, and will never be
                shared.
              </p>
              <input
                className="formInput"
                id="dob"
                placeholder="Executive’s Birth Date"
                type="text"
                value={this.state.dob}
                onChange={this.handleFormInput}
              />
              <input
                className="formInput"
                id="ssn"
                placeholder="Executive SSN (Last 4 digits)"
                type="text"
                value={this.state.ssn}
                onChange={this.handleFormInput}
              />
              <div
                style={{ top: "68px", marginTop: "35px" }}
                className="formButtons"
              >
                <button className="form__button">
                  <ArrowBackIosIcon fontSize="small" />
                  Back
                </button>
                <button
                  className="blueForm__button"
                  onClick={() => this.addNewItem()}
                >
                  Save & Continue
                  <ArrowForwardIosIcon fontSize="small" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
