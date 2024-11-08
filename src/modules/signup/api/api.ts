import {axiosInstance} from "@/common/api";
import {ITokenResponse} from "@/common/types/tokens.ts";

import {IUserRegData} from "../types/types.ts";

export const signUpApi = async (data: IUserRegData) => {
  return axiosInstance.post<ITokenResponse>(
    `${import.meta.env.VITE_AUTH_SERVICE_PATH}/signup`,
    data
  );
};
