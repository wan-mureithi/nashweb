import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import "./Styles/App.css";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const browserHistory = createBrowserHistory();

const poppins = {
  fontFamily: "Poppins Regualr 400",
  src:
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
};

const theme = createTheme({
  typography: {
    fontFamily: "Poppins !important"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [poppins]
      }
    },
    MuiTypography: {
      root: {
        fontFamily: "Poppins !important"
      }
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
    
  }

  

  render() {
    return (
      <ThemeProvider theme={theme}>
        
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
