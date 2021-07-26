import React, { Component } from "react";
import SignupModal from "./SignupModal";
import { validateEmail } from "../Utilities/SharedFunctions";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber:"",
      setOpen: false,
      signupData: null
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
  }
  handleOpen() {
    this.setState({ setOpen: !this.state.setOpen });
  }

  handleFormInput(event) {
    if (event.target.id === "email") {
      this.setState({ validEmail: validateEmail(event.target.value) });
    }
    this.setState({ [event.target.id]: event.target.value });
  }
  handleNext(){
    var payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      workEmail: this.state.email,
      phoneNumber: this.state.phoneNumber
    }
    this.setState({ signupData: payload});
  }


  render() {
    return (
      <div>
        <div id="signupForm-container" className="signupForm-container">
          <div id="signupForm-content" className="signupForm-content">
            <div className="displayFlexSpace">
              <input
                id="firstName"
                placeholder="First Name"
                type="text"
                value={this.state.firstName}
                onChange={this.handleFormInput}
              />
              <input
                id="lastName"
                placeholder="Last Name"
                type="text"
                onChange={this.handleFormInput}
                value={this.state.lastName}
              />
            </div>
            <input
              className="formInput"
              id="email"
              placeholder="Your work email"
              type="text"
              onChange={this.handleFormInput}
              value={this.state.email}
            />
            <input
              className="formInput"
              id="phoneNumber"
              onChange={this.handleFormInput}
              placeholder="Phone number"
              type="text"
              value={this.state.phoneNumber}
            />
            <div className="signupFooter">
              <div style={{ width: "240px" }}>
                <p className="terms">
                  By accepting invite you are agreeing to Nash’s{" "}
                  <span style={{ color: "black", fontWeight: "600" }}>
                    Terms of service and privacy policy
                  </span>
                </p>
              </div>
              <div>
                <button style={{ width: "170px",height:'59px' }} onClick={()=>this.handleOpen()} className="SignUpFormsSubmit">Sign up</button>
              </div>
            </div>
          </div>
        </div>
        <SignupModal handleOpen={this.handleOpen} setOpen={this.state.setOpen} userData={this.state.userData}/>
      </div>
    );
  }
}
