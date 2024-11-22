import { memo } from 'react'

import useUserStore, { userLogoutSelector } from '@/common/store/UserSlice/user.ts'
import { Button } from '@/common/ui/Button/Button.tsx'

import { logoutApi } from '../api/api.ts'

export const LogoutButton = memo(() => {
  const userLogout = useUserStore(userLogoutSelector)
  const handleLogout = async () => {
    await logoutApi()
    userLogout()
  }
  return (
    <Button size='sm' onClick={handleLogout}>
      Logout
    </Button>
  )
})
