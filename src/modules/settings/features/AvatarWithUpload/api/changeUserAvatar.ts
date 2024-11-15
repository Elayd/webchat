import { axiosInstance } from "@/common/api";

export const changeUserAvatar = async (userId: string, picture: string) => {
  return axiosInstance.put<string>(
    "http://localhost:8013/api/user/changeUserAvatar",
    { userId, picture }
  );
};
