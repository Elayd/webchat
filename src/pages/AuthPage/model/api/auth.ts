import { axiosInstance } from "@/shared/api";
import { ITokenResponse } from "@/shared/types/tokens";
import { IUserAuthData } from "../types/types";

export const signInApi = async (data: IUserAuthData) => {
  return axiosInstance.post<ITokenResponse>("security/signin", data);
};
