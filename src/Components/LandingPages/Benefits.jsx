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
      <div>
        <div className="gridBg">
          <div className="anotherlist">
            <div className="prosList">
              {this.state.pros.map((pro, index) => (
                <div key={index} className="panelItem">
                  <div
                    style={{
                      marginLeft: "-25px",
                      width: "50px",
                      height: "50px",
                    }}
                    className="whiteBg"
                  >
                    <div
                      style={{
                        backgroundColor: "#8BC7FF",
                        width: "50px",
                        height: "50px",
                      }}
                      className="blueBg"
                    >
                      <img style={{ height: "17px" }} src={pro.img} alt="" />
                    </div>
                  </div>
                  <div style={{ paddingLeft: "20px" }}>
                    <span>{pro.title}</span>
                    <p>{pro.paragrph}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashImg">
            <img src="/assets/img/dashboard.png" alt="" />
          </div>
          <div className="footerDiv">
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
