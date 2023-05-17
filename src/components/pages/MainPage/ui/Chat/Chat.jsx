import { useSelector } from 'react-redux'

import s from './Chat.module.scss'
import { ChatBody } from './ChatBody'

export const Chat = () => {
  const selectedChat = useSelector(state => state.chats.selectedChat)

  return (
    <div className={s.chat}>
      {selectedChat ? <ChatBody selectedChat={selectedChat} /> : <div></div>}
    </div>
  )
}
