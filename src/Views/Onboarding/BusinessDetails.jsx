import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { CircularProgress } from "@material-ui/core";
import CustomSnackbar from "../../Components/SharedComponents/CustomSnackbar";
import api from "../../Services/apiCalls";

export default class BusinessDetails extends Component {
  constructor() {
    super();
    this.state = {
      businessName: "",
      businessdba: "",
      nameOnCard: "",
      regNumber: "",
      businessWebsite: "",
      businessPhone: "",
      streetAddress: "",
      floorNo: "",
      businessCity: "",
      addressState: "",
      addressZip: "",
      businessID: 0,
      isLoading: false,
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }
  handleFormInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit = async () => {
    this.setState({ isLoading: true });
    const url = "Business/RegisterBusiness";
    let payload = {
      businessName: this.state.businessName,
      businessRegistrationNo: this.state.regNumber,
      businessNameOnCard: this.state.nameOnCard,
      businessDBA: this.state.businessdba,
      businessWebsite: this.state.businessWebsite,
      businessPhoneNo: this.state.businessPhone,
      businessStreet: this.state.streetAddress,
      officeNo: this.state.floorNo,
      city: this.state.businessCity,
      countryRegion: this.state.addressState,
      zipCode: this.state.addressZip,
    };
    //console.log(payload);
    try {
      let response = await api.postRequest(url, payload);
      console.log(response);
      this.setState({ isLoading: false });
      setTimeout(function () {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.log(error.response);
      this.setState({ isLoading: false, snackbaropen: true ,snackTitle:'Creation failed',snackbarmsg: error.response.data.error_description  });
    }
  };
  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };
  render() {
    return (
      <div>
        <CustomSnackbar
          hideAlert={this.snackbarClose}
          showSnack={this.state.snackbaropen}
          hideSnack={this.snackbarClose}
          response={this.state.responseStatus}
          title={this.state.snackTitle}
          messagetxt={this.state.snackbarmsg}
        />
        <div style={{ marginBottom: "50px" }} className="onboardForm">
          <h3>Tell us about your business</h3>
          <p className="subtitle">
            We’ll use this information to securely confirm your business
            identity and manage your corporate account.
          </p>

          <input
            className="formInput"
            id="businessName"
            placeholder="Legal Business Name"
            value={this.state.businessName}
            onChange={this.handleFormInput}
            type="text"
          />
          <input
            className="formInput"
            id="businessdba"
            placeholder="Business DBA"
            value={this.state.businessdba}
            onChange={this.handleFormInput}
            type="text"
          />
          <input
            className="formInput"
            id="nameOnCard"
            placeholder="Business Name on Physical Card"
            onChange={this.handleFormInput}
            value={this.state.nameOnCard}
            type="text"
          />
          <input
            className="formInput"
            id="regNumber"
            placeholder="Business Registration Number"
            value={this.state.regNumber}
            onChange={this.handleFormInput}
            type="text"
          />
          <input
            className="formInput"
            id="businessWebsite"
            placeholder="Business Website"
            value={this.state.businessWebsite}
            onChange={this.handleFormInput}
            type="text"
          />
          <input
            className="formInput"
            id="businessPhone"
            placeholder="Business Phone Number"
            value={this.state.businessPhone}
            onChange={this.handleFormInput}
            type="text"
          />
        </div>
        <div style={{ height: "605px" }} className="onboardForm">
          <h3> Business Information </h3>
          <p className="subtitle">
            Please input physical U.S. addresses only, no P.O. Boxes.
          </p>
          <input
            className="formInput"
            id="streetAddress"
            placeholder="Street Address"
            onChange={this.handleFormInput}
            value={this.state.streetAddress}
            type="text"
          />
          <input
            className="formInput"
            id="floorNo"
            placeholder="Floor/Suite/Office #"
            onChange={this.handleFormInput}
            value={this.state.floorNo}
            type="text"
          />
          <input
            className="formInput"
            id="businessCity"
            placeholder="City"
            onChange={this.handleFormInput}
            value={this.state.businessCity}
            type="text"
          />
          <div className="displayFlexOnboard">
            <input
              className="formInput"
              id="addressState"
              placeholder="State"
              onChange={this.handleFormInput}
              value={this.state.addressState}
              type="text"
            />
            <input
              className="formInput"
              id="addressZip"
              placeholder="Zip Code"
              onChange={this.handleFormInput}
              value={this.state.addressZip}
              type="text"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "relative",
              top: "50px",
            }}
          >
            <button
              style={{
                height: "59px",
                fontSize: "16px",
                justifyContent: "space-around",
                width: "250px",
              }}
              onClick={() => this.handleSubmit()}
              disabled={
                this.state.businessName === "" ||
                this.state.businessdba === "" ||
                this.state.nameOnCard === "" ||
                this.state.regNumber === "" ||
                this.state.businessWebsite === "" ||
                this.state.businessPhone === ""
                  ? true
                  : false
              }
              className={ this.state.businessName === "" ||
              this.state.businessdba === "" ||
              this.state.nameOnCard === "" ||
              this.state.regNumber === "" ||
              this.state.businessWebsite === "" ||
                this.state.businessPhone === "" ?  "blueForm__buttonDisabled" : "blueForm__button" }
            >
              {this.state.isLoading ? (
                <CircularProgress style={{ color: "white" }} size={20} />
              ) : (
                <>
                  Save & Continue
                  <ArrowForwardIosIcon fontSize="small" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
