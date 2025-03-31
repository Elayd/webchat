import { captureException } from '@sentry/react'
import { toast } from 'react-toastify'
import { create } from 'zustand'

import { getUserInfo } from '@/common/store/UserSlice/api/getUserInfo.ts'

import { User } from '../../types/user.ts'
import { changeUserAvatar } from './api/changeUserAvatar.ts'
import { changeUserInfo } from './api/changeUserInfo.ts'
import { getUploadAvatarLink } from './api/getUploadAvatarLink.ts'
import { uploadImageToS3 } from './api/uploadImageToS3.ts'

interface UserState {
  isLoading: boolean
  user: User | null
  setIsLoading: (isLoading: boolean) => void
  getUserInfo: () => Promise<void>
  changeUser: ({ firstName, secondName }: { firstName: string; secondName: string }) => Promise<void>
  userLogout: () => void
  changeUserAvatar: (file: File) => Promise<void>
}

const useUserStore = create<UserState>((set, get) => ({
  isLoading: true,
  user: null,
  setIsLoading: (isLoading) => set({ isLoading }),
  changeUser: async ({ firstName, secondName }) => {
    const currentUser = get().user
    if (!currentUser) return

    try {
      if (currentUser.firstName === firstName && currentUser.secondName === secondName) {
        return
      }

      set({
        user: {
          ...currentUser,
          firstName,
          secondName
        }
      })

      await changeUserInfo(currentUser.userId, firstName, secondName)
      toast.success('Successfully changed info')
    } catch (error) {
      toast.error('Update info failed')
      set({
        user: currentUser
      })
      captureException(error)
    } finally {
      await get().getUserInfo()
    }
  },
  getUserInfo: async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const userId = localStorage.getItem('userId')
      if (!accessToken || !userId) return

      const user = await getUserInfo(userId)
      set({ user })
    } catch (error) {
      captureException(error)
    } finally {
      set({ isLoading: false })
    }
  },

  changeUserAvatar: async (file) => {
    const currentUser = get().user
    if (!currentUser) return

    try {
      const { data } = await getUploadAvatarLink(currentUser.userId, file?.type)

      const { url, key } = data

      await uploadImageToS3(url, file)

      const avatarUrl = `${import.meta.env.VITE_S3_URL}/${key}`

      await changeUserAvatar(currentUser.userId, avatarUrl)
      toast.success('Successfully changed avatar')
    } catch (error) {
      toast.error('Upload failed')
      captureException(error)
    } finally {
      await get().getUserInfo()
    }
  },
  userLogout: () => {
    set({
      user: null
    })
  }
}))

export default useUserStore

export const isLoadingGetUserInfoSelector = (state: UserState) => state.isLoading
export const getUserInfoSelector = (state: UserState) => state.getUserInfo
export const userInfoSelector = (state: UserState) => state.user

export const changeUserInfoSelector = (state: UserState) => state.changeUser

export const changeUserAvatarSelector = (state: UserState) => state.changeUserAvatar

export const userLogoutSelector = (state: UserState) => state.userLogout
