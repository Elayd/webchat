import { useMutation } from "@tanstack/react-query";
import { regApi } from "../api/api.ts";
import { useNavigate } from "react-router-dom";
import { IUserRegData } from "../types/types.ts";

export const useRegMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: IUserRegData) => regApi(data),
    onSuccess: () => {
      navigate("/auth");
    },
  });
};
