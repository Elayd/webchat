import axios, { AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
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
    if (refreshToken) {
      return Promise.reject(refreshToken);
    }

    try {
      const { data: newAccess } = await axiosInstance.post<string>(
        "/security/refresh",
        {
          refreshToken,
        }
      );
      localStorage.setItem("accessToken", newAccess);
      originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
      return axiosInstance.request(originalRequest);
    } catch (refreshError) {
      console.log(refreshError);
      return Promise.reject(error);
    }
  }
);
