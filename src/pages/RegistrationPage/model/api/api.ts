import { axiosInstance } from "@/shared/api";
import { IUserRegData } from "../types/types";
import { ITokenResponse } from "@/shared/types/tokens";

export const regApi = async (data: IUserRegData) => {
  return axiosInstance.post<ITokenResponse>("/security/registration", data);
};
