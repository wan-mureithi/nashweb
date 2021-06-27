import React, { Component } from 'react';

export default class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            email:''
        }
            
    }
    render() {
        
        return (
            <div>
                <div className="signupForm-container">
                <div className="signupForm-content">
                <div className="displayFlexSpace">
                      <input
                        id="firstName"
                        placeholder="First Name"
                        type="text"
                        value={this.state.firstName}
                      />
                      <input
                        id="lastName"
                        placeholder="Last Name"
                        type="text"
                        value={this.state.lastName}
                      />
                    </div>
                    <input
                      className="formInput"
                      id="email"
                      placeholder="Your work email"
                      type="text"
                      value={this.state.email}
                    />
                    <input
                      className="formInput"
                      id="phoneNumber"
                      placeholder="Phone number"
                      type="text"
                      value={this.state.phoneNumber}
                    />
                    <div className="signupFooter">
                        <div style={{width:'185px'}}>
                        <p className="terms">By accepting invite you are agreeing to Nash’s <span style={{color:'black',fontWeight:'600'}}>Terms of service  and privacy policy</span> 
</p>
                        </div>
                   <div>
                       <button className="signupButton">
                           Sign up
                       </button>
                   </div>

                    </div>
                </div>

              </div>
            </div>
        )
    }
}
