import { axiosInstance } from "@/shared/api";
import { captureException } from "@sentry/react";

export const logoutApi = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");

  if (!refreshToken) {
    captureException("No refreshToken token");
    return;
  }

  try {
    const result = await axiosInstance.post(
      `${import.meta.env.VITE_AUTH_SERVICE_PATH}/logout`,
      {
        refreshToken,
      }
    );

    return result;
  } catch (error) {
    captureException(error);
  }
};
