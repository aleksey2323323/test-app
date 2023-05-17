import * as yup from 'yup'

import { phoneRegExp } from '../regExp.js'

export const schema = {
  id: yup.string().required('Необходимо ввести ваш idInstance'),
  api: yup.string().required('Необходимо ввести ваш apiTokenInstance'),
  message: yup.string().required('Введите сообщение'),
  phone: yup
    .string()
    .required('Необходимо ввести телефон')
    .matches(phoneRegExp, 'Телефон введен некорректно')
}
