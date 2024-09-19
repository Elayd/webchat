import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../api";
import { queryClient } from "@/App";

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authStatus"] });
    },
  });
};
