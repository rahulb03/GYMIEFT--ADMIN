import axios from "axios";
import getCookie from "../CustomFunctions/GetCookie";
// import { BACKEND_API_URL, token } from "../../Config/config.js";
import { BACKEND_API_URL, token } from "../../Config/config_c";

// const client = axios.create({
//   baseURL: BACKEND_API_URL,
//   headers: {
//     Accept: "application/json",
//   },
// });

axios.defaults.baseURL = BACKEND_API_URL
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['token'] = token;
console.log('token :: ', axios?.defaults?.headers?.common['token'])

const request = async ({ ...options }, router) => {
  client.defaults.headers.common.Authorization = `Bearer ${getCookie("uat")}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error?.response?.status == 403) {
      router && router.push("/403")
    }
    console.log("error axios-utils", error?.response);
    return error;
  };
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default request;
