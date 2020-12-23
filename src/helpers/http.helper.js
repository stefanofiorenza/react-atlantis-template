import config from "../configs/config.json";
import Axios from "axios";

const url = (endpoint = "") => {
  return `${config["api-url"]}/${endpoint}`;
};

const post = (endpoint, data = {}, headers = {}) => {
  return Axios.post(url(endpoint), data, { headers: headers }).then(
    (res) => res.data
  );
};
const put = (endpoint, data = {}, headers = {}) => {
  return Axios.put(url(endpoint), data, { headers: headers }).then(
    (res) => res.data
  );
};
const get = (endpoint, data = {}) => {
  return Axios.get(url(endpoint), { headers: data }).then((res) => res.data);
};
const del = (endpoint, data = {}) => {
  return Axios.delete(url(endpoint), { headers: data }).then((res) => res.data);
};

export { post, get, del, put };
