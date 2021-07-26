import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class MoreDetails extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: "50px" }} className="onboardForm">
          <h3>Additional Details</h3>
          <p className="subtitle">
            We use this information to understand your business identity and
            determine how Nash can help you.
          </p>
          <h3>Incorporation Details</h3>
          <input className="formInput"  id="dateEst" placeholder="Date Established" type="text" />
          <input
            id="stateOfIncorp"
            className="formInput"
            placeholder="State of incorporation"
            type="text"
          />
          <input
          className="formInput"
            id="monthlyExpense"
            placeholder="Current Monthly Business Spend"
            type="text"
          />

          <textarea
            id="businessDesc"
            placeholder="Business Description"
            rows="5"
          />
          <div style={{top:"45px"}} className="formButtons">
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
      </div>
    );
  }
}
