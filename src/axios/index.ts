import axios, { AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
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
      error.response.status === 401 &&
      error.config &&
      !error.config?._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          const { data: newAccess } = await axiosInstance.post<string>(
            "/security/refresh",
            {
              refreshToken,
            }
          );
          localStorage.setItem("accessToken", newAccess);
          originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
          return axiosInstance.request(originalRequest);
        } else {
          throw Error("No refresh token");
        }
      } catch (refreshError) {
        console.log(refreshError);
        return Promise.reject(error);
      }
    }
  }
);
