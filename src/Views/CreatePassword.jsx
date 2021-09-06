import React, { Component } from "react";
import Menubar from "../Components/LandingPages/Menubar";
import '../Styles/onboarding.css';
import { Grid } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { grant_type_pass,client_id,client_secret,scope } from "../Credentials";
import { numberCheck, charCheck, alphaCheck,passwordStrength } from "../Utilities/SharedFunctions";
import { CircularProgress } from "@material-ui/core";
import api from "../Services/apiCalls";
import CustomSnackbar from "../Components/SharedComponents/CustomSnackbar";

class CreatePassword extends Component {
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
      isLoading: false,
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
  }
  componentDidMount(){
    let searchParams = new URLSearchParams(window.location.search);
    let token = searchParams.get("token");
    let id = searchParams.get("id");
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
    const url = `Users/SetPassword/${this.state.userID}`
    let payload = {
      password: this.state.newPassword,
      token: this.state.token
    }
    //console.log(url);
    try {
      let response = await api.setPassword(url,payload);
      this.setState({ username: response.data.response_data.user_name,isLoading: false});
      //setTimeout(() => this.props.history.push("/Login"), 1000);
      this.handleLogin();
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false})
    }
    
  }
  handleLogin = async () => {
    localStorage.clear();
    this.setState({ isLoading: true });

    let bodyFormData = new URLSearchParams();
    bodyFormData.append("username", this.state.username);
    bodyFormData.append("password", this.state.newPassword);
    bodyFormData.append("client_secret", client_secret);
    bodyFormData.append("client_id", client_id);
    bodyFormData.append("scope", scope);
    bodyFormData.append("grant_type", grant_type_pass);

    let tokenformData = new URLSearchParams();
    tokenformData.append("username", this.state.username);
    tokenformData.append("password", this.state.newPassword);
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
  }
  //  handleLogin() {
  //    const endpoint = "http://aba8344df27d84302869970ebbd29fef-1413183981.us-east-2.elb.amazonaws.com/Connect/Token";
  //    localStorage.clear();
  //    let bodyFormData = new URLSearchParams();
  //    bodyFormData.append('username', this.state.username); 
  //    bodyFormData.append('password', this.state.newPassword); 
  //    bodyFormData.append('client_secret',client_secret );
  //    bodyFormData.append('client_id',client_id );
  //    bodyFormData.append('scope',scope );
  //    bodyFormData.append('grant_type',grant_type_pass );
  //   //initial login to get access token used to onboard
  //    axios.post(endpoint,bodyFormData).then(res => {
  //      console.log(res)
  //      localStorage.setItem("ac_tkn",  JSON.stringify(res.data.access_token));
  //      this.props.history.push("/Onboarding");
  //    }).catch(err=>{
  //      console.log(err.response)
  //    })
  //  }
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
                  <div style={{ width: "85px" }} className="bluetitle">
                    <span style={{ marginLeft: "8px" }}>SIGN UP</span>
                  </div>
                  <div className="blacktitle2">
                    <span
                      style={{
                        marginBottom: "35px",
                        fontWeight: "800",
                        width: "100%",
                      }}
                    >
                      Set up your Nash <br /> password to get started
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
                    <button 
                    onClick={() => this.props.history.push("/ScheduleMeeting")}
                     style={{
                          width:'210px',
                          textAlign: "left"
                        }} className="form__button">
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "500",
                          marginRight: "10px",
                          textAlign: "left"
                        }}
                      >
                        <span style={{ fontSize: "8px", fontWeight: "400" }}>
                          For onboarding with a Nash Expert
                        </span>
                        <br /> Book a Virtual Session
                      </div>
                      <ArrowForwardIosIcon fontSize="small" />
                    </button>
                    
                    <button style ={{width:'220px'}}
                      onClick={() => this.handleSubmit()}
                      className="blueForm__button"
                      disabled = { !this.state.passwordConfirm ? true : false }
                    >
                      {this.state.isLoading ? (
                    <CircularProgress style={{ color: "white" }} size={20} />
                  ) : (
                    <>
                    <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "500",
                          marginRight: "10px",
                          textAlign: "left"
                        }}
                      >
                        <span style={{ fontSize: "8px", fontWeight: "400" }}>
                          For Self-onboarding
                        </span>
                        <br /> Continue with application
                      </div>
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
export default CreatePassword;
