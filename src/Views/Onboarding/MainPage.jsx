import React, { Component } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Avatar from "@material-ui/core/Avatar";
import Check from "@material-ui/icons/Check";
import TopBar from "../../Components/LandingPages/TopBar";
import { StepLabel, Typography } from "@material-ui/core";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import BusinessDetails from "./BusinessDetails";
import MoreDetails from "./MoreDetails";
import Leadership from "./Leadership";
import Ownership from "./Ownership";
//import BankDetails from "./BankDetails";
import OnboardingSuccess from "./OnboardingSuccess";
import ReviewSubmit from "./ReviewSubmit";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import api from "../../Services/apiCalls";
import Loader from "../../Components/SharedComponents/Loader";

const stepTheme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "none",
      },
    },
    MuiTypography: {
      body2: {
        fontFamily: "Poppins",
        fontSize: "13px",
        color: "black",
      },
    },
    MuiStepIcon: {
      root: {
        color: "#5B5B5B",
        "&:active": {
          color: "pink",
        },
      },
    },
    MuiStepConnector: {
      lineHorizontal: {
        borderTopStyle: "dashed",
        borderTopWidth: "2px",
      },
      line: {
        borderColor: "#626262",
      },
    },
    MuiAvatar: {
      root: {
        width: "30px",
        height: "30px",
      },
      colorDefault: {
        backgroundColor: "#5B5B5B",
        "&:active": {
          backgroundColor: "pink",
        },
      },
    },
  },
});
const styles = (theme) => ({
  root: {
    width: "1080px",
    margin: "0 auto",
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
class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      activeStep: 0,
      stepLabels: [
        "Business Details",
        "More Details",
        "Leadership",
        "Ownership",
        "Review & Submit",
      ],
      businessName: "",
      firstName: "Someone",
      businessID: 0,
      onboardingData: null,
      lastModified: new Date()
    };
    this.handleBusinessDetails = this.handleBusinessDetails.bind(this);
  }
  componentDidMount() {
    this.getApplicationData();
  }
  async getApplicationData() {
    const url = "Business/GetBusinessApplications";
    try {
      const res = await api.getRequest(url);
      //console.log(res.data);
      this.setState({
        onboardingData: res.data.response_data,
        activeStep: res.data.response_data[0].applicationStage ,
        firstName: res.data.response_data[0].user.firstName,
        businessID: res.data.response_data[0].id,
        lastModified: res.data.response_data[0].lastModified
      });
    } catch (error) {
      console.error(error);
    }
  }
  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <BusinessDetails
            prevStep={this.prevStep}
            handleBusinessDetails={this.handleBusinessDetails}
          />
        );
      case 1:
        return (
          <MoreDetails
            businessid={this.state.businessID}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <Leadership
            businessid={this.state.businessID}
            onboardingData={this.state.onboardingData[0]}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
      case 3:
        return (
          <Ownership
            businessid={this.state.businessID}
            onboardingData={this.state.onboardingData[0]}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
     
      case 4:
        return (
          <ReviewSubmit
          onboardingData={this.state.onboardingData[0]}
          businessid={this.state.businessID}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
      case 5: 
      return (
        <OnboardingSuccess/>
      );
      default:
        return "Unknown step";
    }
  }
  // proceed to the next step
  nextStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });

    
  };

  prevStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep - 1 });
  };
  handleBusinessDetails(id) {
    this.setState({
      businessID: id,
      activeStep: 1,
    });
  }
  render() {
    const { classes } = this.props;
    // console.log(this.state.activeStep);
    return (
      <div className="pageHeader">
        <TopBar name={this.state.firstName} />
       
        <div style={{ width: "100%", paddingTop: "90px" }}>
        {this.state.activeStep !== 5 ? (
          <>
        <p className="title">Let's get started</p>
        <div className={classes.root}>
            <MuiThemeProvider theme={stepTheme}>
              <Stepper
                alternativeLabel
                nonLinear
                activeStep={this.state.activeStep}
              >
                {this.state.stepLabels.map((label, index) => {
                  const stepProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel
                        icon={
                          <Avatar
                            style={
                              this.state.activeStep === index
                                ? { background: "#3297F4" }
                                : null
                            }
                          >
                            {" "}
                            <Check className="checkDot" />{" "}
                          </Avatar>
                        }
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </MuiThemeProvider>
          </div>
          </>
        ) : null }
          
          
          { this.state.onboardingData === null && this.state.activeStep !== 0  ? 
              <Loader/> :
              <div className={
                this.state.activeStep === 5 ? "pageContent2" : "pageContent"
              }>
              <Typography className={classes.instructions}>
                {this.getStepContent(this.state.activeStep)}
              </Typography>
            </div>
          }
          
        </div>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(MainPage));
