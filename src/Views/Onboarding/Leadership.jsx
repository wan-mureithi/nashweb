import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import api from "../../Services/apiCalls";
import {
  CircularProgress,
  createTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CustomSnackbar from "../../Components/SharedComponents/CustomSnackbar";

const dateTheme = createTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
        background: "#efefef",
        borderRadius: "10px",
        border: "0.3px solid #949494",
        height: "64px",
      },
    },
    MuiInputBase: {
      input: {
        padding: "10px 25px",
      },
    },
    MuiInputLabel: {
      formControl: {
        top: "5px",
        left: "10px",
      },
    },
    MuiFormLabel: {
      root: {
        color: "black",
        fontFamily: "Poppins",
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: "10px",
        marginTop: "-9px",
        marginLeft: "10px",
      },
    },
  },
});
export default class Leadership extends Component {
  constructor() {
    super();
    this.state = {
      execFirstName: "",
      execLastName: "",
      execTitle: "",
      execEmail: "",
      execPhone: "",
      streetAddress: "",
      floorNo: "",
      cityRegion: "",
      addressState: "",
      zipCode: "",
      execDob: new Date(),
      execSSN: "",
      useOwnInfo: false,
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
      isLoading: false
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  componentDidMount() {
    this.getUserDataAsExecutive();
  }
  getUserDataAsExecutive() {
    let applicationData = this.props.onboardingData;
    if (this.state.useOwnInfo) {
      this.setState({
        execFirstName: applicationData.user.firstName,
        execLastName: applicationData.user.lastName,
        execEmail: applicationData.user.email,
        execPhone: applicationData.user.phoneNo,
      });
    }
  }
  handleDate = (date) => {
    this.setState({ execDob: date });
  };
  handleFormInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleRadioChange() {
    this.setState({ useOwnInfo: !this.state.useOwnInfo });
  }
  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };

  handleSubmit = async () => {
    this.setState({ isLoading: true });
    const url = "Business/AddBusinessExecutive";
    let useOwnInfo = this.state.useOwnInfo;
    let payload = {
      businessId: this.props.businessid,
      executiveFirstName: useOwnInfo
        ? this.props.onboardingData.user.firstName
        : this.state.execFirstName,
      executiveLastName: useOwnInfo
        ? this.props.onboardingData.user.lastName
        : this.state.execLastName,
      title: this.state.execTitle,
      executiveEmailAddress: useOwnInfo
        ? this.props.onboardingData.user.email
        : this.state.execEmail,
      executivePhoneNo: useOwnInfo
        ? this.props.onboardingData.user.phoneNo
        : this.state.execPhone,
      executiveStreetAddress: this.state.streetAddress,
      executiveFloorNo: this.state.floorNo,
      executiveCity: this.state.cityRegion,
      executiveCountryRegion: "string",
      executiveZipCode: this.state.zipCode,
      executiveBirthDate: this.state.execDob,
      identificationTypeId: 1,
      executiveIdentificationNo: this.state.execSSN,
    };
    console.log(payload);
    try {
      let response = await api.postRequest(url, payload);
      //console.log(response)
      if (response.data.status_code !== 200) {
        this.setState({
          snackbaropen: true,
          responseStatus: "failed",
          snackTitle: response.data.message,
        });
      } else {
        this.setState({ isLoading: false });
        this.props.nextStep();
      }
    } catch (error) {
      console.error(error.response);
      this.setState({ isLoading: false });
      this.setState({
        snackbaropen: true,
        responseStatus: "failed",
        snackTitle: error.response.data.message,
      });
    }
  };
  render() {
    let useOwnInfo = this.state.useOwnInfo;
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
        <div
          style={{ marginBottom: "45px", height: "490px" }}
          className="onboardForm"
        >
          <h3>Take us to your leaders</h3>
          <p style={{ marginBottom: "55px" }} className="subtitle">
            Provide information about a member of your executive team, like a
            CFO, Managing Director, President, etc.
          </p>
          <div className="myInfo">
            <input
              type="radio"
              onChange={this.handleRadioChange}
              value={this.state.useOwnInfo}
            />
            <span>
              Use my information, I am a member of the executive team.
            </span>
          </div>
          <div className="displayFlexOnboard">
            <input
              className="formInput"
              id="execFirstName"
              value={
                useOwnInfo
                  ? this.props.onboardingData.user.firstName
                  : this.state.execFirstName
              }
              placeholder="First Name"
              onChange={this.handleFormInput}
              type="text"
            />
            <input
              className="formInput"
              id="execLastName"
              value={
                useOwnInfo
                  ? this.props.onboardingData.user.lastName
                  : this.state.execLastName
              }
              placeholder="Last Name"
              onChange={this.handleFormInput}
              type="text"
            />
          </div>
          <input
            className="formInput"
            id="execTitle"
            placeholder="Title"
            value={this.state.execTitle}
            onChange={this.handleFormInput}
            type="text"
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
            id="execEmail"
            placeholder="Executive’s Email address"
            value={
              useOwnInfo
                ? this.props.onboardingData.user.email
                : this.state.execEmail
            }
            type="text"
            onChange={this.handleFormInput}
          />
          <input
            className="formInput"
            id="execPhone"
            placeholder="Executive’s Phone Number"
            value={
              useOwnInfo
                ? this.props.onboardingData.user.phoneNo
                : this.state.execPhone
            }
            onChange={this.handleFormInput}
            type="text"
          />
        </div>

        <div
          style={{ marginBottom: "45px", height: "560px" }}
          className="onboardForm"
        >
          <h3> Executive’s Home Address </h3>
          <p className="subtitle">
            Please provide a personal home address, as we are unable to verify
            PO box addresses.
          </p>
          <input
            className="formInput"
            id="streetAddress"
            placeholder="Street Address"
            value={this.state.streetAddress}
            onChange={this.handleFormInput}
            type="text"
          />
          <input
            className="formInput"
            id="floorNo"
            placeholder="Floor/Suite/Office"
            value={this.state.floorNo}
            onChange={this.handleFormInput}
            type="text"
          />
          <input
            className="formInput"
            id="cityRegion"
            placeholder="City"
            value={this.state.cityRegion}
            onChange={this.handleFormInput}
            type="text"
          />
          <div className="displayFlexOnboard">
            <input
              className="formInput"
              id="addressState"
              value={this.state.addressState}
              placeholder="State"
              onChange={this.handleFormInput}
              type="text"
            />
            <input
              className="formInput"
              id="zipCode"
              value={this.state.zipCode}
              onChange={this.handleFormInput}
              placeholder="ZIP Code"
              type="text"
            />
          </div>
        </div>
        <div style={{ height: "490px" }} className="onboardForm">
          <h3> Personal Information </h3>
          <p className="subtitle">
            To verify the executive’s identity, we’re required to ask for the
            last 4 digits of their SSN. This information – as well as any
            information collected within this form – is securely encrypted with
            industry-leading practices, and will never be shared.
          </p>
          <MuiThemeProvider theme={dateTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker"
                label="Executive's Date of Birth"
                value={this.state.execDob}
                onChange={this.handleDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
          <input
            className="formInput"
            id="execSSN"
            placeholder="Executive SSN (Last 4 digits)"
            value={this.state.execSSN}
            onChange={this.handleFormInput}
            type="text"
          />
          <div
            style={{ top: "68px", marginTop: "35px" }}
            className="formButtons"
          >
            <button onClick={this.props.prevStep} className="form__button">
              <ArrowBackIosIcon fontSize="small" />
              Back
            </button>
            <button
              onClick={() => this.handleSubmit()}
              className={
                this.state.execFirstName === "" ||
                this.state.execLastName === "" ||
                this.state.execTitle === "" ||
                this.state.execPhone === "" ||
                this.state.execDob === ""
                  ? "blueForm__buttonDisabled"
                  : "blueForm__button"
              }
              disabled = {this.state.execFirstName === "" ||
              this.state.execLastName === "" ||
              this.state.execTitle === "" ||
              this.state.execPhone === "" ||
              this.state.execDob === "" ? true : false}
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
