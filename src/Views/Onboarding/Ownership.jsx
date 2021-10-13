import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { validateEmail } from "../../Utilities/SharedFunctions";
import { Divider } from "@material-ui/core";
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
import api from "../../Services/apiCalls";
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

export default class Ownership extends Component {
  constructor() {
    super();
    this.state = {
      owners: [],
      firstName: "",
      lastName: "",
      phoneNumber: "",
      title: "",
      email: "",
      streetAddress: "",
      floorNo: "",
      city: "",
      stateRegion: "",
      zipCode: "",
      dob: new Date(),
      ssn: "",
      validEmail: false,
      view: 0,
      isLoading: false,
      noOtherOwner: false,
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);

  }
  componentDidMount() {
  //  console.log(this.props.businessid);
  this.getData();
  }
  getData(){
    let applicationData = this.props.onboardingData;
    if(applicationData.businessOwners[0] !== undefined){
      this.setState({owners: applicationData.businessOwners});
    }
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
  handleDate = (date) => {
    this.setState({ dob: date });
  };
  goNext() {
    if (this.state.noOtherOwner) {
      this.props.nextStep();
    }
  }
  handleRadioChange() {
    this.setState({ noOtherOwner: !this.state.noOtherOwner });
  }
 
  addNewItem = async () => {
    this.setState({ isLoading: true });
    // let obj = {
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   phoneNumber: this.state.phoneNumber,
    //   email: this.state.email,
    // };
    const url = "Business/AddBusinessOwner";
    let payload = {
      businessId: this.props.businessid,
      businessOwnerFirstName: this.state.firstName,
      businessOwnerLastName: this.state.lastName,
      businessOwnerTitle: this.state.title,
      businessOwnerEmailAddress: this.state.email,
      businessOwnerPhoneNo: this.state.phoneNumber,
      businessOwnerStreetAddress: this.state.streetAddress,
      businessOwnerFloorNo: this.state.floorNo,
      businessOwnerCity: this.state.city,
      executiveCountryRegion: this.state.stateRegion,
      businessOwnerZipCode: this.state.zipCode,
      businessOwnerBirthDate: this.state.dob,
      identificationTypeId: 1,
      businessOwnerIdentificationNo: this.state.ssn,
    };
    
    try {
      let response = await api.postRequest(url, payload);
      console.log(response);
      this.setState({
        view: 0,
        isLoading: false,
      });
      // setTimeout(function() {
      //   window.location.reload();
      // }, 500);
    this.props.nextStep(3);
    } catch (error) {
      this.setState({
        isLoading: false,
        snackbaropen: true,
        responseStatus: "failed",
        snackTitle:'Creation failed',
        snackbarmsg: error.response.data.error_description,
      });
      console.error(error.response);
    }
  };
  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };
  render() {
    console.log(this.state.owners)
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
                    {owner.bioData.firstName} {owner.bioData.lastName}
                  </p>
                  <span style={{ fontSize: "14px", color: " #454545" }}>
                    {owner.bioData.emailAddress} <br />
                    {owner.bioData.phoneNo}
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
              <input
                id="noOtherOwner"
                type="radio"
                onChange={this.handleRadioChange}
                value={this.state.noOtherOwner}
              />
              <span>No other individual owns 25% or more of the company</span>
            </div>
            <div style={{ top: "35px" }} className="formButtons">
              <button onClick={this.props.prevStep} className="form__button">
                <ArrowBackIosIcon fontSize="small" />
                Back
              </button>
              <button
                onClick={this.props.nextStep}
                className= { !this.state.noOtherOwner ? "blueForm__buttonDisabled" : "blueForm__button"}
                disabled = {
                  !this.state.noOtherOwner ? true : false
                }
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
                placeholder="Executive’s phone number"
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

              <MuiThemeProvider theme={dateTheme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker"
                    label="Executive's Date of Birth"
                    value={this.state.dob}
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
          </>
        )}
      </div>
    );
  }
}
