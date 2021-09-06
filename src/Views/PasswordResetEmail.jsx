import React, { Component } from 'react';
import CustomSnackbar from "../Components/SharedComponents/CustomSnackbar";
import api from "../Services/apiCalls";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { validateEmail } from "../Utilities/SharedFunctions";
import { CircularProgress } from "@material-ui/core";
import "../Styles/login.css";
export default class PasswordResetEmail extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          setOpen: false,
          signupData: null,
          validPassword: false,
          passwordConfirm: false,
          token: '',
          userID:'',
          showValidationHelper: false,
          isLoading: false
        };
        this.handleFormInput = this.handleFormInput.bind(this);
      }
      handleSubmit = async () => {
        this.setState({ isLoading: true });
        const url = `Users/ResetPassword/${this.state.email}`
        let payload = {
          email: this.state.email
        }
        try {
          let response = await api.setPassword(url,payload);
          this.setState({ userID: response.data.response_data.user_id,isLoading: false});
          setTimeout(() => this.props.history.push("/Login"), 1000);
        } catch (error) {
          console.log(error.response)
          this.setState({ isLoading: false,snackTitle:error.response.message})
        }
    }
    handleFormInput(event) {
        this.setState({ [event.target.id]: event.target.value });
        if (event.target.id === "email") {
          this.setState({ validEmail: validateEmail(event.target.value) });
        }
      }
      snackbarClose = () => {
        this.setState({ snackbaropen: false });
      };
    render() {
        return (
            <div className="container">
                <CustomSnackbar
          hideAlert={this.snackbarClose}
          showSnack={this.state.snackbaropen}
          hideSnack={this.snackbarClose}
          response={this.state.responseStatus}
          title={this.state.snackTitle}
          messagetxt={this.state.snackbarmsg}
        />
                <div style={{ height: "100vh" }} className="left_container">
          <div className="header">
            <img
              style={{ height: "40px" }}
              src="assets/whiteLogo.svg"
              alt="logo"
            />
          </div>
          <div className="prosList2">
            <div className="panelItem2">
              <CheckCircleIcon style={{ marginTop: "5px", color: "#ffc727" }} />
              <div style={{ paddingLeft: "20px" }}>
                <span>All in one place</span>
                <p className="greyText">
                  Initiate, approve, and reconcile payments from one interface
                </p>
              </div>
            </div>
            <div className="panelItem2">
              <CheckCircleIcon style={{ marginTop: "5px", color: "#ffc727" }} />
              <div style={{ paddingLeft: "20px" }}>
                <span>Keep control</span>
                <p className="greyText">
                  Custom, robust approval workflows for your team
                </p>
              </div>
            </div>
            <div className="panelItem2">
              <CheckCircleIcon
                style={{ marginTop: "10px", color: "#ffc727" }}
              />
              <div style={{ paddingLeft: "20px" }}>
                <span>Go live faster</span>
                <p>Build and scale programmatic payments with our API</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right_container">
            <div style={{ height: "400px" }} className="SignUpForm">
            <div className="titleBox">
              <span className="blueTitle">Reset password</span>
            </div>
            <div className="content">
            <label>Email</label>
              <input
                id="email"
                type="email"
                value={this.state.email}
                style={
                  this.state.email !== "" && this.state.validEmail !== true
                    ? { border: "1px solid #F05050" }
                    : null
                }
                onChange={this.handleFormInput}
                required
              />
              <button
                  style={{marginTop:"30px"}}
                  className={
                    !this.state.validEmail || this.state.email === ""
                      ? "SignUpFormsSubmitDisabled"
                      : "SignUpFormsSubmit"
                  }
                  disabled={
                    !this.state.validEmail || this.state.email === ""
                      ? true
                      : false
                  }
                  onClick={() => this.handleSubmit()}
                >
                  {this.state.isLoading ? (
                    <CircularProgress style={{ color: "white" }} size={20} />
                  ) : (
                    "Send Email"
                  )}
                </button>
            </div>
            </div>
        </div>
            </div>
        )
    }
}
