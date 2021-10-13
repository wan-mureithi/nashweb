import React, { Component } from "react";
import {
  withStyles,
  createTheme,
  Modal,
  Backdrop,
  MuiThemeProvider,
  Select,
  MenuItem,
Input, CircularProgress
} from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { withRouter } from "react-router-dom";
import { getRequest, postRequest } from "../Services/APIFunctions";
import CustomSnackbar from "./SharedComponents/CustomSnackbar";

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
const dropdown = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#090909",
        borderRadius: "10px",
      },
    },

    MuiMenuItem: {
      root: {
        color: "white",
      },
    },
  },
});

class SignupModal extends Component {
  constructor() {
    super();

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
      businessName:"",
      setOpen: false,
      selectedCompanysize: "a37dff58",
      companySizes: [],
      selectedMonthlyExpense: "a37dff58",
      monthlyExpenses: [],
      selectedCurrentMoney: "a37dff58",
      currentMonies: [],
      selectedCountry: "a37dff58",
      selectedCountryOfIncorporation: "a37dff58",
      allCountries: [],
      selectedHQ: "a37dff58",
      headquarters: [],
      selectedAnnualRevenue: "a37dff58",
      annualRevenues: [],
      incorporationCountries: [],
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ isChecked: true });
    AOS.init({
      duration: 2000,
    });
    this.getCompanySizes();
    this.getCountries();
    this.getMonies();
    //this.getRegion();
  }
  handleFormInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleOpen() {
    this.setState({ setOpen: !this.state.setOpen });
  }
  getCompanySizes() {
    const url ="Setups/GetCompanySizeRange";
    getRequest(url)
      .then((resp) => {
        let data = resp.data.responseData;
        let defaultText = {
          id: "a37dff58",
          description: "How big is your company?",
          min: 0,
          max: 0,
        };
        data.unshift(defaultText);
        this.setState({ companySizes: resp.data.responseData });
        
      })
      .catch((err) => {
        console.log(err);
      });
    const url2 = "Setups/GetCompanySpendRange";
    getRequest(url2)
      .then((resp) => {
        let data = resp.data.responseData;
        let defaultText = {
          id: "a37dff58",
          description: "What is your current monthly business expenses?",
          min: 0,
          max: 0
        };
        data.unshift(defaultText);
        this.setState({ monthlyExpenses: resp.data.responseData });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getMonies() {
    const url = "Setups/GetCompanyAnnualRevenueRange";
    getRequest(url)
      .then((resp) => {
        let data = resp.data.responseData;
        let defaultText = {
          id: "a37dff58",
          description:
            "How much do you make in annual revenues from your business?",
          min: 0,
          max: 0
        };
        data.unshift(defaultText);
        this.setState({ annualRevenues: resp.data.responseData });
      })
      .catch((err) => {
        console.log(err);
      });
    const url2 = "Setups/GetCompanyAccountAmountRange";
    getRequest(url2)
      .then((resp) => {
        let data = resp.data.responseData;
        let defaultText = {
          id: "a37dff58",
          description:
            "How much do you currently have in your business bank account?",
          min: 0,
          max: 0
        };
        data.unshift(defaultText);
        this.setState({ currentMonies: resp.data.responseData });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getCountries() {
    const url = "Countries";
    getRequest(url)
      .then((resp) => {
        let data = resp.data.responseData.results;
        let defaultText = {
          id: "a37dff58",
        name: "Country of primary operations for your business?",
        region_type: "NashTreasury.Models.Data.Country",
        region_type_id: 0
        };
        data.unshift(defaultText);

        this.setState({ allCountries: resp.data.responseData.results });
      })
      .catch((err) => {
        console.log(err);
      });
    getRequest(url).then((resp) => {
      let data = resp.data.responseData.results;
      let defaultText = {
        id: "a37dff58",
        name: "Where is your company incorporated?",
        region_type: "NashTreasury.Models.Data.Country",
        region_type_id: 0
      };
      data.unshift(defaultText);
      
      this.setState({ incorporationCountries: resp.data.responseData.results,headquarters: resp.data.responseData.results });
    });
    getRequest(url).then((resp) => {
      let data2 = resp.data.responseData.results;
      let defaultText2 = {
        id: "a37dff58",
        name: "Where are your headquarters?",
        region_type: "NashTreasury.Models.Data.Country",
        region_type_id: 0
      };
      data2.unshift(defaultText2);
      
      
      this.setState({headquarters: data2 });
    });
    
  }
  getRegion() {
    const url = `Countries`;
    getRequest(url)
      .then((resp) => {
        let data = resp.data.responseData;
        let defaultText = {
          id: "a37dff58",
          name: "Where are your headquarters?",
          region_type: "Town",
          region_type_id: 0
          
        };
        data.unshift(defaultText);

        this.setState({ headquarters: resp.data.responseData.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit = async () => {
    this.setState({ isLoading: true });
    const url = "Applications";
    //console.log(this.props.userData);
    let userData = this.props.userData;
    let payload = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      workEmail: userData.workEmail,
      phoneNumber: userData.phoneNumber,
      businessName: this.state.businessName,
      companySizeId: this.state.selectedCompanysize,
      companySpendId: this.state.selectedMonthlyExpense,
      companyAccountAmountId: this.state.selectedCurrentMoney,
      companyAnnualRevenueId: this.state.selectedAnnualRevenue,
      countryOfPrimaryOperationId: this.state.selectedCountry,
      countryOfIncorporationId: this.state.selectedCountryOfIncorporation,
      countryOfHQId: this.state.selectedHQ,
    };
    
    postRequest(url, payload).then(resp=>{
      
      this.setState({ isLoading: false})
      this.props.history.push("/VerifyEmail")
    }).catch(err=>{
    
      this.setState({isLoading: false, snackbaropen: true, responseStatus: "failed", snackTitle: "Creation Failed", snackbarmsg:err.response.message });
    });
    
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
        <MuiThemeProvider theme={themeModal}>
          <Modal
            className={classes.modal}
            open={this.props.setOpen}
            onClose={() => this.props.handleOpen()}
            closeAfterTransition
            BackdropComponent={Backdrop}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className={classes.paper}
            >
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
                      id="businessName"
                      placeholder="Name of your business"
                      type="text"
                      className="flexedInput"
                      value = {this.state.businessName}
                      onChange={this.handleFormInput}
                    />
                    <MuiThemeProvider theme={dropdown}>
                      <Select
                        className="FilterSelect"
                        disableUnderline={true}
                        MenuProps={MenuProps}
                        onChange={(e) =>
                          this.setState({ selectedCompanysize: e.target.value })
                        }
                        value={this.state.selectedCompanysize}
                      >
                        {this.state.companySizes.map((option, key) => (
                          <MenuItem
                            value={option.id}
                            key={key}
                            style={{ fontFamily: "Poppins" }}
                          >
                            {option.description}
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
                      onChange={(e) =>
                        this.setState({ selectedMonthlyExpense: e.target.value })
                      }
                      style={{
                        marginBottom: "35px",
                      }}
                      value={this.state.selectedMonthlyExpense}
                    >
                      {this.state.monthlyExpenses.map((option, key) => (
                        <MenuItem
                          value={option.id}
                          key={key}
                          style={{ fontFamily: "Poppins" }}
                        >
                          {option.description}
                        </MenuItem>
                      ))}
                    </Select>
                  </MuiThemeProvider>

                  <MuiThemeProvider theme={dropdown}>
                    <Select
                      className="FilterSelect"
                      disableUnderline={true}
                      MenuProps={MenuProps}
                      onChange={(e) =>
                        this.setState({ selectedCurrentMoney: e.target.value })
                      }
                      style={{
                        marginBottom: "35px",
                      }}
                      value={this.state.selectedCurrentMoney}
                    >
                      {this.state.currentMonies.map((option, key) => (
                        <MenuItem
                          value={option.id}
                          key={key}
                          style={{ fontFamily: "Poppins" }}
                        >
                          {option.description}
                        </MenuItem>
                      ))}
                    </Select>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={dropdown}>
                    <Select
                      className="FilterSelect"
                      disableUnderline={true}
                      MenuProps={MenuProps}
                      onChange={(e) =>
                        this.setState({ selectedAnnualRevenue: e.target.value })
                      }
                      style={{
                        marginBottom: "20px",
                      }}
                      value={this.state.selectedAnnualRevenue}
                    >
                      {this.state.annualRevenues.map((option, key) => (
                        <MenuItem
                          value={option.id}
                          key={key}
                          style={{ fontFamily: "Poppins" }}
                        >
                          {option.description}
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
                        onChange={(e) =>
                          this.setState({ selectedCountry: e.target.value })
                        }
                        style={{
                          marginRight: "10px",
                        }}
                        value={this.state.selectedCountry}
                      >
                        {this.state.allCountries.map((option, key) => (
                          <MenuItem
                            value={option.id}
                            key={key}
                            style={{ fontFamily: "Poppins" }}
                          >
                            {option.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={dropdown}>
                      <Select
                        className="FilterSelect"
                        disableUnderline={true}
                        MenuProps={MenuProps}
                        onChange={(e) =>
                          this.setState({ selectedCountryOfIncorporation: e.target.value })
                        }
                        value={this.state.selectedCountryOfIncorporation}
                      >
                        {this.state.incorporationCountries.map((option, key) => (
                          <MenuItem
                            value={option.id}
                            key={key}
                            style={{ fontFamily: "Poppins" }}
                          >
                            {option.name}
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
                      onChange={(e) =>
                        this.setState({
                          selectedHQ: e.target.value,
                        })
                      }
                      style={{
                        marginBottom: "20px",
                      }}
                      value={this.state.selectedHQ}
                    >
                      {this.state.headquarters.map((option, key) => (
                        <MenuItem
                          value={option.id}
                          key={key}
                          style={{ fontFamily: "Poppins" }}
                        >
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </MuiThemeProvider>
                </div>
                <div className="ModalFooter">
                  <button
                    style={{ width: "125px", float: "right" }}
                    className={
                      this.state.businessName !== "" &&
                      this.state.selectedCompanysize !== "" &&
                      this.state.selectedMonthlyExpense !== "" &&
                      this.state.selectedCountry !== 0
                        ? "SignUpFormsSubmit"
                        : "SignUpFormsSubmitDisabled"
                    }
                    disabled={
                      this.state.businessName !== "" &&
                      this.state.selectedCompanysize !== 0 &&
                      this.state.selectedCountry !== 0 
                        ? false
                        : true
                    }
                    onClick={() => this.handleSubmit()}
                  >
                     {this.state.isLoading ? (
                      <CircularProgress style={{ color: "white" }} size={20} />
                    ) : (
                      "SUBMIT"
                    )}
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