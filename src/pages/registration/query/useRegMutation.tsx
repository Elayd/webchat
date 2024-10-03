import { useMutation } from "@tanstack/react-query";
import { regApi } from "../api/api.ts";
import { useNavigate } from "react-router-dom";
import { IUserRegData } from "../types/types.ts";
import useAuthStore, { setAuthSelector } from "@/store/auth.ts";
import { handleAuthHandler } from "@/utils/handleAuthHandler.ts";

export const useRegMutation = () => {
  const setAuth = useAuthStore(setAuthSelector);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: IUserRegData) => regApi(data).then((res) => res.data),
    onSuccess: (response) => {
      handleAuthHandler(response, setAuth, navigate);
    },
  });
};
