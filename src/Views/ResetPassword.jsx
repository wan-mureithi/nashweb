import React, { Component } from "react";
import Menubar from "../Components/LandingPages/Menubar";
import '../Styles/onboarding.css';
import { Grid } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { numberCheck, charCheck, alphaCheck,passwordStrength } from "../Utilities/SharedFunctions";
import { CircularProgress } from "@material-ui/core";
import api from "../Services/apiCalls";
import CustomSnackbar from "../Components/SharedComponents/CustomSnackbar";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      newPassword: "",
      confirmPassword: "",
      setOpen: false,
      signupData: null,
      username: "",
      validPassword: false,
      passwordConfirm: false,
      token: '',
      userID:'',
      showValidationHelper: false,
      isLoading: false
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
  }
  componentDidMount(){
    let searchParams = new URLSearchParams(window.location.search);
    let token = searchParams.get("token");
    
    let id = searchParams.get("id");
    //let encoded =  encodeURIComponent(token);
    this.setState({ token: token ,userID: id });
  }
  handleFormInput(event) {
    this.setState({ [event.target.id]: event.target.value });
    if (event.target.id === "newPassword" && event.target.value.length > 0) {
      this.setState({
        showValidationHelper: true,
        confirmPassword: "",
        passwordConfirm: false,
      });
      var validationArray = [
        event.target.value.length < 8 ? false : true,
        alphaCheck(event.target.value),
        numberCheck(event.target.value),
        charCheck(event.target.value),
      ];
      var numOfTrue = validationArray.filter(function (x) {
        return x === true;
      }).length;

      if (passwordStrength(event.target.value)) {
        this.setState({
          validPassword: true,
          validCount: numOfTrue,
        });
      } else {
        this.setState({
          validPassword: false,
          showValidationHelper: true,
          validCount: numOfTrue,
        });
      }
    } else {
      this.setState({ validPassword: false, showValidationHelper: false });
    }
  }
  confirmPassword(event) {
    if (event.target.value !== "" && this.state.validPassword) {
     // this.setState({ showValidationHelper: false });
      if (event.target.value === this.state.newPassword) {
        this.setState({
          passwordConfirm: true,
          confirmPassword: event.target.value,
        });
      } else {
        this.setState({
          passwordConfirm: false,
          confirmPassword: event.target.value,
        });
      }
    } else {
      this.setState({
        passwordConfirm: false,
        confirmPassword: event.target.value,
      });
    }
  }
  handleSubmit = async () => {
    this.setState({ isLoading: true });
    const url = `Users/ConfirmPasswordReset/${this.state.userID}`
    let payload = {
      password: this.state.newPassword,
      token: this.state.token
    }
    try {
      let response = await api.setPassword(url,payload);
      this.setState({ username: response.data.response_data.user_name,isLoading: false});
      setTimeout(() => this.props.history.push("/Login"), 1000);
    } catch (error) {
      console.log(error)
      this.setState({
        isLoading: false,
        snackbaropen: true,
        responseStatus: "failed",
        snackTitle:'Password reset failed',
       snackbarmsg: error.response.message,
      });
    }
  
  }
  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };
  render() {
    return (
      <div className="verifyEmail">
        <CustomSnackbar
          hideAlert={this.snackbarClose}
          showSnack={this.state.snackbaropen}
          hideSnack={this.snackbarClose}
          response={this.state.responseStatus}
          title={this.state.snackTitle}
          messagetxt={this.state.snackbarmsg}
        />
        <Menubar />
        <div className="cardReady">
          <div
            style={{ width: "1300px", margin: "auto", height: "700px" }}
            className="cardReady-content"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <img
                  className="cardsStr8"
                  src="/assets/img/cards-str8.png"
                  alt=""
                />
                <div className="cardReadytexts">
                  <div style={{ width: "145px" }} className="bluetitle">
                    <span style={{ marginLeft: "8px" }}>Forgot  Password</span>
                  </div>
                  <div className="blacktitle2">
                    <span
                      style={{
                        marginBottom: "35px",
                        fontWeight: "800",
                        width: "100%",
                      }}
                    >
                      Create a new password <br />  to continue using Nash
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div
                  style={{ height: "411px", padding: "0", width: "520px" }}
                  className="signupForm-container"
                >
                  <div
                    style={{ padding: "40px 30px 0 45px" }}
                    className="signupForm-content"
                  >
                    <input
                      className="formInput"
                      id="newPassword"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleFormInput}
                      value={this.state.newPassword}
                    />
                    <input
                      id="confirmPassword"
                      type="password"
                      value={this.state.confirmPassword}
                      onChange={this.confirmPassword}
                      placeholder="Confirm Password"
                      className="formInput"
                      style={
                        !this.state.passwordConfirm &&
                        this.state.confirmPassword !== ""
                          ? { border: "2px solid #F05050" }
                          : null
                      }
                      required
                    />
                     {!this.state.passwordConfirm &&
                  this.state.confirmPassword !== "" ? (
                    <div className="PasswordConfirm">
                      <span>! Passwords do not match</span>
                    </div>
                  ) : null}
                    <p className="descText">
                      Passwords should contain three of the four character
                      types: Uppercase letters: A-Z. Lowercase letters: a-z.
                      Numbers: 0-9.
                    </p>
                  </div>
                  <div className="form__footer">
                    
                    
                    <button style ={{width:'220px'}}
                      onClick={() => this.handleSubmit()}
                      className="blueForm__button"
                    >
                      {this.state.isLoading ? (
                    <CircularProgress style={{ color: "white" }} size={20} />
                  ) : (
                    <>
                    Submit
                      <ArrowForwardIosIcon fontSize="small" />
                    </>
                  )}
                      
                    </button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
export default ResetPassword;
