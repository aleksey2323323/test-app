import axios from 'core/axios.js'

export const login = async (idInstance, apiTokenInstance) => {
  return (
    await axios.get(
      `/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    )
  ).data
}
