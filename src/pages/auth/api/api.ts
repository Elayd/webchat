import { axiosInstance } from "@/axios";
import { IUserAuthData } from "../types/types";
import { ITokenResponse } from "@/types";

export const authApi = async (data: IUserAuthData) => {
  return axiosInstance.post<ITokenResponse>("security/auth", data);
};

export const getGoogleOAuthUrl = async () => {
  const { data } = await axiosInstance.get("/oauth/url");
  return data.url;
};
