import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, className, labelClasses, inputClasses, errors, errorClass, ...rest }, ref) => {
    return (
      <>
        <div className={classNames(className, 'input-field')}>
          {label && (
            <label htmlFor={id} className={classNames(labelClasses, 'input-field__label')}>
              {label}
            </label>
          )}
          <input
            id={id}
            ref={ref}
            className={classNames(inputClasses, 'input-field__input')}
            {...rest}
          />
          {errors && (
            <p className={classNames(errorClass, 'input-field__error')}>{errors?.message}</p>
          )}
        </div>
      </>
    )
  }
)

InputField.displayName = 'InputField'

type InputFieldType = {
  label?: string
  className?: string
  labelClasses?: string
  inputClasses?: string
  errorClass?: string
  errors?: FieldError
}

type InputFieldProps = InputFieldType & InputHTMLAttributes<HTMLInputElement>

export default InputField
