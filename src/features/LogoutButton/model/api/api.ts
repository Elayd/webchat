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
    const result = await axiosInstance.post("/v1/logout", {
      refreshToken,
    });

    return result;
  } catch (error) {
    captureException(error);
  }
};
