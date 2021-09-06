import React, { Component } from "react";
import { createTheme, MuiThemeProvider, withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Typography } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import api from "../../Services/apiCalls";
import CustomSnackbar from "../../Components/SharedComponents/CustomSnackbar";
import Moment from "react-moment";
//import ExpandLess from "@material-ui/icons/ExpandLess";
//import ExpandMore from '@material-ui/icons/ExpandMore';

const stylesModal = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItem: {
    border: "0.3px solid #070707",
    boxSizing: "borderBox",
    borderRadius: "10px",
    marginBottom: "25px",
  },
  listTitleText: {
    color: "black",
    fontSize: "18px",
    fontWeight: "600",
  },
  heading: {
    flexBasis: "33.33%",
    flexShrink: 0,
    color: "black",
    fontSize: "18px",
    fontWeight: "700",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});
const listTheme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        textAlign: "left",
      },
      elevation1: {
        boxShadow: "none",
      },
    },
    MuiList: {
      root: {
        width: "100%",
      },
    },
    MuiAccordionDetails: {
      root: {
        backgroundColor: "#FAFAFA",
        borderRadius: "10px",
      },
    },
    MuiAccordionSummary: {
      root: {
        "&$expanded": {
          backgroundColor: "#EEEEEE",
          borderRadius: "5px",
        },
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: "Poppins",
      },
      body2: {
        fontFamily: "Poppins",
      },
    },
    MuiListItemText: {
      primary: {
        color: "#5F5F5F",
        fontSize: "13px",
      },
      secondary: {
        color: "black",
        fontSize: "18px",
        fontWeight: "500",
      },
    },
  },
});
class ReviewSubmit extends Component {
  constructor() {
    super();
    this.state = {
      setOpen: false,
      activeStep: 0,
      stepLabels: [
        "Business Details",
        "More Details",
        "Leadership",
        "Ownership",
        "Banking Details",
        "Review & Submit",
      ],
      onboardingSteps: [
        {
          label: "Business Details",
          status: false,
        },
        {
          label: "More Details",
          status: false,
        },
        {
          label: "Leadership",
          status: false,
        },
        {
          label: "Ownership",
          status: false,
        },
        {
          label: "Banking Details",
          status: false,
        },
        {
          label: "Review & submit",
          status: false,
        },
      ],
      expanded: "panel1",
      isLoading: false,
      executives: [
        {
          firstName: "Default",
          lastName: "Name",
          title: "head",
          emailAddress: "default@domain.com",
          phoneNo: "25400000000",
          streetAddress: "Mara Road",
          floorNo: "7th floor",
          cityRegion: "Nairobi",
          execDob: "11/11/2000",
          execSSN: "1234",
        },
      ],
      businessOwners: [
        {
          bioData: {
            addressId: 40,
            city: "Nairobi",
            countryRegion: "Eastlands",
            dateOfBirth: "2000-09-05T21:00:00",
            emailAddress: "jon@yopmail.com",
            firstName: "John",
            identificationNo: "12344",
            lastName: "Doe",
            officeNo: "7th",
            phoneNo: "254700000000",
            street: "Umoja",
            title: "Head of ownership",
            zipCode: "1244",
          },
          bioDataId: 1,
        },
      ],
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
    };
  }
  componentDidMount() {
    //console.log(this.props.onboardingData)
    this.getExecutives();
  }
  getExecutives() {
    let onboardingData = this.props.onboardingData;
    console.log(onboardingData);
    if (onboardingData.businessExecutives[0] !== undefined) {
      this.setState({
        executives: onboardingData.businessExecutives[0].bioData,
        businessOwners: onboardingData.businessOwners,
      });
    }
  }
  handleSave = async () => {
    this.setState({ isLoading: true });
    const url = "Business/CompleteRegistration";
    let payload = {
      businessId: this.props.businessid,
    };
    console.log(payload);
    try {
      let response = await api.postRequest(url, payload);
      console.log(response);
      if (response.data.status_code !== 200) {
        this.setState({
          isLoading: false,
          snackbaropen: true,
          responseStatus: "failed",
          snackTitle: response.data.message,
        });
      } else {
        this.setState({ isLoading: false });
        this.props.nextStep();
      }
      // this.props.nextStep();
    } catch (error) {
      console.error(error.response);
      this.setState({ isLoading: false });
    }
  };
  handleClick = () => {
    this.setState({ setOpen: !this.state.setOpen });

    //this.setState({ onboardingSteps[i].status: true })
  };
  handleChange = (panel) => (event, isExpanded) => {
    //setExpanded(isExpanded ? panel : false);
    if (isExpanded) {
      this.setState({ expanded: panel });
    } else {
      this.setState({ expanded: false });
    }
  };
  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };
  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <CustomSnackbar
          hideAlert={this.snackbarClose}
          showSnack={this.state.snackbaropen}
          hideSnack={this.snackbarClose}
          response={this.state.responseStatus}
          title={this.state.snackTitle}
          messagetxt={this.state.snackbarmsg}
        />
        <div style={{ height: "1360px" }} className="onboardForm">
          <h3>Review & Submit </h3>
          <p
            style={{ marginBottom: "50px", marginTop: "60px" }}
            className="subtitle"
          >
            Kindly review the information you have provided. 
          </p>
          <MuiThemeProvider theme={listTheme}>
            <Accordion
              expanded={this.state.expanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  Business Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List component="div" disablePadding>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business Legal Name"
                      secondary={this.props.onboardingData.legalName}
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business DBA"
                      secondary=" Amazing Corp "
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business Name on Physical Card"
                      secondary={this.props.onboardingData.nameOnCard}
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business Registration Number"
                      secondary={
                        this.props.onboardingData.businessRegistrationNo
                      }
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business Website"
                      secondary={this.props.onboardingData.website}
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business Phone"
                      secondary={this.props.onboardingData.phoneNo}
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business Physical Address"
                      secondary={
                        this.props.onboardingData.address.city +
                        ", " +
                        this.props.onboardingData.address.countryRegion
                      }
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={this.state.expanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>
                  Additional Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List component="div" disablePadding>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="State of Incorporation"
                      secondary={this.props.onboardingData.stateOfIncorporation}
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Date Established"
                      secondary={
                        <Moment
                          format="YYYY/MM/DD"
                          date={this.props.onboardingData.dateEstablished}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Current Monthly Business Spend"
                      secondary=" Amazing Corp "
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business Description"
                      secondary={this.props.onboardingData.businessDescription}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={this.state.expanded === "panel4"}
              onChange={this.handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Leadership </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List component="div" disablePadding>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Executive's Name"
                      secondary={
                        this.state.executives.firstName +
                        " " +
                        this.state.executives.lastName
                      }
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Executive's Job Title"
                      secondary={this.state.executives.title}
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Execuitive's Email Address "
                      secondary={this.state.executives.emailAddress}
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Business Phone Number"
                      secondary={this.state.executives.phoneNo}
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Execuitive's Home Location"
                      secondary={
                        this.state.executives.street +
                        ", " +
                        this.state.executives.city
                      }
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={this.state.expanded === "panel5"}
              onChange={this.handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography className={classes.heading}>Ownership </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* <ListItem button onClick={this.handleClick}> */}
                {this.state.businessOwners.map((owner, index) => (
                  <List key={index} component="div" style={{marginRight:'5px'}} disablePadding>
                    <ListItem button className={classes.listItem}>
                      <ListItemText
                        primary="Owner's Name"
                        secondary={
                          owner.bioData.firstName + " " + owner.bioData.lastName
                        }
                      />
                    </ListItem>
                    <ListItem button className={classes.listItem}>
                      <ListItemText
                        primary="Owner's Job Title"
                        secondary={owner.bioData.title}
                      />
                    </ListItem>
                    <ListItem button className={classes.listItem}>
                      <ListItemText
                        primary="Owner's Email Address"
                        secondary={owner.bioData.emailAddress}
                      />
                    </ListItem>
                    <ListItem button className={classes.listItem}>
                      <ListItemText
                        primary="Owner's Phone Number"
                        secondary={owner.bioData.phoneNo}
                      />
                    </ListItem>
                    <ListItem button className={classes.listItem}>
                      <ListItemText
                        primary="Owner's Date of Birth"
                        secondary={
                          <Moment
                            format="YYYY/MM/DD"
                            date={owner.bioData.dateOfBirth}
                          />
                        }
                      />
                    </ListItem>
                    <ListItem button className={classes.listItem}>
                      <ListItemText
                        primary="Owner's Home Location"
                        secondary={
                          owner.bioData.city + " " + owner.bioData.countryRegion
                        }
                      />
                    </ListItem>
                    <ListItem button className={classes.listItem}>
                      <ListItemText
                        primary="Owner's Identification Number"
                        secondary={owner.bioData.identificationNo}
                      />
                    </ListItem>
                  </List>
                ))}

                {/* {this.state.setOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    in={this.state.setOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem button className={classes.listItem}>
                        <ListItemText
                          primary="Owner's Job Title"
                          secondary={this.state.businessOwners.title}
                        />
                      </ListItem>
                    </List>
                  </Collapse> */}

                {/* 
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Owner's Home Location"
                      secondary={
                        this.state.businessOwners.city +
                        " " +
                        this.state.businessOwners.countryRegion
                      }
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Owner's Date of Birth"
                      secondary={
                        <Moment
                          format="YYYY/MM/DD"
                          date={this.state.businessOwners.dateOfBirth}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem button className={classes.listItem}>
                    <ListItemText
                      primary="Owner's Identification Number"
                      secondary={this.state.businessOwners.identificationNo}
                    />
                  </ListItem> */}
              </AccordionDetails>
            </Accordion>
          </MuiThemeProvider>
          <div
            style={{ top: "1400px", position: "absolute" }}
            className="formButtons"
          >
            <button onClick={this.props.prevStep} className="form__button">
              <ArrowBackIosIcon fontSize="small" />
              Back
            </button>
            <button
              style={{ left: "450px", position: "relative" }}
              onClick={() => this.handleSave()}
              className="blueForm__button"
            >
              {this.state.isLoading ? (
                <CircularProgress style={{ color: "white" }} size={20} />
              ) : (
                <>
                  Save & Continue
                  <ArrowForwardIosIcon fontSize="small" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(stylesModal)(ReviewSubmit);
