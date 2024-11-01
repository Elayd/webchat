import { axiosInstance } from "@/shared/api";

export const logoutAllOtherDevicesLogout = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    console.error("No refresh token");
    return;
  }

  try {
    const result = await axiosInstance.post("/v1/logoutOtherDevices", {
      refreshToken,
    });

    return result;
  } catch (error) {
    console.error(error, "error");
  }
};
