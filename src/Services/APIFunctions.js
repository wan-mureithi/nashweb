import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { client_id,client_secret } from '../Credentials';
//const BASE_URL = 'https://treasuryapi.ngrok.io/NashTreasury/api/';
const BASE_URL = 'https://api.nashglobal.co/api/';
const BASE_URL_Identity = 'https://api.nashglobal.co/api/';
const token_url = 'https://api.nashglobal.co/Connect/Token';



function postRequest(endpoint, payload) {
    const token = localStorage.getItem("ac_tkn");
    if (token) {
      var options = {
        headers: { Authorization: "Bearer " + token },
      };
      return axios.post(BASE_URL + endpoint, payload, options);
    } else {
      
      return axios.post(BASE_URL + endpoint, payload);
    }
    
  }
  //user logins in and gets an access token that is saved to local storage
  //get new access token using the refresh token 
  async function login(formData,token){
    const tokenPromise = await axios.post(token_url, formData);
    // if (tokenPromise.data.status === "5") {
    //   return 89;
    // }
    
    localStorage.setItem("ac_tkn", tokenPromise.data.access_token);
    //const jwtDecode = require("jwt-decode");
    const userData = jwtDecode(tokenPromise.data);
    
    let timenNow = Date.now().gettime();
    let diff = timenNow - userData.exp; 
    if( diff > 3000){
      //get new access token
    getToken(token);
    }


  }
 async function getToken(token){
    let bodyFormData = new URLSearchParams();
    bodyFormData.append("client_secret", client_secret);
    bodyFormData.append("client_id", client_id);
    bodyFormData.append("scope", "openid offline_access");
    bodyFormData.append("grant_type", "refresh_token");
    bodyFormData.append("refresh_token", token);
    const refreshTokenPromise = await axios.post(token_url, bodyFormData);
    let newAccessToken =  refreshTokenPromise.access_token;
    localStorage.setItem("ac_tkn", newAccessToken);
  }
  function postRequestIdentity(url, payload){
    const token = JSON.parse(localStorage.getItem("ac_tkn"));
    if (token) {
      var options = {
        headers: { Authorization: "Bearer " + token },
      };
      return axios.post(BASE_URL_Identity + url, payload, options);
    } else {
      
      return axios.post(BASE_URL_Identity + url, payload);
    }
  }
  function getRequest(endpoint) {
    const token = localStorage.getItem("ac_tkn");
    if (token) {
      var options = {
        headers: { Authorization: "Bearer " + token },
      };
      return axios.get(BASE_URL + endpoint, options);
    } else {  
      return axios.get(BASE_URL + endpoint);
    }
  }
  export { postRequest, getRequest, postRequestIdentity, login,getToken, BASE_URL,BASE_URL_Identity,token_url };