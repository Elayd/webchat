import { captureException } from "@sentry/react";
import { useMutation } from "@tanstack/react-query";

import { logoutAllOtherDevices } from "../api/logoutAllOtherDevices";

export const useLogoutAllOtherDevicesMutation = () => {
  return useMutation({
    mutationFn: logoutAllOtherDevices,
    onError: (error) => {
      captureException(error);
    },
  });
};
