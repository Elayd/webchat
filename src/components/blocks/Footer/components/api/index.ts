import { axiosInstance } from "@/axios";

export const logoutApi = async () => {
  return axiosInstance.post("security/logout");
};
