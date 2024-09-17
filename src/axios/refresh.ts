import { axiosInstance } from "@/axios";

export const refreshApi = async () => {
  return await axiosInstance.post("/security/refresh");
};
