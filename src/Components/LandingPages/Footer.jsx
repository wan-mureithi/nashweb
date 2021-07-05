import React, { Component } from "react";
import { Grid,Hidden } from "@material-ui/core";

class LandingPageFooter extends Component {
  constructor() {
    super();
    this.state = {
      companyMenu: [{ label: "About Us", path: "" }, { label: "Blog", path: "" }, { label: "Media kit", path: "" }, { label: "Contact Us", path: "" }],
      solutionsMenu: [{ label: "Another", path: "" }, { label: "Something", path: "" }, { label: "Business partners", path: "" }, { label: "SOmething", path: "" }],
      legalMenu: [{ label: "Cookies Policy", path: "" }, { label: "Privacy & security policy", path: "" }, { label: "Terms of service", path: "" }, { label: "Law Enforcement", path: "" }],
      resourcesMenu: [{ label: "Investments", path: "" }, { label: "Something else", path: "" }],
      icons: [{ src: "/icon/Instagram.svg", path: "", label: "IG" }, { src: "/icon/Twitter.svg", path: "", label: "Twitter" }, { src: "/icon/Youtube.svg", path: "", label: "YT" }],
    };
  }
  render() {
    return<div className="footer">
      <div className="topFooterRow">
      <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
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
              <button className="transparentButton">Get Nash</button>
            </div>
          </Grid>
        </Grid>
           
       
          </div>
          <Hidden mdDown>
        <hr className="footer_hr" />
          </Hidden> 
      <div className="footerMenu">
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <div style={{ marginBottom: "24px" }}>
              {/* <span className="LandingPageWhiteText"></span> */}
            </div>
           
              <div className="footerMenulist" >
                <span className="smallgreytext">Nash enables provision and eases access to fair financial products for all.</span>
                <div className="footerIcons">
            <div className="BG" >
                <img src="assets/icons/fb.svg" alt="fb" />
                </div>
                <div className="BG" >
                <img src="assets/icons/ig.svg" alt="ig" />
                </div>
                <div className="BG" >
                <img src="assets/icons/twitter.svg" alt="" />
                </div>
            </div>
              </div>
         
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <div style={{ marginBottom: "24px" }}>
              <span className="LandingPageWhiteText" style={{ fontSize: "18px", paddingBottom: "20px" }}>Site map</span>
            </div>
            
              <div  className="footerMenulist" >
                <div style={{ marginBottom: "20px" }}>
                <span className="LandingPageWhiteText">Why us</span>
                </div>
                <div style={{ marginBottom: "20px" }}>
                <span className="LandingPageWhiteText">Features</span>
                </div>
                
                
              </div>
           
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <div style={{ marginBottom: "24px" }}>
              <span className="LandingPageWhiteText" style={{ fontSize: "18px", paddingBottom: "20px" }}>Contact us</span>
            </div>
              <div className="footerMenulist">
                <div style={{ marginBottom: "20px" }}>
                <span className="LandingPageWhiteText">Shoot us an email</span>
                </div>
                <div style={{ marginBottom: "20px" }}>
                <span className="LandingPageWhiteText">hello@nashafrica.co</span>
                </div>
               
              </div>
         
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <div style={{ marginBottom: "24px" }}>
              <span className="LandingPageWhiteText" style={{ fontSize: "18px", paddingBottom: "20px" }}>Download</span>
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
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <span className="LandingPageWhiteText"> Copyright @ 2021 Nash Inc - All rights reserved.</span>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            
          </Grid>
        </Grid>
      </div>
    </div>;
  }
}

export default LandingPageFooter;
