import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

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
            className={classNames(inputClasses, 'input-field__input', { 'input-error': errors })}
            {...rest}
          />
          {errors && (
            <p className={classNames(errorClass, 'input-field__error')}>
              {errors.message?.toString()}
            </p>
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
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

type InputFieldProps = InputFieldType & InputHTMLAttributes<HTMLInputElement>

export default InputField
