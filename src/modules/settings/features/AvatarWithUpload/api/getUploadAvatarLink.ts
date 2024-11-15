import { axiosInstance } from "@/common/api";

export const getUploadAvatarLink = async (userId: string, fileType: string) => {
  return axiosInstance.get<{ url: string; key: string }>(
    "http://localhost:8013/api/user/uploadImage",
    { params: { userId, fileType } }
  );
};
