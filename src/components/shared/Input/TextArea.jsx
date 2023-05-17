import cn from 'classnames'

import s from './Input.module.scss'

export const TextArea = props => {
  const { label, name, placeholder, register, error } = props

  return (
    <label className={s.label}>
      <span>{label}</span>
      <textarea
        className={cn(s.textarea, { [s.errorInput]: error })}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className={s.error}>{error}</p>}
    </label>
  )
}
