import axios from "axios";

axios.defaults.baseURL = "https://davidb3rgqvi-project5be-x22c0p5fsn8.ws.codeinstitute-ide.net/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();