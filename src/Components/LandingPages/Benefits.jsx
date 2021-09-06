import { Divider, Grid } from "@material-ui/core";
import React, { Component } from "react";

export default class Benefits extends Component {
  constructor() {
    super();
    this.state = {
      pros: [
        {
          img: "/assets/icons/money.svg",
          title: "Save money",
          paragrph:
            "Get cash back as you and your team spend.Save money with free in-app transfers",
        },
        {
          img: "/assets/icons/time.svg",
          title: "Save time",
          paragrph:
            "Enjoy automatic accounting with real time reconciliations Pay instantly, anywhere, anytime with automatic notifications",
        },
        {
          img: "/assets/icons/effort.svg",
          title: "Save effort",
          paragrph:
            "Link all your financial accounts and systems in once place. Pay and spend, from one place",
        },
      ],
    };
  }
  render() {
    return (
      <div className="gridBg">
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid style={{ paddingTop:"190px"}} item xs={12} md={6}>
              <div className="anotherlist">
                <div className="prosList">
                  <div className="panelItem">
                    
                      <div
                        
                        className="blueBg"
                      >
                        <img
                          style={{ height: "17px" }}
                          src="/assets/icons/money.svg"
                          alt=""
                        />
                      </div>
                   
                    <div style={{ paddingLeft: "20px" }}>
                      <span>Save money</span>

                      <p>
                        Get cash back as you and your team spend.Save money with
                        free in-app transfers
                      </p>
                      <Divider light style={{ backgroundColor: "white" }} />
                    </div>
                  </div>
                  <div className="panelItem">
                    
                      <div
                        
                        className="blueBg"
                      >
                      <img
                          style={{ height: "23px" }}
                          src="/assets/icons/time.svg"
                          alt=""
                        />
                      </div>
                   
                    <div style={{ paddingLeft: "20px" }}>
                      <span>Save time</span>

                      <p>
                        Enjoy automatic accounting with real time
                        reconciliations Pay instantly, anywhere, anytime with
                        automatic notifications
                      </p>
                      <Divider light style={{ backgroundColor: "white" }} />
                    </div>
                  </div>
                  <div className="panelItem">
                    
                      <div
                        
                        className="blueBg"
                      >
                        <img
                          style={{ height: "17px" }}
                          src="/assets/icons/effort.svg"
                          alt=""
                        />
                      </div>
                  
                    <div style={{ paddingLeft: "20px" }}>
                      <span>Save effort</span>

                      <p>
                        Link all your financial accounts and systems in once
                        place. Pay and spend, from one place
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div  className="dashImg">
                <img src="/assets/img/dashboard.png" alt="" />
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="footerDiv">
          <p style={{ fontSize: "18px", fontWeight: "500", color: "#000000" }}>
            Get it on Appstore/Playstore
          </p>
          <div style={{ display: "flex" }}>
          <div>
            {" "}
            <img
              style={{ height: "64px" }}
              src="/assets/img/googleplay.png"
              alt=""
            />{" "}
          </div>
          <div>
            <img
              style={{ height: "53px", marginTop: "4px" }}
              src="/assets/img/appstore.png"
              alt=""
            />
          </div>
          </div>
          
        </div>
      </div>
    );
  }
}
