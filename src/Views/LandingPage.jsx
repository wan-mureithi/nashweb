import React, { Component } from "react";
import Menubar from "../Components/LandingPages/Menubar";
import LandingPageFooter from "../Components/LandingPages/Footer";
import { Grid, Paper } from "@material-ui/core";
import { createMuiTheme, Hidden } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Benefits from "../Components/LandingPages/Benefits";
import Features from "../Components/LandingPages/Features";
import SignUp from "../Components/Signup";
import AOS from "aos";
import "aos/dist/aos.css";
import EmailIcon from '@material-ui/icons/Email';
import { animateScroll as scroll } from "react-scroll";


const papertheme2 = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        minHeight: "225px",
        width: "240px",
        border: " 0.274523px solid #E3E3E3",
        background: "#FFFFFF",
        padding: "25px",
        marginBottom: "20px",
        textAlign: "center",
      },
      rounded: {
        borderRadius: "18.3016px",
      },
      elevation1: {
        boxShadow: "0px 13.7262px 22.8769px rgba(0, 0, 0, 0.1)",
      },
    },
  },
});

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      validEmail: false,
    };
  }
  componentDidMount() {
    this.setState({ isChecked: true });
    AOS.init({
      duration: 2000,
    });
  }
  scrollToBottom = () => {
    scroll.scrollToBottom();
};
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <Menubar />
      
      
        <div id="header-container" className="header-container">
        <div style={{maxWidth:"1300px",margin:'auto'}}>
        {/* <div  className="spiralBg"></div> */}
          <Grid container spacing={2}>
          <Grid  item xs={12} sm={12} md={12} lg={6}>
          
          <div className="titleTexts">
              <span  className="landingHeader">
                The <b>Corporate card </b> for
              </span>
              <div className="helvetica-animate-wrapper">
                <div className="helvetica-animate-words helvetica-words helvetica-words-2">
                  <span  className="headerTransition"> Global businesses </span>
                  <span className="headerTransition"> Start ups </span>
                  <span className="headerTransition"> Growing businesses </span>
                </div>
              </div>

              <span className="landingHeaderx">in Africa</span>

              <span
                style={{ position: "relative", top: "90px",fontSize: "16px",
                lineHeight: "35px"}}
                className="LandingPageSubHeader"
              >
                Get unlimited virtual & physical cards with inbuilt approval
                controls for all your expense management and payment flows.{" "}
              </span>
              <div
                style={{ position: "relative", top: "110px" }}
                className="getStartedInput"
              >
                
                <EmailIcon fontSize="large" style={{ color:'#2282E2',position:'relative',left:'15px' }} />
                <input type="text" placeholder="Enter your work email" />

                <button style={{ width: "170px" }} className="started">
                  Get Nash - for free
                </button>
              </div>
            </div>
            
          </Grid>
          <Grid  style={{ paddingTop: "100px" }} item xs={12} sm={12} md={12} lg={6}>
          <img style={{ height:'800px',mixBlendMode:'color-burn',position:'absolute',top:'-35px',left:'419px',zIndex:'-2' }}  src="/assets/img/diagonalHero4.png" alt="" />
          <div className="cardsImg1">
              <img src="/assets/img/cards2.png" alt="" />
            </div>
          </Grid>
          </Grid>
          </div>
          
          {/* <div className="cardsBg">
            
            
          </div> */}
        </div>
       
        <div className="Investors">
          <Grid container spacing={2}>
            <Grid item container xs={12} sm={12} md={6} lg={6}>
             <Grid item  xs={12} sm={6} md={6} lg={6}>
             <div onClick={this.scrollToBottom} className="arrowdown">
                <ArrowDownwardIcon
                  className="arrowDownBtn"
                  style={{
                    color: "#2282E2",
                    marginTop: "110px",
                    fontSize: "80px",
                    marginLeft: "50px",
                    float:'right',
                    cursor:'pointer'
                  }}
                />
              </div>
             </Grid>
             <Grid item  xs={12} sm={6} md={6} lg={6}>
             <div className="supportText">
                <span style={{fontSize: "16px",lineHeight: "36px",color: "#ABABAB"}} >
                  Supported by some of the best global investors
                </span>
              </div>
</Grid>
              
              
              
              
              
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img className="investImg" style={{ height:"110px", marginTop:'100px',marginLeft:'-15vh'}} src="/assets/img/investors.png" alt="" />
            </Grid>

           
            
          </Grid>
        </div>
        <div >
        <div name="platformDiv" id="platformDiv" className="platformDiv">
          <Grid style={{maxWidth:'1300px', margin:'auto'}} container spacing={2}>
            <Grid item xs={12} md={8}>
            <div>
            <img className="globeImg" src="/assets/img/globemap.png" alt="" />
          </div>
            </Grid>
            <Grid item xs={12} md={4}>
            {/* <div className="platformText"> */}
            <div style={{ width:'178px' }} className="bluetitle">
              <span style={{ marginLeft:'5px' }}>ALL IN ONE PLATFORM</span>
            </div>
            <div style={{ fontSize: "38px" }} className="blacktitle2">
              <span>
                The Corporate Card Built for Your Growth. Africa to the World!
              </span>
            </div>
            <div className="benefitsList">
              <div className="panelItem">
                <CheckCircleIcon style={{ color: "#3297F4",fontSize:'21px' }} />
                <div style={{ paddingLeft: "11px" }}>
                  <span>Spend management</span>
                </div>
              </div>
              <div className="panelItem">
                <CheckCircleIcon style={{ color: "#3297F4",fontSize:'21px' }} />
                <div style={{ paddingLeft: "11px" }}>
                  <span>Payment flows management</span>
                </div>
              </div>
              <div className="panelItem">
                <CheckCircleIcon style={{ color: "#3297F4",fontSize:'21px' }} />
                <div style={{ paddingLeft: "11px" }}>
                  <span>Controls & approvals</span>
                </div>
              </div>
            </div>
            <div style={{ display: "block" }}>
              <span
                style={{fontSize: "13px",lineHeight: "19px",color: "#6F6F6F",width:"403px" }}>
                For your growing team with local and international operations,
                manage all expenses, all controls & approvals, all payments to
                all payment rails (banks, cards, mobile money) from a single
                platform and card.
              </span>
              <button
                style={{ display: "block", height:'49px', marginTop: "25px", width: "164px" }}
                className="SignUpFormsSubmit"
              >
                Get Nash
              </button>
            </div>
         
            </Grid>
          </Grid>
          
          
        </div>
        </div>
        <Benefits />
        <Features />
        <div className="howWework">
          <div style={{ width:'1300px', margin:'auto'}}>
          <div style={{ marginLeft: "-125px", paddingBottom: "40px" }}>
            <span className="whiteTitle">How does Nash work?</span>
          </div>
          <Hidden only={["sm", "xs", "md"]}>
            <div style={{ marginLeft: "55px" }}>
              <img
                style={{ height: "95px" }}
                src="/assets/icons/steps.png"
                alt=""
              />
            </div>{" "}
          </Hidden>

          <MuiThemeProvider theme={papertheme2}>
            <Grid
              style={{ justifyContent: "center", marginTop: "40px" }}
              container
              spacing={2}
            >
              <Grid xs={12} sm={6} md={6} lg={4}>
                <div>
                  <Hidden only={["lg", "xl"]}>
                    <div style={{ margin: "0 100px" }} className="whiteBg">
                      <div className="blueBg">
                        <span className="number">01</span>
                      </div>
                    </div>
                  </Hidden>
                </div>
                <Paper style={{ marginTop: "25px" }}>
                  <h3 className="paperTitle">Join <br/> Nash </h3>

                  <p style={{ fontSize: "14px" }} className="greyText">
                    Sign up for the Nash Corporate Card. We will contact you
                    shortly.
                  </p>
                </Paper>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={4}>
                <Hidden only={["lg", "xl"]}>
                  <div style={{ margin: "0 100px" }} className="whiteBg">
                    <div className="blueBg">
                      <span className="number">02</span>
                    </div>
                  </div>
                </Hidden>
                <Paper style={{ marginTop: "20px" }}>
                  <h3 className="paperTitle">Receive <br/> your card </h3>

                  <p className="greyText">
                    We’ll approve you and you’ll soon be able to access
                    unlimited cards. You’ll invite members of your team to the
                    Nash Card App{" "}
                  </p>
                </Paper>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={4}>
                <Hidden only={["lg", "xl"]}>
                  <div style={{ margin: "0 100px" }} className="whiteBg">
                    <div className="blueBg">
                      <span className="number">03</span>
                    </div>
                  </div>
                </Hidden>
                <Paper style={{ marginTop: "20px" }}>
                  <h3 className="paperTitle">Enjoy the power of Nash</h3>

                  <p className="greyText">
                    Enjoy the power of Nash Manage your expenses and, payment
                    flows from the Nash Card, Nash App and Nash platform with
                    built in approval controls from anywhere in the world{" "}
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </MuiThemeProvider>
          </div>
          
        </div>
        <div  className="cardReady">
          <div style={{ width:'1300px', margin:'auto'}} className="cardReady-content">
            <Grid container spacing={2} >
              <Grid item  xs={12} md={6} lg={6}>
              <img
                className="cardsStr8"
                style={{ height: "415px", marginTop: "-186px" }}
                src="/assets/img/cards-str8.png"
                alt=""
              />
              <div className="cardReadytexts">
                <div style={{ width: "85px" }} className="bluetitle">
                  <span style={{ marginLeft: "8px" }}>SIGN UP</span>
                </div>
                <div className="blacktitle2">
                  <span style={{ marginBottom: "35px",fontWeight:"800" }} >Get Your Nash <br /> Corporate Card Ready</span>
                </div>
                <div className="smallerTexts">
                  <span
                    style={{
                      fontWeight: "600",
                     
                      fontSize: "18px",
                     
                    }}
                  >
                    {" "}
                    Expense Management. Payment Flows Management. Approvals &
                    Controls{" "}
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: "35px",
                      fontSize: "16px",
                    }}
                  >
                    Operate locally and internationally with the power of Nash
                  </span>
                </div>
              </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
              <SignUp />
              </Grid>

            </Grid>
            
            
          </div>
        </div>
        <LandingPageFooter />
        
      </div>
    );
  }
}
export default LandingPage;
