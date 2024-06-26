import axios, { AxiosResponse } from "axios";
import { apiUrl } from "./config/envs";
import { AuthDto } from "../auth/dtos/auth-dto";

axios.defaults.baseURL = apiUrl;
// axios.defaults.withCredentials = true;

// axios.interceptors.request.use((config) => {
//   const tokenStrJson = localStorage.getItem("token") ?? "";
//   const tokenObj = JSON.parse(tokenStrJson);
//   const token = tokenObj?.state?.token as string;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: Object) => axios.post(url, body).then(responseBody),

  put: (url: string, body: Object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  patch: (url: string, body: Object) =>
    axios.patch(url, body).then(responseBody),
};

const Auth = {
  login: (form: AuthDto) => requests.post("auth/login", form),
};

const agent = { Auth };

export default agent;
