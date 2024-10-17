import { axiosInstance } from "@/axios";

export const fetchAuthStatus = async () => {
  return await axiosInstance.post("/security/checkAuth");
};
