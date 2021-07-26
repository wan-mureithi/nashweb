import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class Leadership extends Component {
  render() {
    return (
      <div>
        <div
          style={{ marginBottom: "45px", height: "490px" }}
          className="onboardForm"
        >
          <h3>Take us to your leaders</h3>
          <p style={{marginBottom:'55px'}} className="subtitle">
            Provide information about a member of your executive team, like a
            CFO, Managing Director, President, etc.
          </p>
          <div className="myInfo">
            <input type="radio" value="" />
            <span>
              Use my information, I am a member of the executive team.
            </span>
          </div>
          <div className="displayFlexOnboard">
            <input className="formInput" id="firstName" placeholder="First Name" type="text" />
            <input className="formInput" id="lastName" placeholder="Last Name" type="text" />
          </div>
          <input
            className="formInput"
            id="title"
            placeholder="Title"
            type="text"
          />
        </div>
        <div style={{ marginBottom: "45px",height: "370px" }} className="onboardForm">
          <h3> Contact Information </h3>
          <p className="subtitle">
            We take privacy seriously, and will never share this information
            with third parties for marketing purposes.
          </p>
          <input
            className="formInput"
            id="email"
            placeholder="Executive’s Email address"
            type="text"
          />
          <input
            className="formInput"
            id="businessdba"
            placeholder="Executive’s Phone address"
            type="text"
          />
          
        </div>
        
        <div style={{marginBottom: "45px", height: "560px" }} className="onboardForm">
          <h3> Executive’s Home Address </h3>
          <p className="subtitle">
            Please provide a personal home address, as we are unable to verify
            PO box addresses.
          </p>
          <input
            className="formInput"
            id="streetAddress"
            placeholder="Street Address"
            type="text"
          />
          <input
            className="formInput"
            id="floorNo"
            placeholder="Floor/Suite/Office"
            type="text"
          />
          <input
            className="formInput"
            id="cityRegion"
            placeholder="City"
            type="text"
          />
          <div className="displayFlexOnboard">
            <input className="formInput"  id="state" placeholder="State" type="text" />
            <input className="formInput" id="zipcode" placeholder="ZIP Code" type="text" />
          </div>
        </div>
        <div style={{ height: "490px" }} className="onboardForm">
          <h3> Personal Information </h3>
          <p className="subtitle">
          To verify the executive’s identity, we’re required to ask for the last 4 digits of their SSN.
           This information – as well as any information collected within this form – is securely encrypted with industry-leading practices, and will never be shared.
          </p>
          <input
            className="formInput"
            id="businessName"
            placeholder="Executive’s Birth Date"
            type="text"
          />
          <input
            className="formInput"
            id="ssn"
            placeholder="Executive SSN (Last 4 digits)"
            type="text"
          />
          <div style={{top:"68px", marginTop:'35px'}}  className="formButtons">
             <button onClick={this.props.prevStep} className="form__button">
                 <ArrowBackIosIcon fontSize="small"/>
                 Back
             </button>
             <button onClick={this.props.nextStep} className="blueForm__button"> 
             Save & Continue 
             <ArrowForwardIosIcon fontSize="small"/>
              </button>
                </div>
        </div>
      </div>
    );
  }
}
