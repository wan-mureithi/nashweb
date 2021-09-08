import React, { Component } from "react";
//import Menubar from "../Components/LandingPages/Menubar";
import "../Styles/onboarding.css";
import { Grid, Select, MenuItem } from "@material-ui/core";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/calendar.css";
//import { KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  withStyles,
  createTheme,
  Modal,
  Backdrop,
  MuiThemeProvider,
} from "@material-ui/core";
import api from "../Services/apiCalls";
import CustomSnackbar from "../Components/SharedComponents/CustomSnackbar";
import { CircularProgress } from "@material-ui/core";
import TopbarMain from "../Components/SharedComponents/TopbarMain";

const stylesModal = (theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: "white",
    border: "none",
    borderRadius: "5px",
    boxShadow: "inherit",
  },
  paper2: {
    height: "350px",
    width: "620px",
    background: "white",
    border: "none",
    borderRadius: "10px",
    textAlign: "center",
  },
  container: {
    minHeight: 500,
    overflowX: "hidden",
  },
  textField: {
    width: "100%",
    background: "#efefef",
    border: "0.3px solid #949494",
    height: "64px",
    borderRadius: "8px",
    padding: "10px 25px",
    marginTop: "10px",
  },
});
const themeModal = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(37, 43, 51, 0.5)",
        backdropFilter: "blur(2px)",
      },
    },
  },
});
const dropdown = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#090909",
        borderRadius: "10px",
      },
    },

    MuiMenuItem: {
      root: {
        color: "white",
      },
    },
  },
});
const MenuProps = {
  style: {
    marginTop: "5px",
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
};
class ScheduleMeeting extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      meetingPurpose: "",
      firstName: "",
      lastName: "",
      meetingDate: new Date(),
      setOpen: false,
      successOpen: false,
      view: 0,
      selectedTimeZone: "Eastern Standard Time GMT-5:00",
      duration: 15,
      meetingTime: "11:30",
      isLoading: false,
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }
  handleFormInput(event) {
    if (event.target.id === "newPassword" && event.target.value.length > 0) {
      this.setState({
        passwordConfirm: false,
      });
    } else {
      this.setState({ [event.target.id]: event.target.value });
    }
  }
  handleOpen() {
    this.setState({ setOpen: !this.state.setOpen });
  }
  handleSuccess() {
    this.setState({ setOpen: false, successOpen: !this.state.successOpen });
  }
  handleDate = (date) => {
    this.setState({ meetingDate: date });
  };
  handleSubmit = async () => {
    const url = "Business/ScheduleMeeting";
    let payload = {
      userId: "",
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.email,
      meetingPurpose: this.state.meetingPurpose,
      timezone: this.state.selectedTimeZone,
      duration: this.state.duration,
      meetingDate:
        this.state.meetingDate.toDateString() + " " + this.state.meetingTime,
    };
    console.log(payload);
    try {
      let res = await api.postRequest(url, payload);
      console.log(res);
      this.setState({ isLoading: false });
      //if(res.data.status_code !== 200)
      this.handleSuccess();
    } catch (error) {
      console.log(error.response);
      this.setState({
        isLoading: false,
        snackbaropen: true,
        responseStatus: "failed",
        snackTitle: "Creation failed",
        snackbarmsg: error.response.errors.title,
      });
    }
  };
  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };
  render() {
    const { classes } = this.props;
    const timeZones = [
      { id: 0, value: "Eastern Standard Time GMT-5:00" },
      { id: 1, value: "Eastern African Time GMT+3:00" },
      { id: 2, value: "	Central Standard Time GMT-6:00" },
      { id: 3, value: "UTC Universal Coordinated Time	GMT" },
      { id: 4, value: "European Central Time	GMT+1:00" },
      { id: 5, value: "Eastern European Time GMT+2:00" },
      { id: 6, value: "(Arabic) Egypt Standard Time	GMT+2:00" },
      { id: 7, value: "India Standard Time		GMT+5:30" },
      { id: 8, value: "Middle East Time	GMT+3:30" },
      { id: 9, value: "Near East Time	GMT+4:00" },
    ];
    const durations = [
      { id: 0, time: 15, value: "15 min" },
      { id: 1, time: 30, value: "30 min" },
      { id: 2, time: 45, value: "45 min" },
      { id: 3, time: 60, value: "60 min" },
    ];
    return (
      <div>
        <TopbarMain />
        <CustomSnackbar
          hideAlert={this.snackbarClose}
          showSnack={this.state.snackbaropen}
          hideSnack={this.snackbarClose}
          response={this.state.responseStatus}
          title={this.state.snackTitle}
          messagetxt={this.state.snackbarmsg}
        />
        <div id="header-container" className="header-container">
          <div style={{ maxWidth: "1300px", margin: "auto", height: "1000px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <div
                  style={{ margin: "334px 25px 0 58px" }}
                  className="cardReadytexts"
                >
                  <div style={{ width: "120px" }} className="bluetitle">
                    <span style={{ marginLeft: "8px" }}>CONTACT US</span>
                  </div>
                  <div className="blacktitle2">
                    <span
                      style={{
                        marginBottom: "35px",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      Schedule a meeting <br /> with the team
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid
                style={{ paddingTop: "100px" }}
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
              >
                <img
                  style={{
                    height: "950px",
                    mixBlendMode: "color-burn",
                    position: "absolute",
                    top: "40px",
                    left: "115px",
                    zIndex: "-2",
                  }}
                  src="/assets/img/diagonalHero4.png"
                  alt=""
                />
                <div
                  style={{
                    position: "absolute",
                    right: "200px",
                    padding: "0",
                    width: "520px",
                    height: "530px",
                  }}
                  className="signupForm-container"
                >
                  <div
                    style={{ padding: "30px 30px 0 45px" }}
                    className="signupForm-content"
                  >
                    <div
                      style={{ marginBottom: "0" }}
                      className="displayFlexOnboard"
                    >
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
                      id="email"
                      placeholder="Executive's email address"
                      value={this.state.email}
                      onChange={this.handleFormInput}
                      type="text"
                    />
                    <textarea
                      style={{ height: "170px" }}
                      className="textareaInput"
                      id="meetingPurpose"
                      placeholder="Issue"
                      onChange={this.handleFormInput}
                      value={this.state.meetingPurpose}
                      rows="5"
                    />
                    <div className="ModalFooter">
                      <button
                        disabled={
                          this.state.firstName !== "" &&
                          this.state.lastName !== "" &&
                          this.state.email !== "" && 
                          this.state.meetingPurpose !== ""
                            ? false
                            : true
                        }
                        className={
                          this.state.firstName !== "" &&
                          this.state.lastName !== "" &&
                          this.state.email !== "" && 
                          this.state.meetingPurpose !== ""
                            ? "SignUpFormsSubmit"
                            : "SignUpFormsSubmitDisabled"
                        }
                        style={{ width: "125px", float: "right" }}
                        onClick={() => this.handleOpen()}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <MuiThemeProvider theme={themeModal}>
          <Modal
            className={classes.modal}
            open={this.state.setOpen}
            onClose={() => this.handleOpen()}
            closeAfterTransition
            BackdropComponent={Backdrop}
          >
            <div className={classes.paper}>
              <div
                style={{ width: "900px", height: "630px" }}
                className="ModalPaper"
              >
                <h3>Schedule a meeting with the team</h3>
                <p>
                  Your business limit on Nash is determined in part by your
                  account balances. Please link all your business bank accounts.
                </p>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={6}>
                    <Calendar
                      value={this.state.meetingDate}
                      minDate={new Date()}
                      onChange={this.handleDate}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <div>
                      <p>Time zone</p>
                      <MuiThemeProvider theme={dropdown}>
                        <Select
                          className="selectButton"
                          disableUnderline={true}
                          MenuProps={MenuProps}
                          onChange={(e) =>
                            this.setState({ selectedTimeZone: e.target.value })
                          }
                          value={this.state.selectedTimeZone}
                        >
                          {timeZones.map((option, key) => (
                            <MenuItem
                              value={option.value}
                              key={key}
                              style={{ fontFamily: "Poppins" }}
                            >
                              {option.value}
                            </MenuItem>
                          ))}
                        </Select>
                      </MuiThemeProvider>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <p>Duration</p>

                          <MuiThemeProvider theme={dropdown}>
                            <Select
                              className="selectButton"
                              disableUnderline={true}
                              MenuProps={MenuProps}
                              onChange={(e) =>
                                this.setState({ duration: e.target.time })
                              }
                              value={this.state.duration}
                              style={{ width: "200px" }}
                            >
                              {durations.map((option, key) => (
                                <MenuItem
                                  value={option.time}
                                  key={key}
                                  style={{ fontFamily: "Poppins" }}
                                >
                                  {option.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </MuiThemeProvider>
                        </div>
                        <div>
                          <p>Time</p>
                          <input
                            style={{
                              width: "200px",
                              border: "1px solid #bababa",
                              margin: "0",
                              height: "55px",
                            }}
                            className="formInput"
                            id="meetingTime"
                            value={this.state.meetingTime}
                            onChange={this.handleFormInput}
                            type="time"
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "512px",
                  width: "900px",
                  justifyContent: "space-between",
                  paddingLeft: "40px",
                  paddingRight: "60px",
                }}
                className="form__footer"
              >
                <button
                  style={{
                    width: "180px",
                    textAlign: "left",
                    cursor:"pointer"
                  }}
                  className="cancelButton"
                  onClick={() => this.setState({setOpen: false})}
                >
                  Cancel
                </button>
                <button
                  id="scheduledMeeting"
                  style={{ width: "180px", height: "59px", fontSize: "16px" }}
                  onClick={() => this.handleSubmit()}
                  className="SignUpFormsSubmit"
                >
                  {this.state.isLoading ? (
                    <CircularProgress style={{ color: "white" }} size={20} />
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </div>
          </Modal>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Modal
            className={classes.modal}
            open={this.state.successOpen}
            onClose={() => this.handleSuccess()}
            closeAfterTransition
            BackdropComponent={Backdrop}
          >
            <div className={classes.paper2}>
              <div className="modalHead">
                <p
                  style={{
                    margin: 0,
                    paddingTop: "58px",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  Meeting Session Scheduled!
                </p>
                <img
                  style={{ paddingTop: "7px" }}
                  src="/assets/img/scheduledMeet.svg"
                  alt=""
                />
              </div>
              <div
                style={{ width: "380px", paddingTop: "55px", margin: "0 auto" }}
                className="modalTail"
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "27px",
                  }}
                >
                  Thank you for signing up to speak to a Nash Expert. Please
                  check your email for confirmation of meeting
                </p>
              </div>
            </div>
          </Modal>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default withStyles(stylesModal)(ScheduleMeeting);
