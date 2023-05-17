import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { sendMessage } from 'api/sendMessage.js'

import { AsideChatItem } from 'components/pages/MainPage/ui/Aside/AsideChatList/AsideChatItem.jsx'
import { ChatList } from 'components/pages/MainPage/ui/Chat/ChatList.jsx'
import { Button } from 'components/shared/Button/Button.jsx'
import { TextArea } from 'components/shared/Input/TextArea.jsx'

import { createMessage } from 'utils/validation/createMessage.js'

import s from './Chat.module.scss'

export const ChatBody = ({ selectedChat }) => {
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(createMessage)
  })

  const onSubmit = async data => {
    const body = {
      chatId: `${selectedChat.replace(/[^0-9]/g, '')}@c.us`,
      message: data.message
    }

    await sendMessage(JSON.stringify(body))
    await setValue('message', '')
  }

  return (
    <>
      <div className={s.header}>
        <AsideChatItem chat={selectedChat} />
      </div>
      <ChatList selectedChat={selectedChat} />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          register={register}
          name='message'
          error={undefined}
          placeholder='Ваше сообщение'
        />
        <Button text='отправить' />
      </form>
    </>
  )
}
