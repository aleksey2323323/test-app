import { CheckProfile } from 'hoc/CheckProfile.jsx'

import { Aside } from 'components/pages/MainPage/ui/Aside/Aside.jsx'
import { Chat } from 'components/pages/MainPage/ui/Chat/Chat.jsx'

import s from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <CheckProfile>
      <div className={s.wrapper}>
        <Aside />
        <Chat />
      </div>
    </CheckProfile>
  )
}
