import { captureException } from '@sentry/react'

import { axiosInstance } from '@/common/api'

export const logoutApi = async () => {
  const refreshToken = localStorage.getItem('refreshToken')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('userId')

  if (!refreshToken) {
    captureException('No refreshToken token')
    return
  }

  try {
    return await axiosInstance.post(`${import.meta.env.VITE_AUTH_SERVICE_PATH}/logout`, {
      refreshToken
    })
  } catch (error) {
    captureException(error)
  }
}
