import { axiosInstance } from '@/common/api'

export const changeUserAvatar = async (userId: string, picture: string) => {
  return axiosInstance.put<string>(`${import.meta.env.VITE_USER_SERVICE_PATH}/changeUserAvatar`, { userId, picture })
}
