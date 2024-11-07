import { useMutation } from "@tanstack/react-query";
import { IUserAuthData } from "../types/types.ts";
import useUserStore, {
  getUserInfoSelector,
} from "@/app/store/UserSlice/user.ts";
import { useNavigate } from "react-router-dom";
import { signInApi } from "@/pages/AuthPage/model/api/auth.ts";

export const useAuthMutation = () => {
  const getUserInfo = useUserStore(getUserInfoSelector);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: IUserAuthData) =>
      signInApi(data).then((res) => res.data),
    onSuccess: async (response, vars) => {
      const { accessToken, refreshToken } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("email", vars.email);
      await getUserInfo();
      navigate("/chat");
    },
  });
};
