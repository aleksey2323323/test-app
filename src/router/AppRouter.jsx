import { Route, Routes } from 'react-router-dom'

import { MainPage } from 'components/pages/MainPage/MainPage.jsx'
import { SignInPage } from 'components/pages/SignInPage/SignInPage.jsx'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<SignInPage />} />
      <Route path='/chats' element={<MainPage />} />
    </Routes>
  )
}
