import { useSelector } from 'react-redux'

import { AsideChatItem } from 'components/pages/MainPage/ui/Aside/AsideChatList/AsideChatItem.jsx'

import s from './AsideChatList.module.scss'

export const AsideChatList = () => {
  const chats = useSelector(state => state.chats.chats)

  return chats.length > 0 ? (
    <div className={s.list}>
      {chats.map(chat => (
        <AsideChatItem chat={chat} key={chat} />
      ))}
    </div>
  ) : null
}
