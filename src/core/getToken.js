import { parseCookies } from 'nookies'

export const getToken = () => {
  const { _token } = parseCookies()

  if (_token) {
    return _token.split(';')
  }

  return undefined
}
