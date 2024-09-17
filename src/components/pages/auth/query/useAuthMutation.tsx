import { useMutation } from "@tanstack/react-query";
import { IUserData } from "../types/types.ts";
import { authApi } from "../api/api.ts";
import { useNavigate } from "react-router-dom";

export const useAuthMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: IUserData) => authApi(data),
    onSuccess: () => {
      navigate("/chat");
    },
  });
};
