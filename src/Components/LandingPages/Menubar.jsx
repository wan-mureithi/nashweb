import React, { Component } from "react";
import {
  withStyles,
  createTheme,
  MuiThemeProvider,
  Hidden,
  Drawer,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import { Link } from "react-scroll";
import SignupModal from "./SignupModal";
import AOS from "aos";
import "aos/dist/aos.css";
import jwtDecode from "jwt-decode";
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const stylesIndex = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "white",
    borderRadius: "0 0 0 30px",

    boxShadow: "0px 4px 25px rgb(0 0 0 / 10%)",
    height: "87px",
  },
});

const themeAppBar = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        // borderRadius:'0 0 0 30px',
        // boxShadow: "0px 4px 25px rgb(0 0 0 / 10%)",
        height: "74px",
      },
      positionFixed: {
        // left:'100px'
      },

      colorPrimary: {
        backgroundColor: "transparent",
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: "none",
      },
      root: {
        maxWidth: "1335px",
        margin: "auto",
      },
    },
    MuiButton: {
      root: {
        marginRight: "15px",
        fontFamily: "Poppins",
        color: "#898989 !important",
        fontSize: "16px",
        fontWeight: 400,
        textTransform: "none",
        backgroundColor: "none !important",
        border: "2px solid #ffffff !important",
        position: "relative",
        "&:hover": {
          backgroundColor: "none !important",
        },
        "&:focus": {
          backgroundColor: "none !important",
        },
      },
    },
    MuiDrawer: {
      paper: {
        width: "150px",
        alignItems: "center",
        paddingTop: "50px",
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(37, 43, 51, 0.5)",
        backdropFilter: "blur(2px)",
      },
    },
  },
});

class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      setOpen: false,
      isChecked: false,
      landingPageMenu: [
        { id: "Whyus", label: "Why us" },
        { id: "Features", label: "Features" },
      ],
      menu: localStorage.getItem("landingPageMenu") || "",
      username: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  componentDidMount() {
    this.setState({ isChecked: true });
    AOS.init({
      duration: 2000,
    });
    let token = localStorage.getItem("ac_tkn");
    if(token){
      let userData = jwtDecode(token);
    this.setState({ username: userData.firstname });
    }
    
  }
  handleChange(menuItem) {
    this.setState({ menu: menuItem });
    this.props.history.push(`/${menuItem}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  handleOpen() {
    this.setState({ setOpen: !this.state.setOpen });
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
            <Toolbar className={classes.toolbar}>
              <div className="DisplayFlex1" style={{ flexGrow: 1 }}>
                <Link
                  activeClass="active"
                  className="landingPageButton"
                  to="header-container"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <img
                    alt="nash"
                    src="./assets/img/logo.svg"
                    style={{
                      marginLeft: "15%",
                      cursor: "pointer",
                      height: "32px",
                      width: "124px",
                    }}
                  />
                </Link>
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
                    keepMounted: true,
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

                  <Link
                    activeClass="active"
                    to="cardReady"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {this.state.username !== '' ? (
                    <div
                    style={{
                      marginBottom: "0px",
                      width: "155px",
                      marginRight: "10%",
                    }}
                    className="avatarDiv"
                  >
                    <span> {this.state.username} </span>
                    <Avatar style={{ width: "30px", height: "30px" }}>
                      {" "}
                      <AccountCircleIcon />{" "}
                    </Avatar>
                  </div>
                    ) : (
                      <button
                      className="SignUpFormsSubmit"
                      style={{ width: "120px", marginTop: "20px" }}
                      // onClick={()=>this.handleOpen()}
                    >
                      Get Nash
                    </button>
                    )}
                    
                    
                  </Link>
                </Drawer>
              </Hidden>
              <Hidden xsDown>
                <Link
                  activeClass="active"
                  className="landingPageButton"
                  to="header-container"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <Button
                    color="inherit"
                    className="landingPageButton"
                    component="button"
                    style={{ marginRight: "40px" }}
                  >
                    Why Nash
                  </Button>
                </Link>
                <Link
                  activeClass="active"
                  className="landingPageButton"
                  to="controlMoney"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <Button
                    color="inherit"
                    className="landingPageButton"
                    component="button"
                    style={{ marginRight: "40px" }}
                  >
                    Features
                  </Button>
                </Link>

                <Link
                  activeClass="active"
                  to="cardReady"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {this.state.username !== '' ? (
                    <div
                    style={{
                      marginBottom: "0px",
                      width: "155px",
                      marginRight: "10%",
                    }}
                    className="avatarDiv"
                  >
                    <span> {this.state.username} </span>
                    <Avatar style={{ width: "30px", height: "30px" }}>
                      {" "}
                      <AccountCircleIcon />{" "}
                    </Avatar>
                  </div>
                    ) : (
                      <button
                    className="SignUpFormsSubmit"
                    style={{
                      marginBottom: "0px",
                      width: "150px",
                      marginRight: "10%",
                    }}
                  >
                    Get Nash
                  </button>
                    )}
                  
                </Link>
              </Hidden>
            </Toolbar>
            <SignupModal
              handleOpen={this.handleOpen}
              setOpen={this.state.setOpen}
            />
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(withStyles(stylesIndex)(Menubar));
