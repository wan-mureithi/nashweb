import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
/* Landing Pages */
import LandingPage from "../../Views/LandingPage";
import VerifyEmail from "./Views/VerifyEmail";
import CreatePassword from "./Views/CreatePassword";
import MainPage from "./Views/Onboarding/MainPage";
import ScheduleMeeting from "./Views/ScheduleMeeting";
import Login from "./Views/Login";
import ResendEmail from "./Views/ResendEmail";
import PageNotFound from "./Views/Others/404_page";
import ResetPassword from "./Views/ResetPassword";
import PasswordResetEmail from "./Views/PasswordResetEmail";
class Routes extends Component {
  render() {
    return (
        
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/CreatePassword" component={CreatePassword} />
        <Route exact path="/Home" component={LandingPage} />
        <Route exact path="/VerifyEmail" component={VerifyEmail} />
        <Route path="/Onboarding" component={MainPage} />
        <Route exact path="/ScheduleMeeting" component={ScheduleMeeting}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/ResendEmail" component={ResendEmail}/> 
        <Route exact path="/ResetPassword" component={ResetPassword}/> 
        <Route exact path="/PasswordReset" component={PasswordResetEmail}/> 
        <Route component={PageNotFound}/> 
        <Route>
          <Redirect to="/Home" />
        </Route>
      </Switch>
    );
  }
}
export default Routes;
