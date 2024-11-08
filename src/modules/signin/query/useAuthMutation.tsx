import useUserStore, {getUserInfoSelector} from "@/common/store/UserSlice/user.ts";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {IUserAuthData} from "../types/types.ts";
import {signInApi} from "../api/auth.ts";

export const useAuthMutation = () => {
  const getUserInfo = useUserStore(getUserInfoSelector);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: IUserAuthData) =>
      signInApi(data).then((res) => res.data),
    onSuccess: async (response) => {
      const { accessToken, refreshToken, userId } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userId", userId);
      await getUserInfo();
      navigate("/chat");
    },
  });
};
