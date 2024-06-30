import { useEffect, useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../config/envs";
import useUserInformation from "../../auth/hooks/useUserInformation";

axios.defaults.baseURL = apiUrl;

const useAxios = () => {
  const { token } = useUserInformation();

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
    (url: string, body: unknown) => axios.post(url, body).then(responseBody),
    []
  );

  const put = useCallback(
    (url: string, body: unknown) => axios.put(url, body).then(responseBody),
    []
  );

  const del = useCallback(
    (url: string) => axios.delete(url).then(responseBody),
    []
  );

  const patch = useCallback(
    (url: string, body: unknown) => axios.patch(url, body).then(responseBody),
    []
  );

  return { get, post, put, del, patch };
};

export default useAxios;
