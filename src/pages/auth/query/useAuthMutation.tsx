import { useMutation } from "@tanstack/react-query";
import { IUserAuthData } from "../types/types.ts";
import { authApi } from "../api/api.ts";
import useAuthStore, { setAuthSelector } from "@/store/auth.ts";
import { useNavigate } from "react-router-dom";

export const useAuthMutation = () => {
  const setAuth = useAuthStore(setAuthSelector);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: IUserAuthData) => authApi(data).then((res) => res.data),
    onSuccess: (response) => {
      const { accessToken, refreshToken } = response;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setAuth(true);
      navigate("/chat");
    },
  });
};
