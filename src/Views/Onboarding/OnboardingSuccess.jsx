import React, { Component } from "react";
import TopBar from "../../Components/LandingPages/TopBar";
import '../../Styles/onboarding.css';


class OnboardingSuccess extends Component {
  render() {
    return (
      <div className="verifyEmail">
        <TopBar />
        <div className="verify__background">
          <div style={{height:'550px'}} className="verify__container">
            <div className="content__header">
              <p
                style={{
                  width: "90px",
                  fontWeight: "500px",
                  margin: "10px auto",
                }}
                className="bluetitle"
              >
                THANK YOU
              </p>
              <p className="title"> Application completed successfully </p>
              <p className="sometxt">
                We’ve sent a confirmation to your email.
                <br /> Click the link to verify your account ownership and
                continue with the application.
              </p>
            </div>
            <div className="content__footer">
              <p>
                It may take a few minutes for the email to arrive. Double-check
                your spam folder.
              </p>
              <hr />
              <div className="resend">
               
                <button
                  onClick={() => this.props.history.push("/")}
                  style={{ width: "170px" }}
                  className="SignUpFormsSubmit"
                >
                  Return to home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OnboardingSuccess;
