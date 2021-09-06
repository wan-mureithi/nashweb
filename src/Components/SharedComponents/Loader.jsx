import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";

class Loader extends Component {
  render() {
    return (
      <div
        //className="Container"
        //style={{ backgroundImage: `url("../../../icon/background.png")` }}
      >
        <div
          //className="SignUpForm"
          style={{ marginTop: "0px", textAlign: "center", height: "100vh",background:'none' }}
        >
          <div style={{ paddingTop: "20%" }}>
            <div>
              <CircularProgress
                style={{ color: "#BFCFFF", marginBottom: "20px" }}
                size={40}
              />
            </div>
            <div>
              <span className="Loader"> Preparing your view . . . .</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
