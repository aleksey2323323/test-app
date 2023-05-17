import s from './Aside.module.scss'
import { AsideChatList } from './AsideChatList/AsideChatList'
import { AsideNewChat } from './AsideNewChat/AsideNewChat'

export const Aside = () => {
  return (
    <aside className={s.aside}>
      <AsideNewChat />
      <AsideChatList />
    </aside>
  )
}
