import { yupResolver } from '@hookform/resolvers/yup'
import { setCookie } from 'nookies'
import { useForm } from 'react-hook-form'

import { login } from 'api/auth.js'

import { Button } from 'components/shared/Button/Button.jsx'
import { Input } from 'components/shared/Input/Input.jsx'

import { validationSignIn } from 'utils/validation/validationSignIn.js'

import s from './SignInForm.module.scss'

export const SignInForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSignIn)
  })

  const onSubmit = async data => {
    const { idInstance, apiTokenInstance } = data

    try {
      await login(idInstance, apiTokenInstance)

      setCookie(null, '_token', `${idInstance};${apiTokenInstance}`, {
        path: '/'
      })

      location.href = '/chats'
    } catch (e) {
      console.warn(e.message)
      setError('apiTokenInstance', {
        message: 'idInstance или apiTokenInstance введен не верно'
      })
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s.form__title}>Авторизация</h2>
      <Input
        label='IdInstance'
        placeholder='ваш IdInstance'
        name='idInstance'
        register={register}
        error={errors['idInstance']?.message}
      />
      <Input
        label='apiTokenInstance'
        placeholder='ваш apiTokenInstance'
        name='apiTokenInstance'
        register={register}
        error={errors['apiTokenInstance']?.message}
      />
      <Button text='Войти' />
    </form>
  )
}
