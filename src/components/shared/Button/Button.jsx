import s from './Button.module.scss'

export const Button = ({ text, onClick = () => null }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {text}
    </button>
  )
}
