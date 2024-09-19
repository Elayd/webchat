import { useMutation } from "@tanstack/react-query";
import { getGoogleOAuthUrl } from "../api/api";

export const useGoogleOAuth = () => {
  return useMutation({
    mutationFn: getGoogleOAuthUrl,
    onSuccess: (url) => {
      window.location.assign(url);
    },
  });
};
