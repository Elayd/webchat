import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useUserStore, {
  getUserInfoSelector,
} from "@/common/store/UserSlice/user.ts";

import { signUpApi } from "../api/api.ts";
import { IUserRegData } from "../types/types.ts";

export const useRegMutation = () => {
  const getUserInfo = useUserStore(getUserInfoSelector);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: IUserRegData) => signUpApi(data).then((res) => res.data),
    onSuccess: async (response) => {
      toast.success("Successfully signed up");
      const { accessToken, refreshToken, userId } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userId", userId);
      await getUserInfo();
      navigate("/chat");
    },
    onError: () => {
      toast.error("Error signing up");
    },
  });
};
