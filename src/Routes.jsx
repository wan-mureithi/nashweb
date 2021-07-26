import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

/* Landing Pages */
import LandingPage from "./Views/LandingPage";
import VerifyEmail from "./Views/VerifyEmail";
import CreatePassword from "./Views/CreatePassword";
//import MainPage from "./Views/Onboarding/MainPage";
import initial from "./Views/Onboarding/initial";

class Routes extends Component {
  render() {
    return (
        
      <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={LandingPage} />
        <Route exact path="/VerifyEmail" component={VerifyEmail} />
        <Route exact path="/CreatePassword" component={CreatePassword} />
        <Route exact path="/Onboarding" component={initial} />
        
      </Switch>
    );
  }
}
export default Routes;
