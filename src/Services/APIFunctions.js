import axios from 'axios';

const BASE_URL = 'https://nashlocal.ngrok.io/IdentityServer';

function postRequest(endpoint, payload) {
    const token = JSON.parse(localStorage.getItem("id_tkn"));
    if (token) {
      var options = {
        headers: { Authorization: "Bearer " + token },
      };
     
      return axios.post(BASE_URL + endpoint, payload, options);
    } else {
      return axios.post(BASE_URL + endpoint, payload);
    }
  }
  export { postRequest,BASE_URL };