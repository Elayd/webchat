import axios from "axios";
import { refreshApi } from "./refresh";
import useCsrfStore from "@/csrf/store/csrf";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshApi();
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const excludedUrls = new Set([
  "/security/checkAuth",
  "/security/auth",
  "/security/registration",
  "/security/csrf",
  "/oauth/url",
  "/oauth/token",
]);

axiosInstance.interceptors.request.use(
  (config) => {
    const { csrfToken } = useCsrfStore.getState();
    const isExcludedUrl = excludedUrls.has(config.url || "");

    if (!isExcludedUrl && csrfToken) {
      config.headers["x-csrf-token"] = csrfToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
