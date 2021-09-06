import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import {
  withStyles,
  createTheme,
  Modal,
  Backdrop,
  MuiThemeProvider,
} from "@material-ui/core";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import Avatar from "@material-ui/core/Avatar";
//import { withRouter } from "react-router-dom";
import { Divider } from "@material-ui/core";

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
  container: {
    minHeight: 500,
    overflowX: "hidden",
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
        backgroundColor: "rgba(37, 43, 51, 0.5",
        backdropFilter: "blur(2px)",
      },
    },
  },
});
class BankDetails extends Component {
  constructor() {
    super();
    this.state = {
      bankDets: [],
      setOpen: false,
      view: 0,
      manualOpen: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleManualOpen = this.handleManualOpen.bind(this);
  }
  handleOpen() {
    this.setState({ setOpen: !this.state.setOpen });
  }
  handleManualOpen() {
    this.setState({ setOpen: false, manualOpen: !this.state.manualOpen });
  }
  render() {
    const { classes } = this.props;
    //console.log(this.state.manualOpen);
    return (
      <div>
        {this.state.view === 0 && (
          <div
            style={{ marginBottom: "50px", height: "auto" }}
            className="onboardForm"
          >
            <h3>Link your bank accounts</h3>
            <p style={{ marginBottom: "70px" }} className="subtitle">
              We use this information to securely confirm your business identity
              and manage your corporate account.
            </p>

            {this.state.bankDets.map((owner, index) => (
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
            <button className="plainButton" onClick={() => this.handleOpen()}>
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
                  <p>Connect New Bank Account</p>
                  <div></div>
                  <div style={{ width: "100px" }}></div>
                </div>
              </div>
            </button>

            <Divider light style={{ backgroundColor: "#e4e4e4",height:'0.3px' }} />

            <div style={{ top: "35px" }} className="formButtons">
              <button onClick={this.props.prevStep} className="form__button">
                <ArrowBackIosIcon fontSize="small" />
                Back
              </button>
              <button onClick={this.props.nextStep} className="blueForm__button">
                Save & Continue
                <ArrowForwardIosIcon fontSize="small" />
              </button>
            </div>
          </div>
        )}
        {/* <ChooseBankConnection handleOpen={this.handleOpen} setOpen={this.state.setOpen} /> */}
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
                style={{ width: "700px", height: "430px" }}
                className="ModalPaper"
              >
                <div className="ModalHeader" style={{ padding: "0px" }}>
                  <div>
                    <button
                      className="BackButton"
                      style={{ float: "right" }}
                      onClick={() => this.handleOpen()}
                    >
                      <img src="./assets/icons/close.svg" alt="x" />
                    </button>
                  </div>
                </div>

                <h3>Connect New Account</h3>
                <p>
                  Your business limit on Nash is determined in part by your
                  account balances. Please link all your business bank accounts.
                </p>
                <div className="bankMenus">
                  <div className="bankDiv">
                    <Avatar
                      style={{
                        margin: "0 auto",
                        width: "75px",
                        height: "75px",
                        background: "#3297F4",
                      }}
                    >
                      <AccountBalanceOutlinedIcon
                        fontSize="large"
                        style={{ color: "white" }}
                      />
                    </Avatar>
                    <p>Connect Automatically</p>
                  </div>
                  <div
                    className="bankDiv"
                    onClick={() => this.handleManualOpen()}
                  >
                    <Avatar
                      style={{
                        margin: "0 auto",
                        width: "75px",
                        height: "75px",
                        background: "#3297F4",
                      }}
                    >
                      <AccountBalanceOutlinedIcon
                        fontSize="large"
                        style={{ color: "white" }}
                      />
                    </Avatar>
                    <p>Connect Manually</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </MuiThemeProvider>
        <MuiThemeProvider theme={themeModal}>
          <Modal
            className={classes.modal}
            open={this.state.manualOpen}
            onClose={() => this.handleManualOpen()}
            closeAfterTransition
            BackdropComponent={Backdrop}
          >
            <div className={classes.paper}>
              <div
                style={{ width: "830px", overflowY: "auto", padding: "0" }}
                className="ModalPaper"
              >
                <div style={{ padding: "10px 40px 10px 60px" }}>
                  <h3>Connect Bank Account Manually</h3>
                  <p>
                    Please provide more information about your bank account
                    below. We’ll review this information to determine your
                    monthly spend limit across all your cards.
                  </p>
                </div>

                <div
                  style={{
                    width: "auto",
                    height: "auto",
                    boxShadow: "none",
                    background: "none",
                    top: "0",
                    paddingTop: "0",
                  }}
                  className="onboardForm"
                >
                  <div className="displayFlexOnboard">
                    <input
                      id="firstName"
                      placeholder="Account Type"
                      type="text"
                    />
                    <input
                      id="lastName"
                      placeholder="Bank account balance"
                      type="text"
                    />
                  </div>
                  <input
                    className="formInput"
                    id="routingNumber"
                    placeholder="Routing number"
                    type="text"
                  />
                  <input
                    className="formInput"
                    id="accountNumber"
                    placeholder="Account number"
                    type="text"
                  />
                  <input
                    className="formInput"
                    id="confirmAccount"
                    placeholder="Confirm Account number"
                    type="text"
                  />
                </div>
                <p className="disclaimerText">
                  By clicking “Connect Account”, you consent to Nash Financial
                  Corporation sharing your routing and account number with our
                  service provider. This will help us confirm that your bank and
                  account number are real so that we can connect your account.
                  If we are able to confirm the account, you authorize us to
                  connect your external account to your Ramp Financial
                  Corporation account.
                </p>
                <div
                  style={{
                    padding: "10px 40px",
                    display: "block",
                    width: "auto",
                    height: "auto",
                  }}
                  className="form__footer"
                >
                  <div style={{ marginTop: "-30px" }} className="formButtons">
                    <button className="form__button">
                      <ArrowBackIosIcon fontSize="small" />
                      Back
                    </button>
                    <button className="blueForm__button">
                      Save & Continue
                      <ArrowForwardIosIcon fontSize="small" />
                    </button>
                  </div>
                  <div
                    style={{
                      width: "500px",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    <p>
                      <span style={{ fontWeight: "500" }}>
                        Can’t find your bank account?{" "}
                      </span>{" "}
                      <br /> Manually connect using your bank’s account and
                      routing number.
                    </p>
                  </div>

                  <hr />
                  <p
                    style={{
                      width: "500px",
                      margin: "0 auto",
                      textAlign: "center",
                      fontSize: "11px",
                      marginBottom: "20px",
                    }}
                  >
                    Experiencing issues? Contact support@nasheq.co for help ↗.
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(stylesModal)(BankDetails);
