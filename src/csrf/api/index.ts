import { axiosInstance } from "@/axios";

export const getCsrfToken = async () => {
  const response = await axiosInstance.post<string>("/security/csrf");
  return response.data;
};
