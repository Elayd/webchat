import axios, { AxiosResponse } from "axios";
import {} from "axios";
import { refreshApi } from "./refresh";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const privateInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    Authorization: `${localStorage.getItem("accessToken")}`,
  },
});

privateInstance.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config?._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken") ?? "";
        const { data: newAccess } = await refreshApi(refreshToken);
        localStorage.setItem("accessToken", newAccess);
        originalRequest.headers["Authorization"] = newAccess;
        return privateInstance.request(originalRequest);
      } catch (error) {
        console.log("Not authorized", error);
      }
    }
    throw error;
  }
);
