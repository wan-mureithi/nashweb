import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { getRequest } from "../../Services/APIFunctions";
import {
  createTheme,
  MuiThemeProvider,
  Input,
  Select,
  MenuItem,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { CircularProgress } from "@material-ui/core";
import api from "../../Services/apiCalls";
import CustomSnackbar from "../../Components/SharedComponents/CustomSnackbar";

const dateTheme = createTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
        background: "#efefef",
        borderRadius: "10px",
        border: "0.3px solid #949494",
        height: "64px",
      },
    },
    MuiInputBase: {
      input: {
        padding: "10px 25px",
      },
    },
    MuiInputLabel: {
      formControl: {
        top: "5px",
        left: "10px",
      },
    },
    MuiFormLabel: {
      root: {
        color: "black",
        fontFamily: "Poppins",
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: "10px",
        marginTop: "-9px",
        marginLeft: "10px",
      },
    },
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

export default class MoreDetails extends Component {
  constructor() {
    super();
    this.state = {
      dateEstablished: new Date(),
      stateOfIncorporation: "",
      monthlybusinessSpend: "",
      businessDesc: "",
      monthlyExpenses: [],
      selectedMonthlyExpense: 0,
      isLoading: false,
      responseStatus: "",
      snackbaropen: false,
      snackbarmsg: "",
      snackTitle: "",
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }
  componentDidMount() {
    this.getSpend();
    //console.log(this.props.businessid)
  }
  getSpend() {
    const url2 = "Setup/GetCompanySpendSetup";
    getRequest(url2)
      .then((resp) => {
        let data = resp.data.response_data;
        let defaultText = {
          id: 0,
          description: "What is your current monthly business expense?",
          min: 0,
          max: 0,
          date_created: "26 07 2021 08:44",
        };
        data.unshift(defaultText);
        this.setState({ monthlyExpenses: resp.data.response_data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleFormInput(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleDate = (date) => {
    this.setState({ dateEstablished: date });
  };
  handleSubmit = async () => {
    this.setState({ isLoading: true });
    const url = "Business/AddBusinessAdditionalinformation";
    let payload = {
      businessId: this.props.businessid,
      dateEstablished: this.state.dateEstablished,
      stateOfIncorporation: this.state.stateOfIncorporation,
      currentMonthlyBusinessCardSpend: 1,
      businessDescription: this.state.businessDesc,
    };
    try {
      let response = await api.postRequest(url, payload);
      if (response.data.status_code !== 200) {
        this.setState({
          snackbaropen: true,
          responseStatus: "failed",
          snackTitle: response.data.message,
        });
      } else {
        this.setState({ isLoading: false });
        this.props.nextStep();
      }
    } catch (error) {
      console.log(error.response);
      this.setState({
        isLoading: false,
        snackbaropen: true,
        responseStatus: "failed",
        snackTitle: "Creation failed",
        snackbarmsg: error.response.data.error_description,
      });
    }
  };
  snackbarClose = () => {
    this.setState({ snackbaropen: false });
  };
  render() {
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
        <div style={{ marginBottom: "50px" }} className="onboardForm">
          <h3>Additional Details</h3>
          <p className="subtitle">
            We use this information to understand your business identity and
            determine how Nash can help you.
          </p>
          <h3>Incorporation Details</h3>
          <MuiThemeProvider theme={dateTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker"
                label="Date of Establishment"
                value={this.state.dateEstablished}
                onChange={this.handleDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
          <input
            id="stateOfIncorporation"
            className="formInput"
            placeholder="State of incorporation"
            onChange={this.handleFormInput}
            type="text"
          />

          <MuiThemeProvider theme={dropdown}>
            <Select
              className="FilterSelect"
              input={<Input disableUnderline />}
              MenuProps={MenuProps}
              onChange={(e) =>
                this.setState({ selectedMonthlyExpense: e.target.value })
              }
              style={{
                paddingLeft: "25px",
                textAlign: "left",
                height: "64px",
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

          <textarea
            id="businessDesc"
            placeholder="Business Description"
            onChange={this.handleFormInput}
            value={this.state.businessDesc}
            rows="5"
          />
          <div style={{ top: "70px" }} className="formButtons">
            <button onClick={this.props.prevStep} className="form__button">
              <ArrowBackIosIcon fontSize="small" />
              Back
            </button>
            <button
              onClick={() => this.handleSubmit()}
              className={
                this.state.businessDesc === "" ||
                this.state.selectedMonthlyExpense === 0 ||
                this.state.stateOfIncorporation === ""
                  ? "blueForm__buttonDisabled"
                  : "blueForm__button"
              }
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
