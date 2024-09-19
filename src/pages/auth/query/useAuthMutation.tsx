import { useMutation } from "@tanstack/react-query";
import { IUserData } from "../types/types.ts";
import { authApi } from "../api/api.ts";
import { queryClient } from "@/App.tsx";

export const useAuthMutation = () => {
  return useMutation({
    mutationFn: (data: IUserData) => authApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authStatus"] });
    },
  });
};
