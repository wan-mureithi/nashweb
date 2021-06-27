import React, { Component } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AppMenu from "../Components/LandingPages/Menubar";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid, Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SignUp from "../Components/SignUp";
import Controls from "../Components/LandingPages/Controls";
import Benefits from "../Components/LandingPages/Benefits";

const papertheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        minHeight: "280px",
        width: "310px",
        border: " 0.274523px solid #E3E3E3",
        background: "#FFFFFF",
        padding: "11px",
        marginBottom: "20px",
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
const papertheme2 = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        minHeight: "240px",
        width: "310px",
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
    };
  }
  componentDidMount() {
    this.setState({ isChecked: true });
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <div>
        <AppMenu />
        <div className="header-container">
          <div className="spiralBg">
            <div className="cardsBg">
              <div className="titleTexts">
                <span className="landingHeader">
                  The corporate card for 
                  <span className="headerTransition"> Global businesses {" "} </span>
                   in Africa
                </span>
                <span className="landingSubheader">
                  Get unlimited virtual & physical cards with inbuilt approval
                  controls for all your expense management and payment flows.{" "}
                </span>
                <div className="getStartedInput">
                  <img style={{height:'20px'}} src="/assets/icons/email.svg" alt="" />
                  <input type="text" placeholder="Enter your work email" />
                  <button className="started">Get Nash - for free</button>
                </div>
              </div>
              <div className="cardsImg">
                <img src="/assets/img/cards-rot8.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="investorContainer" data-aos="fade">
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
          <div
            style={{
              justifyContent: "space-evenly",
              display: "flex",
              width: "100%",
            }}
          >
            <div className="supportText">
              <span className="greyText">
                Supported by some of the best global investors
              </span>
            </div>
            <div className="investorimg">
              <img
                style={{ height: "64px" }}
                src="/assets/img/villageGlobal.png"
                alt=""
              />
            </div>
            <div className="investorimg">
              <img
                style={{ height: "64px" }}
                src="/assets/img/norrs.png"
                alt=""
              />
            </div>
            <div className="investorimg">
              <img
                style={{ height: "64px" }}
                src="/assets/img/mushaVentures.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="platformDiv">
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
                      <CheckCircleIcon style={{ color: "#3297F4" }}/>
                      <div style={{ paddingLeft: "14px" }}>
                        <span>Spend management</span>
                      </div>
                    </div>
                    <div className="panelItem">
                      <CheckCircleIcon style={{ color: "#3297F4" }}/>
                      <div style={{ paddingLeft: "14px" }}>
                        <span>Payment flows management</span>
                      </div>
                    </div>
                    <div className="panelItem">
                      <CheckCircleIcon style={{ color: "#3297F4" }}/>
                      <div style={{ paddingLeft: "14px" }}>
                        <span>Controls & approvals</span>
                      </div>
                    </div>
            </div>
            <div style={{ display: "block" }}>
              <span className="greyText">
                For your growing team with local and international operations,
                manage all expenses, all controls & approvals, all payments to
                all payment rails (banks, cards, mobile money) from a single
                platform and card.
              </span>
            </div>
          </div>
        </div>
        <Benefits/>
        <Controls />
        <div className="howWework">
          <div style={{ margin: "0 auto", paddingBottom: "40px" }}>
            <span className="whiteTitle">How does Nash work?</span>
          </div>

          <div className="textArt">
            <div className="whiteBg">
              <div className="blueBg">
                <span className="number">01</span>
              </div>
            </div>

            <div className="whiteBg">
              <div className="blueBg">
                <span className="number">02</span>
              </div>
            </div>
            <div className="whiteBg">
              <div className="blueBg">
                <span className="number">03</span>
              </div>
            </div>
          </div>
          <MuiThemeProvider theme={papertheme2}>
            <Grid
              style={{ justifyContent: "center", marginTop: "40px" }}
              container
              spacing={2}
            >
              <Grid item xs={6} sm={3}>
                <Paper>
                  <h3>Join Nash </h3>

                  <p className="greyText">
                    Sign up for the Nash Corporate Card. We will contact you
                    shortly.
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper>
                  <h3>Receive your card </h3>

                  <p className="greyText">
                    We’ll approve you and you’ll soon be able to access
                    unlimited cards. You’ll invite members of your team to the
                    Nash Card App{" "}
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper>
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
        <div className="footerSection">
          <div className="topFooterRow">
            <img
              style={{ height: "40px" }}
              src="assets/whiteLogo.svg"
              alt="logo"
            />
            <div className="getNash">
              <span>
                Expense Management. Payment Flows Management. Approvals &
                Controls
              </span>
              <button className="transparentButton">Get Nash</button>
            </div>
          </div>
          <hr className="footer_hr" />
          <div className="footerRow">
            <div className="footerColumn">
              <p className="smallgreytext">
                Nash enables provision and eases access to fair financial
                products for all.
              </p>
              <div className="socials">
                <div>
                  {" "}
                  {/*  className="imgDiv" */}
                  <img src="assets/icons/fb.svg" alt="" />
                </div>
                <div>
                  <img src="assets/icons/ig.svg" alt="" />
                </div>
                <div>
                  <img src="assets/icons/twitter.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="footerColumn">
              <span>Sourcemap</span>
              <div className="links">
                <a href="#">Why us</a>
                <a href="#">About us</a>
                <a href="#">Features us</a>
              </div>
            </div>
            <div className="footerColumn">
              <span>Contact us</span>
              <div className="links">
                <span>Shoot us an email</span>
                <span>hello@nashafrica.co</span>
              </div>
            </div>
            <div className="footerColumn">
              <span>Download</span>
              <div className="links">
                <img src="/assets/img/fadedgooglestore.svg" alt="" />
                <img src="/assets/img/fadedappstore.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontSize: "13px",
                textAlign: "center",
                marginTop: "60px",
              }}
            >
              Copyright @ 2021 Nash Inc - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
