import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useUserStore, {
  getUserInfoSelector,
} from "@/common/store/UserSlice/user.ts";

import { signInApi } from "../api/auth.ts";
import { IUserAuthData } from "../types/types.ts";

export const useAuthMutation = () => {
  const getUserInfo = useUserStore(getUserInfoSelector);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: IUserAuthData) =>
      signInApi(data).then((res) => res.data),
    onSuccess: async (response) => {
      toast.success("Successfully logged in");
      const { accessToken, refreshToken, userId } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userId", userId);
      await getUserInfo();
      navigate("/chat");
    },
    onError: () => {
      toast.error("Error logging in");
    },
  });
};
