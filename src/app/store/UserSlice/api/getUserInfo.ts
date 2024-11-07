import { axiosInstance } from "@/shared/api";
import { User } from "@/shared/types/user";

export const getUserInfo = async (email: string) => {
  const accessToken = localStorage.getItem("accessToken");

  const response = await axiosInstance.post<User>(
    "v1/getUserInfo",
    { email },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};
