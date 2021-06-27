import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import "./Styles/App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const browserHistory = createBrowserHistory();

// const avenir = {
//   fontFamily: "Avenir LT Pro 55 Roman",
//   src:
//     "local('Avenir LT Pro 55 Roman'), url('./fonts/AvenirLTProRoman.woff') format('woff')"
// };

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: "Avenir LT Pro 55 Roman !important"
//   },
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         "@font-face": [avenir]
//       }
//     },
//     MuiTypography: {
//       root: {
//         fontFamily: "Avenir LT Pro 55 Roman !important"
//       }
//     }
//   }
// });

class App extends Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
    
  }

  

  render() {
    return (
      <ThemeProvider>
         {/* <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          timeout={1000 * 60 * 15}
          onActive={this.handleOnActive}
          onIdle={this.handleOnIdle}
          debounce={250}
        />  */}
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
