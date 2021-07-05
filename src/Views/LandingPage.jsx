import React, { Component } from "react";
import Menubar from "../Components/LandingPages/Menubar";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-ui/core/styles";
import LandingPageFooter from "../Components/LandingPages/Footer";
import { Grid,Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Benefits from "../Components/LandingPages/Benefits";
import Features from "../Components/LandingPages/Features";
import SignUp from "../Components/Signup";

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
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
class LandingPage extends Component {
  render() {
    const theme = useTheme;
    return (
      <div>
        <Menubar />
        <div
          className="BuySell">
          <div className="BuySellCar">
          <div className="spiralBg"></div>
            <div className="BuySellDiv">
              <span className="landingHeader">
                The corporate card for
                <AutoPlaySwipeableViews
                  slideStyle={{ overflow: "hidden" }}
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                >
                  <span className="headerTransition"> Global businesses </span>
                  <span className="headerTransition"> Start ups </span>
                  <span className="headerTransition"> Growing businesses </span>
                </AutoPlaySwipeableViews>
                in Africa
              </span>
              <span className="LandingPageSubHeader">
                Get unlimited virtual & physical cards with inbuilt approval
                controls for all your expense management and payment flows.{" "}
              </span>
              <div className="getStartedInput">
                <img
                  style={{ height: "20px" }}
                  src="/assets/icons/email.svg"
                  alt=""
                />
                <input type="text" placeholder="Enter your work email" />
                <button className="started">Get Nash - for free</button>
              </div>
              
            </div>
            <div className="cardsImg">
              <img src="/assets/img/cards-rot8.png" alt="" />
            </div>
          </div>
        </div>
        <div className="Investors">
          <Grid
            container
            spacing={2}
          >
            <Grid item xs={6} sm={6} md={6} lg={3}>
              <div className="arrowdown">
                <ArrowDownwardIcon
                  style={{
                    color: "#2282E2",
                    marginTop: "77px",
                    fontSize: "130px",
                    marginLeft: "70px",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={2}>
              <div className="supportText">
                <span className="greyText">
                  Supported by some of the best global investors
                </span>
              </div>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={2}>
              <div>
                <div className="investorimg">
                  <img
                    style={{ height: "80px" }}
                    src="/assets/img/villageGlobal.png"
                    alt=""
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={2}>
              <div>
                <div className="investorimg">
                  <img
                    style={{ height: "64px" }}
                    src="/assets/img/norrs.png"
                    alt=""
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={2}>
              <div>
                <div className="investorimg">
                  <img
                    style={{ height: "80px" }}
                    src="/assets/img/mushaVentures.png"
                    alt=""
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div name="platformDiv" id="platformDiv" className="platformDiv">
          <div className="globeImg">
            <img src="/assets/img/globemap.png" alt="" />
          </div>
          <div className="platformText">
            <div className="bluetitle">
              <span>ALL IN ONE PLATFORM</span>
            </div>
            <div style={{ width: "446px" }} className="blacktitle2">
              <span>
                The Corporate Card Built for Your Growth. Africa to the World!
              </span>
            </div>
            <div className="benefitsList">
              <div className="panelItem">
                <CheckCircleIcon style={{ color: "#3297F4" }} />
                <div style={{ paddingLeft: "14px" }}>
                  <span>Spend management</span>
                </div>
              </div>
              <div className="panelItem">
                <CheckCircleIcon style={{ color: "#3297F4" }} />
                <div style={{ paddingLeft: "14px" }}>
                  <span>Payment flows management</span>
                </div>
              </div>
              <div className="panelItem">
                <CheckCircleIcon style={{ color: "#3297F4" }} />
                <div style={{ paddingLeft: "14px" }}>
                  <span>Controls & approvals</span>
                </div>
              </div>
            </div>
            <div style={{ display: "block" }}>
              <span
                style={{ color: "#6F6F6F", width: "400px" }}
                className="greyText"
              >
                For your growing team with local and international operations,
                manage all expenses, all controls & approvals, all payments to
                all payment rails (banks, cards, mobile money) from a single
                platform and card.
              </span>
              <button
                style={{ display: "block", marginTop: "25px" }}
                className="SignUpFormsSubmit"
              >
                Get Nash
              </button>
            </div>
          </div>
        </div>
        <Benefits />
        <Features />
        <div className="howWework">
          <div style={{ margin: "0 auto", paddingBottom: "40px" }}>
            <span className="whiteTitle">How does Nash work?</span>
          </div>

          {/* <div className="textArt">
           
          </div> */}
          <MuiThemeProvider theme={papertheme2}>
            <Grid
              style={{ justifyContent: "center", marginTop: "40px" }}
              container
              spacing={2}
            >
              <Grid xs={12} sm={6} md={6} lg={4}>
              <div style={{margin:'0 100px'}}className="whiteBg">
              <div className="blueBg">
                <span className="number">01</span>
              </div>
            </div>
                <Paper style={{marginTop:'20px'}}>
                  <h3>Join Nash </h3>

                  <p className="greyText">
                    Sign up for the Nash Corporate Card. We will contact you
                    shortly.
                  </p>
                </Paper>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={4}>
              <div style={{margin:'0 100px'}} className="whiteBg">
              <div className="blueBg">
                <span className="number">02</span>
              </div>
            </div>
                <Paper  style={{marginTop:'20px'}}>
                  <h3>Receive your card </h3>

                  <p className="greyText">
                    We’ll approve you and you’ll soon be able to access
                    unlimited cards. You’ll invite members of your team to the
                    Nash Card App{" "}
                  </p>
                </Paper>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={4}>
              <div style={{margin:'0 100px'}} className="whiteBg">
              <div className="blueBg">
                <span className="number">03</span>
              </div>
            </div>
                <Paper style={{marginTop:'20px'}}>
                  <h3>Enjoy the power of Nash</h3>

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
        <div className="cardReady">
          <div className="cardReady-content">
            <div className="left">
              <img
                style={{ height: "280px", marginTop: "-105px" }}
                src="/assets/img/cards-str8.png"
                alt=""
              />
              <div className="cardReadytexts">
                <div className="bluetitle">
                  <span>SIGN UP</span>
                </div>
                <div className="blacktitle2">
                  <span>Get your Nash corporate card ready</span>
                </div>
                <div className="smallerTexts">
                  <span
                    style={{
                      fontWeight: "600",
                      lineHeight: "30px",
                      fontSize: "15px",
                      marginBottom: "20px",
                    }}
                  >
                    {" "}
                    Expense Management. Payment Flows Management. Approvals &
                    Controls{" "}
                  </span>
                  <span
                    style={{
                      display: "block",
                      lineHeight: "30px",
                      fontSize: "13px",
                    }}
                  >
                    Operate locally and internationally with the power of Nash
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <SignUp />
            </div>
          </div>
        </div>
        <LandingPageFooter />
      </div>
    );
  }
}
export default LandingPage;
