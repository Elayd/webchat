import { axiosInstance } from "../../../api/index.ts";
import { User } from "../../../types/user.ts";

export const changeUserInfo = async (
  userId: string,
  firstName: string,
  secondName: string
) => {
  const accessToken = localStorage.getItem("accessToken");

  const response = await axiosInstance.put<User>(
    `${import.meta.env.VITE_USER_SERVICE_PATH}/changeUserInfo`,
    { userId, firstName, secondName },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};
