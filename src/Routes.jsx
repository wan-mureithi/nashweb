import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

/* Landing Pages */
import LandingPage from "./Views/LandingPage";

class Routes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={LandingPage} />
            </Switch>
        );
    }
}
export default Routes;