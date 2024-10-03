import { privateInstance } from "@/axios";

export const refreshApi = async (refreshToken: string) => {
  return await privateInstance.post<string>("/security/refresh", {
    refreshToken,
  });
};
