import { privateInstance } from "@/axios";

export const fetchAuthStatus = async () => {
  return await privateInstance.post("/security/checkAuth");
};
