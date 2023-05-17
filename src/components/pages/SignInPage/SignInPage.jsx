import { CheckProfile } from 'hoc/CheckProfile.jsx'

import { SignInForm } from 'components/pages/SignInPage/ui/SignInForm/SignInForm.jsx'

export const SignInPage = () => {
  return (
    <CheckProfile>
      <SignInForm />
    </CheckProfile>
  )
}
