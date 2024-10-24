import { axiosInstance } from "@/shared/api";

export const fetchAuthStatus = async () => {
  return await axiosInstance.post("/security/checkAuth");
};
