import { useCallback } from 'react'
import { Link } from 'react-router-dom'

import useUserStore, {
  changeUserAvatarSelector,
  changeUserInfoSelector,
  userInfoSelector
} from '@/common/store/UserSlice/user.ts'
import { Button } from '@/common/ui/Button/Button.tsx'

import { UserForm } from '../components/UserForm/index.ts'
import { AvatarWithUpload } from '../features/AvatarWithUpload/ui/AvatarWithUpload.tsx'
import { LogoutFromAllOtherDevicesButton } from '../features/LogoutFromAllOtherDevicesButton/index.ts'
import { useLogoutAllOtherDevicesMutation } from '../query/useLogoutAllOtherDevicesMutation.tsx'
import { UserDataSchema } from '../schema/schema.ts'

const SettingsPage = () => {
  const changeUserInfo = useUserStore(changeUserInfoSelector)
  const user = useUserStore(userInfoSelector)
  const changeUserAvatar = useUserStore(changeUserAvatarSelector)

  const { mutate: logoutAllOtherDevices } = useLogoutAllOtherDevicesMutation()

  const handleSubmit = useCallback(
    (data: { firstName: string; secondName: string }) => {
      changeUserInfo(data)
    },
    [changeUserInfo]
  )

  const handleChangeAvatar = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (!file) return
      changeUserAvatar(file)
    },
    [changeUserAvatar]
  )

  const handleLogoutAllOtherDevices = useCallback(() => {
    logoutAllOtherDevices()
  }, [logoutAllOtherDevices])

  const defaultValues = {
    firstName: user?.firstName ?? '',
    secondName: user?.secondName ?? ''
  }

  return (
    <div className='h-full w-full bg-gray-800 flex justify-center py-8 px-4'>
      <Link to='/chat'>
        <Button className='absolute top-4 left-4 px-4 py-2 '>BACK</Button>
      </Link>

      <div className='max-w-md w-full'>
        <div className='flex justify-center mb-6'>
          <AvatarWithUpload
            picture={user?.picture ?? ''}
            className='w-24 h-24'
            handleChangeAvatar={handleChangeAvatar}
          />
        </div>

        <UserForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          validationSchema={UserDataSchema}
          title='Settings'
        />

        <div className='mt-6 flex justify-center'>
          <LogoutFromAllOtherDevicesButton handleLogout={handleLogoutAllOtherDevices} />
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
