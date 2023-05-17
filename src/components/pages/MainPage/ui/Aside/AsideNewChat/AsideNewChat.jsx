import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { chatReducer } from 'store/reducers/chatReducer.js'

import { Button } from 'components/shared/Button/Button.jsx'
import { InputPhone } from 'components/shared/Input/InputPhone.jsx'

import { createChat } from 'utils/validation/createChat.js'

import s from './AsideNewChat.module.scss'

const addNewChat = chatReducer.actions.addNewChat

export const AsideNewChat = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({ resolver: yupResolver(createChat) })

  const dispatch = useDispatch()

  const onSubmit = data => {
    dispatch(addNewChat(data))
    setValue('phone', '')
  }

  return (
    <div className={s.new}>
      <h2 className={s.new__title}>Создать новый чат</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <InputPhone
          register={register}
          label='Телефон'
          name='phone'
          error={errors['phone']?.message}
          placeholder='Телефон'
        />
        <Button text='создать' />
      </form>
    </div>
  )
}
