import { axiosInstance } from "@/shared/api";
import { User } from "@/shared/types/user";

export const getUserInfo = async (userId: string) => {
  const accessToken = localStorage.getItem("accessToken");

  const response = await axiosInstance.get<User>("v1/getUserInfo", {
    params: { userId },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
