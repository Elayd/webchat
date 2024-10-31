import { axiosInstance } from "@/shared/api";

export const fetchAuthStatus = async () => {
  const accessToken = localStorage.getItem("accessToken");
  // пока так, до userService
  return await axiosInstance.post(
    "http://localhost:8000/api/security/checkAuth",
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
