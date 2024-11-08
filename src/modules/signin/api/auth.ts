import {axiosInstance} from "@/common/api";
import {ITokenResponse} from "@/common/types/tokens.ts";

import { IUserAuthData } from "../types/types.ts";

export const signInApi = async (data: IUserAuthData) => {
  return axiosInstance.post<ITokenResponse>(
    `${import.meta.env.VITE_AUTH_SERVICE_PATH}/signin`,
    data
  );
};
