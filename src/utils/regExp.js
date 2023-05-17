import * as yup from 'yup'

export function escapeRegExp(stringToGoIntoTheRegex) {
  return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

export const phoneMask = '+7 (999) 999-99-99'
export const phoneRegExp = new RegExp(
  escapeRegExp(phoneMask).replace(/9/g, '[0-9]'),
  'gi'
)

function equalTo(ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path
    },
    test: function (value) {
      return value === this.resolve(ref)
    }
  })
}

yup.addMethod(yup.string, 'equalTo', equalTo)
