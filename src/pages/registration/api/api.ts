import { axiosInstance } from "@/axios";
import { IUserRegData } from "../types/types";

export const regApi = async (data: IUserRegData) => {
  return axiosInstance.post("/security/registration", data);
};
