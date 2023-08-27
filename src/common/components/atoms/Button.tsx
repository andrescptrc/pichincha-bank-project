import { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

const Button = ({ className, children, disabled, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button className={classNames(className, 'button')} type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default Button
