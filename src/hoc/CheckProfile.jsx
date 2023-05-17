import { destroyCookie } from 'nookies'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { checkProfile } from 'api/checkProfile.js'

export const CheckProfile = ({ children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    checkProfile()
      .then(() => {
        navigate('/chats')
      })
      .catch(e => {
        console.warn('check auth:', e.message)
        destroyCookie(null, '_token', { path: '/' })
        navigate('/')
      })
  }, [])

  return <>{children}</>
}
