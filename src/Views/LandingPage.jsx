import React, { Component } from "react";
import Menubar from "../Components/LandingPages/Menubar";
import LandingPageFooter from "../Components/LandingPages/Footer";
import { Grid, Paper } from "@material-ui/core";
import { createTheme, Hidden } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Benefits from "../Components/LandingPages/Benefits";
import Features from "../Components/LandingPages/Features";
import SignUp from "../../Components/Signup";
import AOS from "aos";
import "aos/dist/aos.css";
import EmailIcon from "@material-ui/icons/Email";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

const papertheme2 = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        minHeight: "248px",
        width: "340px",
        border: " 0.274523px solid #E3E3E3",
        background: "#FFFFFF",
        padding: "23px",
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
      email:''
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
          <div style={{ maxWidth: "1300px", margin: "auto" }}>
            {/* <div  className="spiralBg"></div> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <div className="titleTexts">
                  <span className="landingHeader">
                    The <b>Corporate card </b> for
                  </span>
                  <div className="helvetica-animate-wrapper">
                    <div className="helvetica-animate-words helvetica-words helvetica-words-2">
                      <span className="headerTransition">
                        {" "}
                        Global businesses{" "}
                      </span>
                      <span className="headerTransition"> Start ups </span>
                      <span className="headerTransition">
                        {" "}
                        Growing businesses{" "}
                      </span>
                    </div>
                  </div>

                  <span className="landingHeaderx">in Africa</span>

                  <span className="LandingPageSubHeader">
                    Get unlimited virtual & physical cards with inbuilt approval
                    controls for all your expense management and payment flows.{" "}
                  </span>
                </div>
                <Hidden xsDown>
                <div className="getStartedInput">
                  <EmailIcon
                    fontSize="large"
                    style={{
                      color: "#2282E2",
                      position: "relative",
                      left: "15px",
                    }}
                  />
                  <input type="text" placeholder="Enter your work email" />
                  <Link
                  activeClass="active"
                  to="cardReady"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <button className="started">
                    Get Nash - for Free
                  </button>
                </Link>
                  
                </div>
                </Hidden>
                
                <Hidden smUp>
                <div className="getStartedInput">
                  <EmailIcon
                    fontSize="small"
                    style={{ color: "#2282E2", marginLeft:'12px'}}
                  />
                  <input style={{ textAlign:'left', width:'50%' }} type="text" value={this.state.email} placeholder="Enter your work email" />
                  <Link
                  activeClass="active"
                  to="cardReady"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <button style={{ textAlign:'center'}} className="started">
                    Get Nash 
                  </button>
                </Link>
                  
                </div>
                </Hidden>
              </Grid>
              <Grid
                style={{ paddingTop: "100px" }}
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
              >
                <img
                  style={{
                    height: "800px",
                    mixBlendMode: "color-burn",
                    position: "absolute",
                    top: "-35px",
                    left: "419px",
                    zIndex: "-2",
                  }}
                  src="/assets/img/diagonalHero4.png"
                  alt=""
                />
                <div className="cardsImg1">
                  <img src="/assets/good_cards.png" alt="" />
                </div>
              </Grid>
            </Grid>
          </div>

        </div>

        <div className="Investors">
          <Grid container spacing={2}>
            <Grid item container xs={12} sm={12} md={6} lg={6}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <div onClick={this.scrollToBottom} className="arrowdown">
                  <ArrowDownwardIcon
                    className="arrowDownBtn"
                    style={{
                      color: "#2282E2",
                     // paddingTop: "110px",
                      fontSize: "80px",
                      marginLeft: "50px",
                      float: "right",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <div className="supportText">
                  <span>Supported by some of the best global investors</span>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                className="investImg"
                src="/assets/img/investors.png"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <div name="platformDiv" id="platformDiv" className="platformDiv">
            <Grid
              style={{ maxWidth: "1300px", margin: "auto" }}
              container
              spacing={2}
            >
              <Grid item xs={12} md={8}>
                <div>
                  <img
                    className="globeImg"
                    src="/assets/img/globemap.png"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
               
                <div
                  style={{ width: "178px" }}
                  className="bluetitle leftPadding"
                >
                  <span style={{ marginLeft: "5px" }}>ALL IN ONE PLATFORM</span>
                </div>
                <div className="blacktitle2 leftPadding">
                  <span>
                    The Corporate Card Built for Your Growth. Africa to the
                    World!
                  </span>
                </div>
                <div className="benefitsList">
                  <div className="panelItem">
                    <CheckCircleIcon
                      style={{ color: "#3297F4", fontSize: "21px" }}
                    />
                    <div style={{ paddingLeft: "11px" }}>
                      <span>Spend management</span>
                    </div>
                  </div>
                  <div className="panelItem">
                    <CheckCircleIcon
                      style={{ color: "#3297F4", fontSize: "21px" }}
                    />
                    <div style={{ paddingLeft: "11px" }}>
                      <span>Payment flows management</span>
                    </div>
                  </div>
                  <div className="panelItem">
                    <CheckCircleIcon
                      style={{ color: "#3297F4", fontSize: "21px" }}
                    />
                    <div style={{ paddingLeft: "11px" }}>
                      <span>Controls & approvals</span>
                    </div>
                  </div>
                </div>
                <div className="leftPadding" style={{ display: "block" }}>
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight: "19px",
                      color: "#6F6F6F",
                      width: "403px",
                    }}
                  >
                    For your growing team with local and international
                    operations, manage all expenses, all controls & approvals,
                    all payments to all payment rails (banks, cards, mobile
                    money) from a single platform and card.
                  </span>
                  <Link
                  activeClass="active"
                  to="cardReady"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <button
                    style={{
                      display: "block",
                      height: "49px",
                      marginTop: "25px",
                      width: "164px",
                    }}
                    className="SignUpFormsSubmit"
                  >
                    Get Nash
                  </button>
                </Link>
                  
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <Benefits />
        <Features />
        <div className="howWework">
          <div style={{ width: "1300px", margin: "auto" }}>
            <div className="whiteTitle">
              <span>How does Nash work?</span>
            </div>
            <Hidden only={["sm", "xs", "md"]}>
              <div style={{ marginLeft: "60px" }}>
                <img
                  style={{ height: "98px" }}
                  src="/assets/icons/steps.png"
                  alt=""
                />
              </div>{" "}
            </Hidden>

            <MuiThemeProvider theme={papertheme2}>
              <Grid
                className="leftPadding"
                style={{ justifyContent: "center", marginTop: "40px" }}
                container
                spacing={2}
              >
                <Grid xs={12} sm={6} md={6} lg={4}>
                  <div>
                    <Hidden only={["lg", "xl"]}>
                     
                        <div style={{ margin: "0 100px" }} className="blueBg">
                          <span className="number">01</span>
                        </div>
                     
                    </Hidden>
                  </div>
                  <Paper className="papers" >
                    <h3 className="paperTitle">
                      Join <br /> Nash{" "}
                    </h3>

                    <p style={{ fontSize: "14px" }} className="greyText">
                      Sign up for the Nash Corporate Card. We will contact you
                      shortly.
                    </p>
                  </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={4}>
                  <Hidden only={["lg", "xl"]}>
                   
                      <div style={{ margin: "0 100px" }} className="blueBg">
                        <span className="number">02</span>
                      </div>
                  
                  </Hidden>
                  <Paper className="papers" style={{ marginTop: "20px" }}>
                    <h3 className="paperTitle">
                      Receive <br /> your card{" "}
                    </h3>

                    <p className="greyText">
                      We’ll approve you and you’ll soon be able to access
                      unlimited cards. You’ll invite members of your team to the
                      Nash Card App{" "}
                    </p>
                  </Paper>
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={4}>
                  <Hidden only={["lg", "xl"]}>
                    
                      <div style={{ margin: "0 100px" }} className="blueBg">
                        <span className="number">03</span>
                      </div>
                   
                  </Hidden>
                  <Paper className="papers" style={{ marginTop: "20px" }}>
                    <h3 className="paperTitle">Enjoy the <br />  power of Nash</h3>

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
        <div id="cardReady" className="cardReady">
          <div
            style={{ width: "1300px", margin: "auto" }}
            className="cardReady-content"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <img
                  className="cardsStr8"
                  // style={{ height: "415px", marginTop: "-186px" }}
                  src="/assets/img/cards-str8.png"
                  alt=""
                />
                <div className="cardReadytexts">
                  <div style={{ width: "85px" }} className="bluetitle">
                    <span style={{ marginLeft: "8px" }}>SIGN UP</span>
                  </div>
                  <div className="blacktitle2">
                    <span style={{ marginBottom: "35px", fontWeight: "800" }}>
                      Get Your Nash <br /> Corporate Card Ready
                    </span>
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
