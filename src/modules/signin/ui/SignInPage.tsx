import { AuthForm } from '@/common/components/AuthForm'
import { handleServerError } from '@/common/utils/errorCodesHandler.ts'
import { UserAuthSchema } from '@/modules/signin/schema/auth.ts'

import { GoogleButton } from '../features/GoogleButton/GoogleButton.tsx'
import { useAuthMutation } from '../query/useAuthMutation.tsx'

const SignInPage = () => {
  const { mutate: authUser, error } = useAuthMutation()

  const errorMessage = error ? handleServerError(error) : ''

  const link = {
    to: '/registration',
    text: "If you don't have an account, please sign up here"
  }

  return (
    <div className='h-full w-full flex items-center justify-center flex-col'>
      <AuthForm
        title='SIGN IN'
        onSubmit={authUser}
        validationSchema={UserAuthSchema}
        link={link}
        errorMessage={errorMessage}
      />
      <div className='flex items-center justify-center'>
        <GoogleButton />
      </div>
    </div>
  )
}

export default SignInPage
