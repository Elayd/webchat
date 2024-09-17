import { useQuery } from "@tanstack/react-query";
import { fetchAuthStatus } from "./api";

export const useAuthCheck = () => {
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: async () => {
      const data = await fetchAuthStatus();
      return data;
    },
    staleTime: 60000,
    retry: false,
  });
};
