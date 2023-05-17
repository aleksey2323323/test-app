import * as yup from 'yup'

import { schema } from './schema.js'

export const createMessage = yup.object().shape({
  message: schema.message
})
