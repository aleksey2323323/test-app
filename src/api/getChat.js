import axios from 'core/axios.js'
import { getToken } from 'core/getToken.js'

export const getChat = async data => {
  const token = getToken()

  return (
    await axios.post(`/waInstance${token[0]}/getChatHistory/${token[1]}`, data)
  ).data
}
