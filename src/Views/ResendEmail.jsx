import React, { Component } from "react";
import Menubar from "../Components/LandingPages/Menubar";
import "../Styles/onboarding.css";
import api from "../Services/apiCalls";

class ResendEmail extends Component {
  constructor() {
    super();
    this.state = {
      userID: "",
      view: 0,
      isLoading: false,
      
    };
  }
  componentDidMount(){
    let searchParams = new URLSearchParams(window.location.search);
    
    let id = searchParams.get("id");
    this.setState({ userID: id });
  }

  handleSubmit  = async () => {
    this.setState({ isLoading: true })
    
    const url = `Users​/ResendEmailValidation​/${this.state.userID}`;
    
    try {
      let response = await api.getRequest(url);
      console.log(response)
      this.setState({
        isLoading: false
      });
      this.props.nextStep();
    } catch (error) {
      console.error(error.response);
    }
  };
  render() {
    return (
      <div className="verifyEmail">
        <Menubar />
        <div className="verify__background">
          <div className="verify__container">
            <div className="content__header">
              <p
                style={{
                  width: "110px",
                  fontWeight: "500px",
                  margin: "10px auto",
                  paddingLeft: "24px"
                }}
                className="bluetitle"
              >
                LINK EXPIRED
              </p>
              <p className="title"> Email verification failed </p>
              <p className="sometxt">
                We’ve re-sent the confirmation link to your email.
                <br /> Click the link to verify your account ownership and
                continue with the application.
              </p>
            </div>
            <div style={{height:'170px'}} className="content__footer">
              <p>
                It may take a few minutes for the email to arrive. Double-check
                your spam folder.
              </p>
              <hr />
              <div className="resend">
                <button
                  onClick={() => this.handleSubmit()}
                  style={{ width: "170px" }}
                  className="SignUpFormsSubmit"
                >
                  Resend Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ResendEmail;