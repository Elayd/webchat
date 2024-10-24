import { axiosInstance } from "@/shared/api";
import { ITokenResponse } from "@/shared/types/tokens";
import { IUserAuthData } from "../types/types";

export const authApi = async (data: IUserAuthData) => {
  return axiosInstance.post<ITokenResponse>("security/auth", data);
};

export const AuthApi = {
  authApi,
};
