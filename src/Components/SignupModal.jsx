import React, { Component } from "react";
import {
  withStyles,
  createMuiTheme,
  Modal,
  Backdrop,
  MuiThemeProvider,
  Select,
  MenuItem,Input
} from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
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
const MenuProps = {
  style: {
    marginTop: "5px",
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
};

const themeModal = createMuiTheme({
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
const dropdown = createMuiTheme({
    overrides:{
        MuiPaper: {
            root: {
                backgroundColor:'#090909',
                borderRadius:'10px'
            }
        },
       
        MuiMenuItem: {
            root: {
                color:'white'
            }
        }
    }
})

class SignupModal extends Component {
  constructor() {
    super();
    this.companysize = [
      { id: 0, value: 'How big is your company?' },
      { id: 1, value: '1-10 Employees' },
      { id: 2, value: '11-50 Employees' },
      { id: 3, value: '51-100 Employees' }
    ];
    this.state = {
      email: "",
      password: "",
      completed: 5,
      buffer: 10,
      title: "",
      message: "",
      validEmail: false,
      success: false,
      isLoading: false,
      responseStatus: "",
      setOpen: false,
      selectedCompanysize: this.companysize[0],
      companySize: "How big is your company?",
      monthlyExpense: "What is your current monthly business expenses?",
      monthlyIncome: "How much do you currently have in your business bank account?",
      annualRevenue: "How much do you make in annual revenues from your business?",
      countries:"Country of primary operations for your business?",
      countryOfIncorporation: "Where is your company incorporated?",
      headquarters: "Where are your headquarters?"
    };
   

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ isChecked: true });
    AOS.init({
      duration: 2000
    });
  }
  handleFormInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleOpen() {
    this.setState({ setOpen: !this.state.setOpen });
  }

  handleSubmit = async () => {
    this.setState({ isLoading: true });
    // var payload = {
    //   username: this.state.email,
    //   password: this.state.password,
    //   type: "2"
    // };
  };

  render() {
    const { classes } = this.props;
    const sizeOptions = [
      { id: 0, value: 'How big is your company?' },
      { id: 1, value: '1-10 Employees' },
      { id: 2, value: '11-50 Employees' },
      { id: 3, value: '51-100 Employees' }
    ];
    const monthlyExpenses = [
      { id: 0, value: 'What is your current monthly business expenses?' },
      { id: 1, value: 'Under $50,000' },
      { id: 2, value: '$50,001-250,000' },
      { id: 3, value: '$250,000+' }
    ];
    const monthlyIncome = [
      { id: 0, value: 'How much do you currently have in your business bank account?' },
      { id: 1, value: 'Under $50,000' },
      { id: 2, value: '$50,001-250,000' },
      { id: 3, value: '$250,000+' }
    ];
    const annualRevenue = [
      { id: 0, value: 'How much do you make in annual revenues from your business?' },
      { id: 1, value: 'Under $10,000' },
      { id: 2, value: '$30,001-50,000' },
      { id: 3, value: '$50,001-70,000' },
      { id: 4, value: '$70,000-90,000' },
      { id: 5, value: '$90,000+' }
    ];
    const countries = [
      { id: 0, value: 'Country of primary operations for your business?' },
      { id: 1, value: 'Kenya' },
      { id: 2, value: 'Uganda' },
      { id: 3, value: 'Tanzania' },
      { id: 4, value: 'Rwanda' },
      { id: 5, value: 'Ethiopia' }
    ];
    const incorporation = [
      { id: 0, value: 'Where is your company incorporated?' },
      { id: 1, value: 'Kenya' },
      { id: 2, value: 'Uganda' },
      { id: 3, value: 'Tanzania' },
      { id: 4, value: 'Rwanda' },
      { id: 5, value: 'Ethiopia' }
    ];
    const counties = [
      { id: 0, value: 'Where are your headquarters?' },
      { id: 1, value: 'Nairobi' },
      { id: 2, value: 'Kigali' },
      { id: 3, value: 'Kampala' },
      { id: 4, value: 'Dodoma' },
      { id: 5, value: 'Kisumu' }
    ];

    return (
      <div >
        <MuiThemeProvider theme={themeModal}>
          <Modal
            className={classes.modal}
            open={this.props.setOpen}
            onClose={() => this.props.handleOpen()}
            closeAfterTransition
            BackdropComponent={Backdrop}
          >
            <div  data-aos="fade-up" data-aos-duration="2000" className={classes.paper}>
              <div className="ModalPaper">
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
                  <div
                    style={{
                      alignItems: "center",
                      display: "inline-block",
                      marginTop: "20px",
                    }}
                  >
                    <span
                      className="MainContentHeader"
                      style={{ fontSize: "40px" }}
                    >
                      Get Started with Nash!{" "}
                    </span>
                  </div>
                </div>
                <div className="ProfileForm" style={{ marginTop: "30px" }}>
                  <div className="displayFlexSpace1">
                    <input
                      id="firstName"
                      placeholder="Name of your business"
                      type="text"
                      className="flexedInput"
                    />
                   <MuiThemeProvider theme={dropdown}>
                  <Select
                        className="FilterSelect"
                        disableUnderline={true}
                        MenuProps={MenuProps}
                        onChange={e => this.setState({ companySize: e.target.value })}
                        style={{
                          
                        }}
                        value={this.state.companySize}>
                  {sizeOptions.map((option, key) => (
                  <MenuItem
                    value={option.value}
                    key={key}
                    style={{ fontFamily: 'Poppins' }}>
                    {option.value}
                  </MenuItem>
                ))}
                      
                       
                      </Select>
                  </MuiThemeProvider>
                  </div>
                  <MuiThemeProvider theme={dropdown}>
                  <Select
                        className="FilterSelect"
                        input={<Input disableUnderline />}
                        MenuProps={MenuProps}
                        onChange={e => this.setState({ monthlyExpense: e.target.value })}
                        style={{
                          marginBottom: "20px"
                        }}
                        value={this.state.monthlyExpense}>
                        {monthlyExpenses.map((option, key) => (
                  <MenuItem
                    value={option.value}
                    key={key}
                    style={{ fontFamily: 'Poppins' }}>
                    {option.value}
                  </MenuItem>
                ))}
                      </Select>
                  </MuiThemeProvider>
                  
                  <MuiThemeProvider theme={dropdown}>
                  <Select
                        className="FilterSelect"
                        disableUnderline={true}
                        MenuProps={MenuProps}
                        onChange={e => this.setState({ monthlyIncome: e.target.value })}
                        style={{
                          marginBottom: "20px"
                        }}
                        value={this.state.monthlyIncome}>
                         {monthlyIncome.map((option, key) => (
                  <MenuItem
                    value={option.value}
                    key={key}
                    style={{ fontFamily: 'Poppins' }}>
                    {option.value}
                  </MenuItem>
                ))}
                       
                      </Select>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={dropdown}>
                  <Select
                        className="FilterSelect"
                        disableUnderline={true}
                        MenuProps={MenuProps}
                        onChange={e => this.setState({ annualRevenue: e.target.value })}
                        style={{
                          marginBottom: "20px"
                        }}
                        value={this.state.annualRevenue}>
                        {annualRevenue.map((option, key) => (
                  <MenuItem
                    value={option.value}
                    key={key}
                    style={{ fontFamily: 'Poppins' }}>
                    {option.value}
                  </MenuItem>
                ))}
                         
                      </Select>
                  </MuiThemeProvider>
                  <div className="displayFlexSpace1">
                  <MuiThemeProvider theme={dropdown}>
                  <Select
                        className="FilterSelect"
                        disableUnderline={true}
                        MenuProps={MenuProps}
                        onChange={e => this.setState({ countries: e.target.value })}
                        style={{
                          marginRight: "10px"
                        }}
                        value={this.state.countries}>
                        {countries.map((option, key) => (
                  <MenuItem
                    value={option.value}
                    key={key}
                    style={{ fontFamily: 'Poppins' }}>
                    {option.value}
                  </MenuItem>
                ))}
                       
                      </Select>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={dropdown}>
                  <Select
                        className="FilterSelect"
                        disableUnderline={true}
                        MenuProps={MenuProps}
                        onChange={e => this.setState({ headquarters: e.target.value })}
                        style={{
               
                        }}
                        value={this.state.headquarters}>
                         {counties.map((option, key) => (
                  <MenuItem
                    value={option.value}
                    key={key}
                    style={{ fontFamily: 'Poppins' }}>
                    {option.value}
                  </MenuItem>
                ))}
                       
                      </Select>
                  </MuiThemeProvider>
                  </div>
                  <MuiThemeProvider theme={dropdown}>
                  <Select
                        className="FilterSelect"
                        disableUnderline={true}
                        MenuProps={MenuProps}
                        onChange={e => this.setState({ countryOfIncorporation: e.target.value })}
                        style={{
                          marginBottom: "20px"
                        }}
                        value={this.state.countryOfIncorporation}>
                        {incorporation.map((option, key) => (
                  <MenuItem
                    value={option.value}
                    key={key}
                    style={{ fontFamily: 'Poppins' }}>
                    {option.value}
                  </MenuItem>
                ))}
                       
                      </Select>
                  </MuiThemeProvider>
                </div>
                <div className="ModalFooter">
                  <button
                    style={{ width: "125px", float: "right" }}
                    className="SignUpFormsSubmit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(withStyles(stylesModal)(SignupModal));
