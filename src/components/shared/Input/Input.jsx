import cn from 'classnames'

import s from './Input.module.scss'

export const Input = props => {
  const { label, name, placeholder, register, error } = props

  return (
    <label className={s.label}>
      <span>{label}</span>
      <input
        className={cn(s.input, { [s.errorInput]: error })}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className={s.error}>{error}</p>}
    </label>
  )
}
