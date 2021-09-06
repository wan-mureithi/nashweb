import axios from 'axios';
import { client_secret,client_id } from '../Credentials';
const BASE_URL = 'http://afbbb93503abe455a8a16c8d73e5bf56-166676973.us-east-2.elb.amazonaws.com/api/';
const BASE_URL_Identity = 'http://aba8344df27d84302869970ebbd29fef-1413183981.us-east-2.elb.amazonaws.com/api/';
const token_url = 'http://aba8344df27d84302869970ebbd29fef-1413183981.us-east-2.elb.amazonaws.com/Connect/Token';

//request interceptor to add the auth token header to requests
axios.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("ac_tkn");
      if (accessToken) {
        config.headers["Authorization"] = "Bearer " + accessToken;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      let refreshToken = localStorage.getItem("refreshToken");
      let getNewTokenData = new URLSearchParams();
      getNewTokenData.append("client_secret", client_secret);
      getNewTokenData.append("client_id", client_id);
      getNewTokenData.append("scope", "openid offline_access");
      getNewTokenData.append("grant_type", "refresh_token");
      getNewTokenData.append("refresh_token", refreshToken);
      if (
        refreshToken &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        return axios
          .post(token_url, getNewTokenData)
          .then((res) => {
              console.log(res)
            if (res.status === 200) {
              localStorage.setItem("ac_tkn", res.data.access_token);
              console.log("Access token refreshed!");
              return axios(originalRequest);
            }
          });
      }
      return Promise.reject(error);
    }
  );

  const api = {
    signup: (body) => {
      return axios.post(BASE_URL, body);
    },
    login: (body) => {
      return axios.post(token_url, body);
    },
    setPassword: (endpoint, body) => {
      return axios.post(BASE_URL_Identity + endpoint, body);
    },
    refreshToken: (body) => {
      return axios.post(token_url, body);
    },
    getRequest: (endpoint) => {
        return axios.get(BASE_URL + endpoint)
    },
    postRequest: (endpoint, body) => {
        return axios.post(BASE_URL + endpoint, body);
    }
  };
  export default api;