import { useEffect, useState, useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../config/envs";
import { AuthDto } from "../../auth/dtos/auth-dto";

axios.defaults.baseURL = apiUrl;

const useAxios = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenStrJson = localStorage.getItem("token") ?? "";
    const tokenObj = JSON.parse(tokenStrJson);
    const token = tokenObj?.state?.token as string;
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [token]);

  const responseBody = (response: AxiosResponse) => response.data;

  const get = useCallback(
    (url: string, params?: URLSearchParams) =>
      axios.get(url, { params }).then(responseBody),
    []
  );

  const post = useCallback(
    (url: string, body: Object) => axios.post(url, body).then(responseBody),
    []
  );

  const put = useCallback(
    (url: string, body: Object) => axios.put(url, body).then(responseBody),
    []
  );

  const del = useCallback(
    (url: string) => axios.delete(url).then(responseBody),
    []
  );

  const patch = useCallback(
    (url: string, body: Object) => axios.patch(url, body).then(responseBody),
    []
  );

  return { get, post, put, del, patch };
};

const useAuth = () => {
  const { post } = useAxios();

  const login = (form: AuthDto) => post("auth/login", form);

  return { login };
};

export { useAxios, useAuth };
