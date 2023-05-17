import * as yup from 'yup'

import { schema } from './schema.js'

export const createChat = yup.object().shape({
  phone: schema.phone
})
