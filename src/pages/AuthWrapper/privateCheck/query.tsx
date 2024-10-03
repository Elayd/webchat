import { useQuery } from "@tanstack/react-query";
import { fetchAuthStatus } from "../../../axios/checkAuth";

export const useAuthCheck = () => {
  const accessToken = localStorage.getItem("accessToken");
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: async () => {
      const data = await fetchAuthStatus();
      return data;
    },
    enabled: !!accessToken,
    staleTime: 60000,
    retry: false,
  });
};
