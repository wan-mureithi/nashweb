import React, { Component } from "react";
import Menubar from "../Components/LandingPages/Menubar";
import "../Styles/onboarding.css";
import { Grid } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class CreatePassword extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password:"",
          confirmPassword:"",
          setOpen: false,
          signupData: null,
          validPassword: false,
      passwordConfirm: false,
        };
        this.handleFormInput = this.handleFormInput.bind(this);
      }
      handleFormInput(event){
          if(event.target.id === "newPassword" &&
          event.target.value.length > 0 ){
     this.setState({
         passwordConfirm: false
     })
          }
      }
  render() {
    return (
      <div className="verifyEmail">
        <Menubar />
        <div className="cardReady" >
            <div style={{ width: "1300px", margin: "auto",height:'700px' }}
            className="cardReady-content">
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
                  <span style={{ marginBottom: "35px", fontWeight: "800",width:'100%' }}>
                  Set up your Nash <br/> password to get started
                  </span>
                </div>
               
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div style={{ height:'411px',padding:'0',width:'520px'}} className="signupForm-container">
                <div style={{padding:'40px 30px 0 45px'}} className="signupForm-content">
                <input
              className="formInput"
              id="newPassword"
              placeholder="Password"
              type="text"
              onChange={this.handleFormInput}
              value={this.state.password}
            />
            <input
              className="formInput"
              id="confirmPassword"
              placeholder="Confirm Password"
              type="text"
              onChange={this.handleFormInput}
              value={this.state.confirmPassword}
            />
            <p className="descText">Passwords should contain three of the four character types: Uppercase letters: A-Z. 
            Lowercase letters: a-z. Numbers: 0-9.</p>
           
                </div>
                <div className="form__footer">
                    <button className="form__button">
                        <div style={{fontSize:'11px', fontWeight:'500',marginRight:'10px'}}>
                        <span style={{fontSize:'8px', fontWeight:'400'}}>For onboarding with a Nash Expert</span> 
                        <br/> Book a Virtual Session
                        </div>
                        <ArrowForwardIosIcon fontSize="small"/>
                        </button>
                    <button onClick={this.props.history.push("/Onboarding")} className="blueForm__button">
                       
                        <div style={{fontSize:'11px', fontWeight:'500',marginRight:'10px'}}>
                        <span style={{fontSize:'8px', fontWeight:'400'}}>For Self-onboarding</span> 
                        <br/>  Continue with application
                        </div>
                        <ArrowForwardIosIcon fontSize="small"/>
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
