import { AuthForm } from '@/common/components/AuthForm'
import { handleServerError } from '@/common/utils/errorCodesHandler.ts'

import { useRegMutation } from '../query/useRegMutation.tsx'
import { UserRegistrationSchema } from '../schema/schema.ts'

const SignUpPage = () => {
  const { mutate: registration, error } = useRegMutation()

  const errorMessage = error ? handleServerError(error) : ''

  const link = {
    to: '/auth',
    text: 'If you have an account, please sign in here'
  }

  return (
    <div className='h-full w-full flex items-center justify-center flex-col'>
      <AuthForm
        title='SIGN UP'
        onSubmit={registration}
        validationSchema={UserRegistrationSchema}
        link={link}
        errorMessage={errorMessage}
      />
    </div>
  )
}

export default SignUpPage
