import React, { Component } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMore from "@material-ui/icons/ExpandMore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Divider,Typography } from "@material-ui/core";

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
    borderRadius:"10px",
    marginBottom:'25px'
  },
  listTitleText: {
      color: 'black',
      fontSize: '18px',
      fontWeight: '600'
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
    color:'black',
    fontSize:'18px',
    fontWeight:'700'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});
const listTheme = createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          textAlign: "left"
        },
        elevation1: {
          boxShadow: 'none'
        }
      },
      MuiList: {
        root: {
          width:'100%'
        }
      },
      MuiAccordionDetails: {
        root: {
          backgroundColor: '#FAFAFA',
           borderRadius: '10px',
        }
      },
      MuiAccordionSummary: {
        root: {
          '&$expanded': {
            backgroundColor: '#EEEEEE',
            borderRadius: '5px'
          }
        }
      },
      MuiTypography: {
        body1: {
          fontFamily: 'Poppins'
        },
        body2: {
          fontFamily: 'Poppins'
        }
      },
        // MuiCollapse: {
        //     container: {
        //         backgroundColor: '#FAFAFA',
        //         borderRadius: '10px',
        //         padding: '10px 20px'
        //     }
        // },
        MuiListItemText: {
            primary: {
                color: "#5F5F5F",
                fontSize: "13px"
            },
            secondary: {
                color:'black',
                fontSize:'18px',
                fontWeight:'500'
            }
        }
    }
});
class ReviewSubmit extends Component {
  constructor() {
    super();
    this.state = {
      setOpen: false,
      activeStep: 0,
      stepLabels: ["Business Details", "More Details", "Leadership","Ownership","Banking Details", "Review & Submit"],
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
      expanded: 'panel1'
    };
  }
  handleClick = () => {
   this.setState({ setOpen: !this.state.setOpen });
   
   //this.setState({ onboardingSteps[i].status: true })
  };
  handleChange = (panel) => (event, isExpanded) => {
    //setExpanded(isExpanded ? panel : false);
    if(isExpanded){
      this.setState({expanded: panel})
    } else{
      this.setState({expanded: false})
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{height:'1360px'}} className="onboardForm">
          <h3>Review & Submit </h3>
          <p
            style={{ marginBottom: "50px", marginTop: "60px" }}
            className="subtitle"
          >
            Please provide more information about your bank account below. We’ll
            review this information to determine your monthly spend limit across
            all your cards.
          </p>
          <MuiThemeProvider theme={listTheme}>
            
              {/* {this.state.stepLabels.map((step, index) => (
                <>
                  <ListItem key={index} button onClick={this.handleClick}>
                    <ListItemText  >
                        <span style={{fontSize:"20px", fontWeight:'700'}}>{step}</span>
                    </ListItemText>
                    
                    {this.state.setOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  
                  
                </>
              ))}  */}
              <Accordion expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         <Typography className={classes.heading}>Business Details</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <List component="div" disablePadding>
          <ListItem button className={classes.listItem}>
            <ListItemText primary="Business Legal Name" secondary=" Amazing Corp " />
          </ListItem>
          <ListItem button className={classes.listItem}>
          <ListItemText primary="Business DBA" secondary=" Amazing Corp " />
          </ListItem>
          <ListItem button className={classes.listItem}>
          <ListItemText primary="Business Name on Physical Card" secondary=" Amazing Corp Inc "/>
          </ListItem>
          <ListItem button className={classes.listItem}>
          <ListItemText primary="Business EIN" secondary=" AC12345667"/>
          </ListItem>
          <ListItem button className={classes.listItem}>
          <ListItemText primary="Business Website" secondary="www.businessstuff.io "/>
          </ListItem>
          <ListItem button className={classes.listItem}>
          <ListItemText primary="Business Phone" secondary=" +254700000000"/>
          </ListItem>
        </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Additional Details</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
        <List component="div" disablePadding>
          <ListItem button className={classes.listItem}>
            <ListItemText primary="State of Incorporation" secondary=" Nairobi " />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemText primary="Date Established" secondary=" 25/03/1990 " />
          </ListItem>
          <ListItem button className={classes.listItem}>
          <ListItemText primary="Current Monthly Business Spend" secondary=" Amazing Corp " />
          </ListItem>
          <ListItem button className={classes.listItem}>
          <ListItemText primary="Business Description" secondary=" Amazing Corp Inc "/>
          </ListItem>
        
        </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={this.state.expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Leadership </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={this.state.expanded === 'panel5'} onChange={this.handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Ownership </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={this.state.expanded === 'panel6'} onChange={this.handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>Banking Details </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </MuiThemeProvider>
          <div style={{ top: "1400px", position:'absolute' }} className="formButtons">
              <button onClick={this.props.prevStep} className="form__button">
                <ArrowBackIosIcon fontSize="small" />
                Back
              </button>
              <button style={{ left: "450px", position:'relative' }}  onClick={this.props.nextStep} className="blueForm__button">
                Save & Continue
                <ArrowForwardIosIcon fontSize="small" />
              </button>
            </div>
        </div>
      </div>
    );
  }
}
export default withStyles(stylesModal)(ReviewSubmit);
