import axios from 'core/axios.js'
import { getToken } from 'core/getToken.js'

export const checkProfile = async () => {
  const token = getToken()

  return await axios.get(`/waInstance${token[0]}/getStateInstance/${token[1]}`)
}
