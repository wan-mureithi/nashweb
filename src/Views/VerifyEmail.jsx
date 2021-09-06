import React, { Component } from "react";
//import Menubar from "../Components/LandingPages/Menubar";
import "../Styles/onboarding.css";
import TopbarMain from "../Components/SharedComponents/TopbarMain";

class VerifyEmail extends Component {
  render() {
    return (
      <div className="verifyEmail">
        <TopbarMain />
        <div className="verify__background">
          <div className="verify__container">
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
              <p className="title"> Verify your email</p>
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
                <p>Did not get an email?</p>
                <button
                  onClick={() => this.props.history.push("/CreatePassword")}
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
export default VerifyEmail;
