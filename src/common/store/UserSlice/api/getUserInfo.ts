import { axiosInstance } from "../../../api/index.ts";
import { User } from "../../../types/user.ts";

export const getUserInfo = async (userId: string) => {
  const accessToken = localStorage.getItem("accessToken");

  const response = await axiosInstance.get<User>(
    `${import.meta.env.VITE_USER_SERVICE_PATH}/getUserInfo`,
    {
      params: { userId },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};
