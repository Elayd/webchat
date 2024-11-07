import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../api/api.ts";
import { useNavigate } from "react-router-dom";
import { IUserRegData } from "../types/types.ts";
import useUserStore, {
  getUserInfoSelector,
} from "@/app/store/UserSlice/user.ts";

export const useRegMutation = () => {
  const getUserInfo = useUserStore(getUserInfoSelector);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: IUserRegData) => signUpApi(data).then((res) => res.data),
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
