import axios from "axios";
import { apiUrl } from "./config/env";

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const tokenStrJson = localStorage.getItem("token") ?? "";
  const tokenObj = JSON.parse(tokenStrJson);
  const token = tokenObj?.state?.token as string;
  config.headers.Autorization = `Bearer ${token}`;
  return config;
});
