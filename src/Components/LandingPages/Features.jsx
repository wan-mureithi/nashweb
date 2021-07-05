import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { createMuiTheme, withStyles } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MediaQuery from 'react-responsive'

const CustomTab = withStyles({
  root: {
    background: "#0079e9",
    borderRadius: "16.4839px",
    marginTop: "-26px",
    margin: "0 auto",
    width: "48%",
    textTransform: "none"
  },
  wrapper: {
    position: "absolute",
    zIndex: "1",
  },
})(Tabs);
const MobileTab = withStyles({
  root: {
    background: "#0079e9",
    borderRadius: "16.4839px",
    marginTop: "-26px",
    marginLeft:"-45px",
    width: "404px",
    textTransform: "none",
  },
  wrapper: {
    position: "absolute",
    zIndex: "1",
  },
})(Tabs);
const tabtheme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        //color:'white',
        textTransform: "none",
      },
      wrapper: {
        position: "absolute",
        zIndex: "1",
      },
      textColorInherit: {
        color: "white",
        "&$selected": {
          color: "#3297f4",
        },
      },
    },
    PrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: "white",
      },
      root: {
        height: "38px",
        marginBottom: "5px",
        marginLeft: "5px",
        borderRadius: "10px",
      },
    },
    MuiTabs: {
      flexContainer: {
        justifyContent: "space-around",
      },
    },
  },
});
const mobiletabtheme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        minWidth:'85px',
        fontSize:'13px',
        lineHeight:'1.4',
        textTransform: "none",
      },
      wrapper: {
        position: "absolute",
        zIndex: "1",
      },
      textColorInherit: {
        color: "white",
        "&$selected": {
          color: "#3297f4",
        },
      },
    },
    PrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: "white",
      },
      root: {
        height: "38px",
        width:"95px",
        marginBottom: "5px",
        //marginLeft: "5px",
        borderRadius: "10px",
      },
    },
    MuiTabs: {
      flexContainer: {
        justifyContent: "space-around",
      },
    },
  },
});
const papertheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        minHeight: "245px",
        width: "260px",
        border: " 0.274523px solid #E3E3E3",
        background: "#FFFFFF",
        padding: "11px 20px",
        marginBottom: "45px",
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
class Features extends Component {
  constructor() {
    super();
    this.state = {
      view: 0,
      index: 0,
      paperContent: [
        {
          img: "/assets/icons/card.svg",
          title: "Corporate Card on the Go",
          subtitle: "No personal guarantee. Cashflow based limits.",
          paragrph:
            "Unlimited virtual and physical cards for you and your team with built in robust limits, controls and approvals",
        },
        {
          img: "/assets/icons/check.svg",
          title: "Approvals on the Go",
          subtitle: "Real time approvals for you and your team.",
          paragrph:
            "Enable your team to request and give approvals for spend in real time. Scribble notes and supporting documents for every approval ",
        },
        {
          img: "/assets/icons/briefcase.svg",
          title: "Budget on the Go",
          subtitle: " Track all expenses. Know where money is going.",
          paragrph:
            "Set up monthly budgets by department or project for your big bucket expenses. Get warnings (if you want them) when you spend too fast ",
        },
        {
          img: "/assets/icons/card.svg",
          title: "Pay for anything, anywhere",
          //subtitle:"No personal guarantee. Cashflow based limits.",
          paragrph:
            "Pay any invoice electronically. We handle your expense reconciliation and you can pay us back in your local currency.",
        },
        {
          img: "/assets/icons/flash.svg",
          title: "Pay to any channel",
          //subtitle:"Real time approvals for you and your team.",
          paragrph: "To banks, to card, to mobile money, QR code payments ",
        },
        {
          img: "/assets/icons/clipCheck.svg",
          title: "Set up recurring payments",
          //subtitle:" Track all expenses. Know where money is going.",
          paragrph:
            "Whether you're paying invoices or an employee is splitting bills, set up a recurring payment in under a minute and send money easily. ",
        },
        {
          img: "/assets/icons/insight.svg",
          title: "Spending insights",
          //subtitle:"No personal guarantee. Cashflow based limits.",
          paragrph:
            "Instant reconciliation with Nash software. Search, slice, or download real-time data from any employee, department, or merchant.",
        },
        {
          img: "/assets/icons/forecast.svg",
          title: "Financial forecasting",
          //subtitle:"Real time approvals for you and your team.",
          paragrph:
            "Financial Forecasting Nash automatically identifies all active subscriptions and upcoming payments. It’s like seeing into the future. ",
        },
        {
          img: "/assets/icons/copy.svg",
          title: "Streamlined accounting",
          //subtitle:" Track all expenses. Know where money is going.",
          paragrph:
            " An accounting experience co-created with finance teams to automate manual processes and let Nash do the heavy lifting.",
        },
        {
          img: "/assets/icons/auto.svg",
          title: "Automatic Receipt Matching",
          paragrph:
            "Codify your expense policies in Nash. Nash automatically requests, collects and matches receipts sent via SMS & email.",
        },
      ],
    };
    this.handleView = this.handleView.bind(this);
  }
  handleView(view) {
    this.setState({ view: view });
  }
  handleChange = (event, key) => {
    this.setState({
      index: key,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };
  render() {
    return (
      <div className="controlMoney">
        <div className="gridRotated"></div>
        <section>
          <MediaQuery minWidth={740}>
          <MuiThemeProvider theme={tabtheme}>
            <CustomTab value={this.state.index} onChange={this.handleChange}>
              <Tab label="Founder" />
              <Tab label="Your money your rules" />
              <Tab label="Built for your growth" />
            </CustomTab>
          </MuiThemeProvider>
          </MediaQuery>
          
          <MediaQuery maxWidth={720}>
            <MuiThemeProvider theme={mobiletabtheme}>
            <MobileTab value={this.state.index} onChange={this.handleChange}>
            <Tab label="Founder" />
              <Tab label="Your money your rules" />
              <Tab label="Built for your growth" />
            </MobileTab>
            </MuiThemeProvider>
            
          </MediaQuery>

          <SwipeableViews
            slideStyle={{ overflow: "hidden", paddingTop: "80px" }}
            index={this.state.index}
            onChangeIndex={this.handleChangeIndex}
          >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                <div style={{ width: "45%" }} className="platformText">
                <div className="bluetitle">
                  <span>FOUNDER FOCUSED</span>
                </div>
                <div className="blacktitle2">
                  <span>Control your money, your way</span>
                </div>
                <div
                  style={{ width: "300px", marginTop: "60px" }}
                  className="smallerTexts"
                >
                  <span className="blackTexts">
                    {" "}
                    Empower your team, keep control{" "}
                  </span>
                  <span className="greyTexts">
                    We are founder focussed. It’s already hard enough to build a
                    company. It’s shouldn’t be hard run yours.
                  </span>
                </div>
              </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                <div>
                <MuiThemeProvider theme={papertheme}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Paper>
                        <div style={{ marginTop: "-44px" }} className="whiteBg">
                          <div
                            style={{ backgroundColor: "#8BC7FF" }}
                            className="blueBg"
                          >
                            <img
                              style={{ height: "20px" }}
                              src={this.state.paperContent[0].img}
                              alt=""
                            />
                          </div>
                        </div>
                        <h3>{this.state.paperContent[0].title} </h3>
                        <p>{this.state.paperContent[0].subtitle} </p>
                        <p className="greyText">
                          {this.state.paperContent[0].paragrph}
                        </p>
                      </Paper>
                      <Paper>
                        <div style={{ marginTop: "-44px" }} className="whiteBg">
                          <div
                            style={{ backgroundColor: "#8BC7FF" }}
                            className="blueBg"
                          >
                            <img
                              style={{ height: "25px" }}
                              src={this.state.paperContent[1].img}
                              alt=""
                            />
                          </div>
                        </div>
                        <h3>{this.state.paperContent[1].title} </h3>
                        <p>{this.state.paperContent[1].subtitle} </p>
                        <p className="greyText">
                          {" "}
                          {this.state.paperContent[1].paragrph}{" "}
                        </p>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Paper>
                        <div style={{ marginTop: "-44px" }} className="whiteBg">
                          <div
                            style={{ backgroundColor: "#8BC7FF" }}
                            className="blueBg"
                          >
                            <img
                              style={{ height: "25px" }}
                              src={this.state.paperContent[2].img}
                              alt=""
                            />
                          </div>
                        </div>
                        <h3>{this.state.paperContent[2].title} </h3>
                        <p className="subHeading">
                          {this.state.paperContent[2].subtitle}
                        </p>
                        <p className="greyText">
                          {this.state.paperContent[2].paragrph}
                        </p>
                      </Paper>
                    </Grid>
                  </Grid>
                </MuiThemeProvider>
              </div>
                </Grid>
            </Grid>
              
             
            
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <div className="platformText">
                    <div style={{ width: "175px" }} className="bluetitle">
                      <span>YOUR MONEY YOUR RULES</span>
                    </div>
                    <div className="blacktitle2">
                      <span>Spend your money, your way</span>
                    </div>
                    <div
                      style={{ width: "300px", marginTop: "60px", marginBottom: "50px" }}
                      className="smallerTexts"
                    >
                      <span className="blackTexts">
                        {" "}
                        Let your money work for you anywhere with no
                        restrictions{" "}
                      </span>
                      <span className="greyTexts">
                        We are international with local regulation. We are here
                        to empower your growth globally.
                      </span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <MuiThemeProvider theme={papertheme}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Paper>
                          <div
                            style={{ marginTop: "-44px" }}
                            className="whiteBg"
                          >
                            <div
                              style={{ backgroundColor: "#8BC7FF" }}
                              className="blueBg"
                            >
                              <img
                                style={{ height: "25px" }}
                                src={this.state.paperContent[3].img}
                                alt=""
                              />
                            </div>
                          </div>
                          <h3>{this.state.paperContent[3].title}</h3>

                          <p className="greyText">
                            {" "}
                            {this.state.paperContent[3].paragrph}
                          </p>
                        </Paper>
                        <Paper>
                          <div
                            style={{ marginTop: "-44px" }}
                            className="whiteBg"
                          >
                            <div
                              style={{ backgroundColor: "#8BC7FF" }}
                              className="blueBg"
                            >
                              <img
                                style={{ height: "25px" }}
                                src={this.state.paperContent[5].img}
                                alt=""
                              />
                            </div>
                          </div>
                          <h3>{this.state.paperContent[5].title} </h3>

                          <p className="greyText">
                            {this.state.paperContent[5].paragrph}
                          </p>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Paper>
                          <div
                            style={{ marginTop: "-44px" }}
                            className="whiteBg"
                          >
                            <div
                              style={{ backgroundColor: "#8BC7FF" }}
                              className="blueBg"
                            >
                              <img
                                style={{ height: "25px" }}
                                src={this.state.paperContent[4].img}
                                alt=""
                              />
                            </div>
                          </div>
                          <h3>{this.state.paperContent[4].title} </h3>
                          <p className="subHeading"></p>
                          <p className="greyText">
                            {this.state.paperContent[4].paragrph}
                          </p>
                        </Paper>
                      </Grid>
                    </Grid>
                  </MuiThemeProvider>
                </Grid>
              </Grid>
            </div>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div style={{ width: "45%" }} className="platformText">
                  <div style={{ width: "175px" }} className="bluetitle">
                    <span>BUILT FOR YOUR GROWTH</span>
                  </div>
                  <div className="blacktitle2">
                    <span>Finances, your way</span>
                  </div>
                  <div
                    style={{ width: "300px", marginTop: "60px" }}
                    className="smallerTexts"
                  >
                    <span className="blackTexts">
                      {" "}
                      Empower your team, keep control{" "}
                    </span>
                    <span className="greyTexts">
                      We are founder focussed. It’s already hard enough to build
                      a company. It’s shouldn’t be hard run yours.
                    </span>
                  </div>
                </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div>
                  <MuiThemeProvider theme={papertheme}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Paper>
                          <div
                            style={{ marginTop: "-44px" }}
                            className="whiteBg"
                          >
                            <div
                              style={{ backgroundColor: "#8BC7FF" }}
                              className="blueBg"
                            >
                              <img
                                style={{ height: "25px" }}
                                src={this.state.paperContent[6].img}
                                alt=""
                              />
                            </div>
                          </div>
                          <h3>{this.state.paperContent[6].title} </h3>
                          <p className="greyText">
                            {this.state.paperContent[6].paragrph}
                          </p>
                        </Paper>
                        <Paper>
                          <div
                            style={{ marginTop: "-44px" }}
                            className="whiteBg"
                          >
                            <div
                              style={{ backgroundColor: "#8BC7FF" }}
                              className="blueBg"
                            >
                              <img
                                style={{ height: "25px" }}
                                src={this.state.paperContent[8].img}
                                alt=""
                              />
                            </div>
                          </div>
                          <h3>{this.state.paperContent[8].title}</h3>

                          <p className="greyText">
                            {this.state.paperContent[8].paragrph}
                          </p>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Paper>
                          <div
                            style={{ marginTop: "-44px" }}
                            className="whiteBg"
                          >
                            <div
                              style={{ backgroundColor: "#8BC7FF" }}
                              className="blueBg"
                            >
                              <img
                                style={{ height: "25px" }}
                                src={this.state.paperContent[7].img}
                                alt=""
                              />
                            </div>
                          </div>
                          <h3>{this.state.paperContent[7].title} </h3>

                          <p className="greyText">
                            {this.state.paperContent[7].paragrph}
                          </p>
                        </Paper>
                      </Grid>
                    </Grid>
                  </MuiThemeProvider>
                </div>
             
                    </Grid>
                </Grid>
             
                
                
            </div>
          </SwipeableViews>
        </section>
      </div>
    );
  }
}

export default Features;
