import axios from "axios"

const request = async (url, method, data) => {
  axios.defaults.baseURL = "http://127.0.0.1:8080";
  return axios({
    method,
    url,
    data
  });
};
const post = async (url, param) => {
  return request(url, "post", param)
};

const get = async (url, param) => {
  return request(url, "get", param)
};

export {request, post, get}

