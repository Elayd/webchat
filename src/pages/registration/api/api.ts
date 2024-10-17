import { axiosInstance } from "@/axios";
import { IUserRegData } from "../types/types";
import { ITokenResponse } from "@/types";

export const regApi = async (data: IUserRegData) => {
  return axiosInstance.post<ITokenResponse>("/security/registration", data);
};
