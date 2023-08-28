import classNames from 'classnames'
import { forwardRef, SelectHTMLAttributes } from 'react'

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ id, label, className, errorClass, ...rest }, ref) => {
    return (
      <>
        <div className={classNames(className, 'input-select')}>
          <select id={id} name="page" {...rest} ref={ref}>
            <option value="5">5</option>
          </select>
        </div>
      </>
    )
  }
)

SelectField.displayName = 'SelectField'

type SelectFieldType = {
  label?: string
  className?: string
  errorClass?: string
}

type SelectFieldProps = SelectFieldType & SelectHTMLAttributes<HTMLSelectElement>

export default SelectField
