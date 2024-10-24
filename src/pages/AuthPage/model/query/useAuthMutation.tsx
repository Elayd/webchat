import { useMutation } from "@tanstack/react-query";
import { IUserAuthData } from "../types/types.ts";
import useAuthStore, { setAuthSelector } from "@/app/store/AuthSlice/auth.ts";
import { useNavigate } from "react-router-dom";
import { AuthApi } from "@/pages/AuthPage/model/api/auth.ts";

export const useAuthMutation = () => {
  const setAuth = useAuthStore(setAuthSelector);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: IUserAuthData) =>
      AuthApi.authApi(data).then((res) => res.data),
    onSuccess: (response) => {
      const { accessToken, refreshToken } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setAuth(true);
      navigate("/chat");
    },
  });
};
