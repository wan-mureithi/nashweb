import React, { Component } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default class BusinessDetails extends Component {
    render() {
        return (
            <div>
            <div style={{marginBottom:'50px'}} className="onboardForm">
                <h3>Tell us about your business</h3>
                <p className="subtitle">We’ll use this information to securely confirm your business identity and manage your corporate account.</p>

                <input className="formInput" id="businessName" placeholder="Legal Business Name" type="text"/>
                <input className="formInput" id="businessdba" placeholder="Business DBA"  type="text"/>
                <input className="formInput" id="nameOnCard" placeholder="Business Name on Physical Card" type="text"/>
                <input className="formInput" id="regNumber" placeholder="Business Registration Number"  type="text"/>
                <input className="formInput" id="businessWebsite" placeholder="Business Website"  type="text"/>
                <input className="formInput" id="businessPhone" placeholder="Business Phone Number"  type="text"/>
            </div>
            <div style={{ height:'605px'}} className="onboardForm">
            <h3> Business Information </h3>
            <p className="subtitle">Please input physical U.S. addresses only, no P.O. Boxes.</p>
            <input className="formInput" id="streetAddress" placeholder="Street Address" type="text"/>
                <input className="formInput" id="businessdba" placeholder="Floor/Suite/Office #"  type="text"/>
                <input className="formInput" id="nameOnCard" placeholder="City" type="text"/>
                <div className="displayFlexOnboard">
                <input className="formInput" id="state" placeholder="State" type="text" />
                <input className="formInput" id="zip" placeholder="Zip Code" type="text" />
              </div>
              <div style={{ display:"flex",justifyContent:"flex-end",position:"relative",top:"50px" }} >
              <button style={{height:"59px",fontSize:"16px",justifyContent:'space-around',width:'250px'}} onClick={this.props.nextStep} className="blueForm__button">
                  Save & continue
              <ArrowForwardIosIcon fontSize="small"/>
              </button>
              </div>
              
            </div>
            </div>
        )
    }
}
