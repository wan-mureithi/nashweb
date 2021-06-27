import React, { Component } from "react";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
  Hidden,
  Drawer
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";

const stylesIndex = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
});

const themeAppBar = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FFFFFF"
      },
      root: {
        
        borderRadius:"0 0 0 30px",
        boxShadow:"0px 4px 25px rgb(0 0 0 / 10%)"
      },
      positionFixed: {
        left:"60px",
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: " 0px 1px 0px #E5E9F2"
      }
    },
    MuiButton: {
      root: {
        marginRight: "15px",
        fontFamily: "inherit",
        color: "#252B33 !important",
        fontSize: "14px",
        fontWeight: 500,
        textTransform: "none",
        backgroundColor: "none !important",
        border: "2px solid #ffffff !important",
        position: "relative",
        "&:hover": {
          backgroundColor: "none !important"
        },
        "&:focus": {
          backgroundColor: "none !important"
        }
      }
    },
    MuiDrawer: {
      paper: {
        width: "150px",
        alignItems: "center",
        paddingTop: "50px"
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(37, 43, 51, 0.5)",
        backdropFilter: "blur(2px)"
      }
    }
  }
});

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      landingPageMenu: [
        { id: "WhyNash", label: "Why Nash" },
        { id: "Aboutus", label: "About us" }
      ],
      menu: localStorage.getItem("landingPageMenu") || ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(menuItem) {
    this.setState({ menu: menuItem });
    this.props.history.push(`/${menuItem}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  handleDrawerToggle = () => {
    if (this.state.mobileOpen) {
      this.setState({ mobileOpen: false });
    } else {
      this.setState({ mobileOpen: true });
    }
  };

  handleSelectedMenu(index) {
    this.setState({ menu: this.state.landingPageMenu[index].id });
    localStorage.setItem(
      "landingPageMenu",
      this.state.landingPageMenu[index].id
    );
    this.props.history.push(this.state.landingPageMenu[index].path);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={themeAppBar}>
          <AppBar position="fixed">
            <Toolbar>
              <div className="DisplayFlex1" style={{ flexGrow: 1 }}>
                <img
                  alt="nash"
                  src="./assets/mainlogo.png"
                  style={{ marginLeft: "15%", cursor: "pointer" }}
                  onClick={() => {
                    this.props.history.push("/");
                    
                  }}
                />
              </div>

              <Hidden smUp implementation="css">
                <IconButton
                  edge={false}
                  onClick={() => this.handleDrawerToggle()}
                  className={classes.menuButton}
                  style={{ color: "#000000" }}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={this.state.mobileOpen}
                  onClick={() => this.handleDrawerToggle()}
                  ModalProps={{
                    keepMounted: true
                  }}
                >
                  {this.state.landingPageMenu.map((menu, index) => (
                    <Button
                      color="inherit"
                      key={index}
                      className={
                        this.state.menu === menu.id
                          ? "LandingPageSelected"
                          : "landingPageButton"
                      }
                      onClick={() => this.handleSelectedMenu(index)}
                    >
                      {menu.label}
                    </Button>
                  ))}
                  
                  <button
                    className="GetStarted"
                    style={{ width: "100px" }}
                  >
                    Get Nash
                  </button>
                </Drawer>
              </Hidden>
              <Hidden xsDown>
                {this.state.landingPageMenu.map((menu, index) => (
                  <Button
                    color="inherit"
                    key={index}
                    className={
                      this.state.menu === menu.id
                        ? "LandingPageSelected"
                        : "landingPageButton"
                    }
                    onClick={() => this.handleSelectedMenu(index)}
                    component="button"
                  >
                    {menu.label}
                  </Button>
                ))}
                {/* <button
                  className="PurpleButton"
                  style={{ marginRight: "30px", width: "62px" }}
                  onClick={() => this.props.history.push("/Login")}
                >
                  Login
                </button> */}
                <button
                  className="GetStarted"
                  style={{
                    marginBottom: "0px",
                    width: "100px",
                    marginRight: "10%"
                  }}
                  onClick={() => this.props.history.push("/Signup")}
                >
                  Get started
                </button>
              </Hidden>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(withStyles(stylesIndex)(AppMenu));
