import { captureException } from "@sentry/react";
import axios, { AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/${
    import.meta.env.VITE_API_VERSION
  }`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

axiosInstance.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status !== 401 ||
      !error.config ||
      error.config._isRetry
    ) {
      return Promise.reject(error);
    }

    originalRequest._isRetry = true;

    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return Promise.reject(error);
    }

    try {
      const { data } = await axiosInstance.post<{
        accessToken: string;
        userId: string;
      }>(`${import.meta.env.VITE_AUTH_SERVICE_PATH}/refresh`, {
        refreshToken,
      });

      const { accessToken } = data;
      localStorage.setItem("accessToken", accessToken);
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
      return axiosInstance.request(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      captureException(refreshError);
      return Promise.reject(error);
    }
  }
);
