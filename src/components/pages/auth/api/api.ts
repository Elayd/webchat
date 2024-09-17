import { axiosInstance } from "@/axios";
import { IUserData } from "../types/types";

export const authApi = async (data: IUserData) => {
  return axiosInstance.post("security/auth", data);
};
