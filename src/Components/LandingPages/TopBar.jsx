import React, { Component } from "react";
import {
  withStyles,
  createTheme,
  MuiThemeProvider,
  Hidden,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withRouter } from "react-router-dom";
import { Link } from "react-scroll";
import jwtDecode from "jwt-decode";


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

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      setOpen: false,
      isChecked: false,
      username: ''
    };
    this.handleOpen = this.handleOpen.bind(this);
  }
  componentDidMount() {
    this.getUserName();
    this.setState({ isChecked: true });

  }
  // handleChange(menuItem) {
  //   this.setState({ menu: menuItem });
  //   this.props.history.push(`/${menuItem}`);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }
  handleOpen() {
    this.setState({ setOpen: !this.state.setOpen });
  }
  getUserName() {
    const token = localStorage.getItem('ac_tkn');
    let userData = jwtDecode(token);
    this.setState({ username: userData.firstname })
  }

  handleDrawerToggle = () => {
    if (this.state.mobileOpen) {
      this.setState({ mobileOpen: false });
    } else {
      this.setState({ mobileOpen: true });
    }
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={themeAppBar}>
          <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
              <div className="DisplayFlex1" style={{ flexGrow: 1 }}>
                
                  <img
                    alt="nash"
                    onClick={()=>this.props.history.push("/")}
                    src="./assets/img/logo.svg"
                    style={{
                      marginLeft: "15%",
                      cursor: "pointer",
                      height: "32px",
                      width: "124px",
                    }}
                  />
              
              </div>

              
              <Hidden xsDown>
                
                <Link
                  activeClass="active"
                  className="landingPageButton"
                  to="controlMoney"
                  
                >
                  <Button
                    color="inherit"
                    onClick={()=>this.props.history.push("/ScheduleMeeting")}
                    className="landingPageButton"
                    component="button"
                    style={{ marginRight: "40px" }}
                  >
                    Help
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
                 
                  <div style={{
                      marginBottom: "0px",
                      width: "155px",
                      marginRight: "10%",
                    }} className="avatarDiv">
                  <span>  {this.state.username}   </span> 
                    <Avatar style={{ width:'30px',height:'30px'}}> <AccountCircleIcon/> </Avatar>
                  </div>
                </Link>
              </Hidden>
            </Toolbar>
            
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(withStyles(stylesIndex)(TopBar));
