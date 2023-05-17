import cn from 'classnames'
import { useEffect, useState } from 'react'

import { getChat } from 'api/getChat.js'

import s from './Chat.module.scss'

export const ChatList = ({ selectedChat }) => {
  const [chats, setChats] = useState([])

  useEffect(() => {
    let timer

    if (selectedChat) {
      const body = {
        chatId: `${selectedChat.replace(/[^0-9]/g, '')}@c.us`,
        count: 100
      }

      getChat(body).then(data => setChats(data.reverse()))

      timer = setInterval(() => {
        try {
          getChat(body).then(data => setChats(data.reverse()))
        } catch (e) {
          console.warn('Ошибка получения чата:', e.message)
        }
      }, 5000)
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [selectedChat])

  return (
    <div className={s.chats}>
      {chats.map((chat, idx) => (
        <div
          className={cn(s.chats__item, {
            [s.outgoing]: chat.type === 'outgoing'
          })}
          key={idx}
        >
          {chat.textMessage}
        </div>
      ))}
    </div>
  )
}
