import React, { Component } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { validateEmail } from "../Utilities/SharedFunctions";
import { CircularProgress } from "@material-ui/core";
import "../Styles/login.css";
import {
  grant_type_pass,
  client_id,
  client_secret,
  scope,
} from "../Credentials";
import CustomSnackbar from "../Components/SharedComponents/CustomSnackbar";
import api from "../Services/apiCalls";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      validEmail: false,
      password: "",
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
    };
    this.handleFormInput = this.handleFormInput.bind(this);
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

  handleLogin = async () => {
    localStorage.clear();
    this.setState({ isLoading: true });

    let bodyFormData = new URLSearchParams();
    bodyFormData.append("username", this.state.email);
    bodyFormData.append("password", this.state.password);
    bodyFormData.append("client_secret", client_secret);
    bodyFormData.append("client_id", client_id);
    bodyFormData.append("scope", scope);
    bodyFormData.append("grant_type", grant_type_pass);

    let tokenformData = new URLSearchParams();
    tokenformData.append("username", this.state.email);
    tokenformData.append("password", this.state.password);
    tokenformData.append("client_secret", client_secret);
    tokenformData.append("client_id", client_id);
    tokenformData.append("scope", "openid offline_access");
    tokenformData.append("grant_type", grant_type_pass);

    try {
      let res = await api.login(bodyFormData); //actual login
      let accessToken = res.data.access_token;
      localStorage.setItem("ac_tkn", accessToken);
      let res2 = await api.login(tokenformData); //get token assistant
      let refresh_token = res2.data.refresh_token;
      let getNewTokenData = new URLSearchParams();
      getNewTokenData.append("client_secret", client_secret);
      getNewTokenData.append("client_id", client_id);
      getNewTokenData.append("scope", "openid offline_access");
      getNewTokenData.append("grant_type", "refresh_token");
      getNewTokenData.append("refresh_token", refresh_token);
      let res3 = await api.login(getNewTokenData); //get actual refresh token
      console.log(res3);
      localStorage.setItem("refreshToken", res3.data.refresh_token);
      this.setState({ isLoading: false });
      setTimeout(() => this.props.history.push("/Onboarding"), 1000);
    } catch (error) {
      console.error(error);
      this.setState({
              isLoading: false,
              snackbaropen: true,
              responseStatus: "failed",
              snackTitle:'Login failed',
             // snackbarmsg: error.response.data.error_description,
            });
    }

  
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
          <div className="SignUpForm">
            <div className="titleBox">
              <span className="blueTitle">Sign in</span>
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
              <label>Password</label>
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleFormInput}
                className="passwordForm"
                required
              />
              <div className="separator">
                <hr className="dottedLine" />
                <span>or</span>
                <hr className="dottedLine" />
              </div>
              <div className="googleSignup">
                <img
                  src="assets/icons/google.png"
                  alt="G"
                  className="googleIcon"
                />
                <span>Sign in with Google</span>
              </div>
              <div className="privacyText">
                <p>
                  By signing up, you agree to our terms of service and privacy
                  policy.
                </p>

                <button
                  className={
                    !this.state.validEmail || this.state.password === ""
                      ? "SignUpFormsSubmitDisabled"
                      : "SignUpFormsSubmit"
                  }
                  disabled={
                    !this.state.validEmail || this.state.password === ""
                      ? true
                      : false
                  }
                  onClick={() => this.handleLogin()}
                >
                  {this.state.isLoading ? (
                    <CircularProgress style={{ color: "white" }} size={20} />
                  ) : (
                    "Login"
                  )}
                </button>
                {/* <p onClick={this.props.history.push("/PasswordReset")} style={{textDecoration:'underline',color:'blue'}}>
                  Forgot password?
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
