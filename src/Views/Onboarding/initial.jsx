import React, { Component } from 'react'
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Avatar from '@material-ui/core/Avatar';
import Check from '@material-ui/icons/Check';
import TopBar from '../../Components/LandingPages/TopBar';
import { StepLabel, Typography } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import BusinessDetails from "./BusinessDetails";
import MoreDetails from "./MoreDetails";
import Leadership from "./Leadership";
import Ownership  from "./Ownership";
import BankDetails from "./BankDetails";
import ReviewSubmit from './ReviewSubmit';
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";


const stepTheme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: 'none'
            }
        },
        MuiTypography: {
          body2: {
            fontFamily:'Poppins',
            fontSize:'13px',
            color:'black'
          }
        },
        MuiStepIcon: {
          root: {
            color:'#5B5B5B',
            '&:active': {
              color:'pink'
            }
          }
        },
        MuiStepConnector: {
          lineHorizontal: {
            borderTopStyle:'dashed',
            borderTopWidth:'2px'
          },
          line: {
            borderColor:'#626262'
          }
        },
        MuiAvatar: {
          root: {
            width:'30px',
            height: '30px'
          },
          colorDefault: {
            backgroundColor:'#5B5B5B',
            '&:active': {
              backgroundColor:'pink'
            }
          }
        }
    }
});
const styles = (theme) => ({
    root: {
        width: "1080px",
        margin:"0 auto"
      },
      button: {
        marginRight: theme.spacing(1),
      },
      backButton: {
        marginRight: theme.spacing(1),
      },
      completed: {
        display: "inline-block",
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
  });
 class initial extends Component {
    constructor() {
        super();
        this.state = {
            step:0,
            activeStep: 0,
            stepLabels: ["Business Details", "More Details", "Leadership","Ownership","Banking Details", "Review & Submit"],
         businessName:''
        };
      //  this.handleFormInput = this.handleFormInput.bind(this);
      }
      getStepContent(step) {
        switch (step) {
          case 0:
            return <BusinessDetails prevStep={this.prevStep} nextStep={this.nextStep}/>;
          case 1:  
            return <MoreDetails prevStep={this.prevStep} nextStep={this.nextStep}/> ;
          case 2:
            return <Leadership prevStep={this.prevStep} nextStep={this.nextStep}/>;
            case 3:
              return <Ownership prevStep={this.prevStep} nextStep={this.nextStep}/> ;
            case 4:
              return <BankDetails prevStep={this.prevStep} nextStep={this.nextStep}/>;
            case 5:
              return <ReviewSubmit prevStep={this.prevStep} nextStep={this.nextStep}/> ;
          default:
            return "Unknown step";
        }
      }
      // proceed to the next step
nextStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  }
  prevStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep - 1 });
  }
    render() {
        const { classes } = this.props;
    console.log(this.state.activeStep);
        return (
            <div className="pageHeader">
        
      <TopBar />
      <div style={{ width: "100%", paddingTop: "90px" }}>
        <p className="title">Let's get started</p>
        <div className={classes.root}>
            <MuiThemeProvider theme={stepTheme}>
            <Stepper alternativeLabel nonLinear activeStep={this.state.activeStep} >
            {this.state.stepLabels.map((label, index) => {
              const stepProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel icon={<Avatar  style={ this.state.activeStep === index
                        ? { background: "#3297F4" }
                        : null
                    } > <Check className="checkDot"/> </Avatar>}>
                  {label}
                  </StepLabel>
                  
                </Step>
              );
            })}
          </Stepper>
            </MuiThemeProvider>
            </div>
            <div className="pageContent" >
                <Typography className={classes.instructions}>
                  {this.getStepContent(this.state.activeStep)}
                </Typography>
                <div>
                 
                </div>
              </div>
        </div>
     
    </div>
        )
    }
}
export default withRouter(withStyles(styles)(initial));