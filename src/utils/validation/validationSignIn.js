import * as yup from 'yup'

import { schema } from './schema.js'

export const validationSignIn = yup.object().shape({
  idInstance: schema.id,
  apiTokenInstance: schema.api
})

