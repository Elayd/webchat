import { axiosInstance } from "@/common/api";

export const getUploadAvatarLink = async (userId: string, fileType: string) => {
  return axiosInstance.get<{ url: string; key: string }>(
    `${import.meta.env.VITE_USER_SERVICE_PATH}/uploadImageUrl`,
    { params: { userId, fileType } }
  );
};
