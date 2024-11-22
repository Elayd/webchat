import { captureException } from '@sentry/react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { logoutAllOtherDevices } from '../api/logoutAllOtherDevices'

export const useLogoutAllOtherDevicesMutation = () => {
  return useMutation({
    mutationFn: logoutAllOtherDevices,
    onSuccess: () => {
      toast.success('Successfully logged out from all devices!')
    },
    onError: (error) => {
      captureException(error)
    }
  })
}
