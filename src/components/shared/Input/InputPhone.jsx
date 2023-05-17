import cn from 'classnames'
import ReactInputMask from 'react-input-mask'

import s from './Input.module.scss'

export const InputPhone = props => {
  const { register, name, label, placeholder, error } = props
  return (
    <ReactInputMask mask='+7 (999) 999-99-99' {...register(name)}>
      {prop => {
        return (
          <label className={s.label}>
            <span>{label}</span>
            <input
              className={cn(s.input, { [s.errorInput]: error })}
              placeholder={placeholder}
              {...prop}
            />
            {error && <p className={s.error}>{error}</p>}
          </label>
        )
      }}
    </ReactInputMask>
  )
}
