import React, { Component } from "react";
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import Avatar from '@material-ui/core/Avatar';
import {
  withStyles,
  createTheme,
  Modal,
  Backdrop,
  MuiThemeProvider,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const stylesModal = (theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: "white",
    border: "none",
    borderRadius: "5px",
    boxShadow: "inherit",
  },
  container: {
    minHeight: 500,
    overflowX: "hidden",
  },
});
const themeModal = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(37, 43, 51, 0.5",
        backdropFilter: "blur(2px)",
      },
    },
  },
});
class ChooseBankConnection extends Component {
  constructor(){
    super();
    this.state = {
      setOpen: false,
    }
  }
 handleManualBank = () => {
  this.props.handleOpen();
 }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={themeModal}>
          <Modal
            className={classes.modal}
            open={this.props.setOpen}
            onClose={() => this.props.handleOpen()}
            closeAfterTransition
            BackdropComponent={Backdrop}
          >
            <div
            
              className={classes.paper}
            >
              <div style={{width:'700px',height:'430px'}} className="ModalPaper">
                <div className="ModalHeader" style={{ padding: "0px" }}>
                  <div>
                    <button
                      className="BackButton"
                      style={{ float: "right" }}
                      onClick={() => this.props.handleOpen()}
                    >
                      <img src="./assets/icons/close.svg" alt="x" />
                    </button>
                  </div>
                  
                </div>

                <h3>Connect New Account</h3>
               <p>Your business limit on Nash is determined in part by your account balances. Please link all your business bank accounts.</p>
               <div className="bankMenus">
                 <div className="bankDiv">
                    <Avatar style={{margin:'0 auto', width:'75px',height:'75px' ,background:'#3297F4'}}>
                      <AccountBalanceOutlinedIcon fontSize="large" style={{color:'white'}} />
                    </Avatar>
                    <p>Connect Automatically</p>
                 </div>
                 <div className="bankDiv">
                 <Avatar style={{margin:'0 auto', width:'75px',height:'75px' ,background:'#3297F4'}}>
                      <AccountBalanceOutlinedIcon fontSize="large" style={{color:'white'}} />
                    </Avatar>
                    <p>Connect Manually</p>
                 </div>
               </div>
              </div>
            </div>
          </Modal>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default  withRouter(withStyles(stylesModal)(ChooseBankConnection))
