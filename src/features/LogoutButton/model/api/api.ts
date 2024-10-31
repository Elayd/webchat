import { axiosInstance } from "@/shared/api";

export const logoutApi = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  if (!refreshToken) {
    console.error("No refresh token");
    return;
  }

  try {
    const result = await axiosInstance.post("/v1/logout", {
      refreshToken,
    });

    return result;
  } catch (error) {
    console.error(error, "error");
  }
};
