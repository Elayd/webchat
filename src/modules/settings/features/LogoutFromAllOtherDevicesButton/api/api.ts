import {captureException} from "@sentry/react";

import {axiosInstance} from "@/common/api";

export const logoutAllOtherDevicesLogout = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    captureException("No refresh token");
    return;
  }

  try {
    return await axiosInstance.post(
        `${import.meta.env.VITE_AUTH_SERVICE_PATH}/logoutOtherDevices`,
        {
          refreshToken,
        }
    );
  } catch (error) {
    captureException(error);
  }
};
