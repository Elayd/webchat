import { axiosInstance } from "@/shared/api";
import { captureException } from "@sentry/react";

export const logoutAllOtherDevicesLogout = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    captureException("No refresh token");
    return;
  }

  try {
    const result = await axiosInstance.post("/v1/logoutOtherDevices", {
      refreshToken,
    });

    return result;
  } catch (error) {
    captureException(error);
  }
};
