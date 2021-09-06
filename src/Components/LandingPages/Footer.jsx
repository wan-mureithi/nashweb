import React, { Component } from "react";
import { Grid, Hidden,Divider } from "@material-ui/core";
import { Link } from "react-scroll";

class LandingPageFooter extends Component {
  constructor() {
    super();
    this.state = {
     
      icons: [
        { src: "/icon/Instagram.svg", path: "", label: "IG" },
        { src: "/icon/Twitter.svg", path: "", label: "Twitter" },
        { src: "/icon/Youtube.svg", path: "", label: "YT" },
      ],
    };
  }
  render() {
    return (
      <div className="footer">
        <div style={{ maxWidth:"1300px",margin:'auto'}}>
        <div className="topFooterRow">
          <Grid container>
            <Grid
              style={{ paddingLeft: "80px" }}
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
            >
              <img
                style={{ height: "40px" }}
                src="assets/whiteLogo.svg"
                alt="logo"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="getNash">
                <span>
                  Expense Management. Payment Flows Management. Approvals &
                  Controls
                </span>
               
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2}>
           
            <Link
                  activeClass="active"
                  to="cardReady"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
               <button className="transparentButton">Get Nash</button>
                </Link>
            </Grid>
          </Grid>
        </div>
        <Hidden mdDown>
        <Divider light style={{ backgroundColor: "rgba(255, 255, 255, 0.75)",marginTop:'45px',height:'0.3px',marginLeft:'66px',
      width:'92%',opacity:'0.3' }} />
        </Hidden>
        <div className="footerMenu">
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <div style={{ marginBottom: "24px" }}>
                {/* <span className="LandingPageWhiteText"></span> */}
              </div>

              <div className="footerMenulist">
                <span style={{ fontSize: "16px" }} className="smallgreytext">
                  Nash enables provision and eases access to fair financial
                  products for all.
                </span>
                <div className="footerIcons">
                  <div className="BG">
                    <img src="assets/icons/fb.svg" alt="fb" />
                  </div>
                  <div className="BG">
                    <img src="assets/icons/ig.svg" alt="ig" />
                  </div>
                  <div className="BG">
                    <img src="assets/icons/twitter.svg" alt="" />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              style={{ paddingLeft: "80px" }}
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
            >
              <div style={{ marginBottom: "24px" }}>
                <span className="footerHeader">Site map</span>
              </div>

              <div className="footerMenulist">
                <div style={{ marginBottom: "20px" }}>
                <Link
                  activeClass="active"
                  to="header-container"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                   <span className="LandingPageWhiteText">Why Nash</span>
                </Link>
                 
                </div>
                <div style={{ marginBottom: "20px" }}>
                <Link
                  activeClass="active"
                  to="controlMoney"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                    <span className="LandingPageWhiteText">About us</span>
                </Link>
                 
                </div>
                <div style={{ marginBottom: "20px" }}>
                <Link
                  activeClass="active"
                  to="controlMoney"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <span className="LandingPageWhiteText">Features</span>
                </Link>
                 
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <div style={{ marginBottom: "24px" }}>
                <span className="footerHeader">Contact us</span>
              </div>
              <div className="footerMenulist">
                <div style={{ marginBottom: "20px" }}>
                  <span className="LandingPageWhiteText">
                    Shoot us an email
                  </span>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <span className="LandingPageWhiteText">
                    hello@nashafrica.co
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <div style={{ marginBottom: "24px" }}>
                <span className="footerHeader">Download app</span>
              </div>

              <div className="footerMenulist">
                <div>
                  <img src="/assets/img/fadedgooglestore.svg" alt="" />
                </div>
                <div>
                  <img src="/assets/img/fadedappstore.svg" alt="" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="footerRights">
          <Hidden mdDown>
          <Divider light style={{ backgroundColor: "rgba(255, 255, 255, 0.75)",marginBottom:'40px',height:'0.3px',marginLeft:'66px',
      width:'92%',opacity:'0.3' }} />
          </Hidden>
          <Grid container>
            <Grid
              style={{ textAlign: "center", marginBottom: "10px" }}
              item
              xs={12}
              sm={12}
              md={6}
              lg={12}
            >
              <span className="LandingPageWhiteText">
                {" "}
                Copyright @ 2021 Nash Inc - All rights reserved.
              </span>
            </Grid>
          </Grid>
        </div>
        </div>
        
      </div>
    );
  }
}

export default LandingPageFooter;
