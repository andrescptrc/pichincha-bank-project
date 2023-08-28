import { forwardRef, SelectHTMLAttributes } from 'react'
import classNames from 'classnames'

import { Product } from '@interfaces/products'
import { PAGE_SIZE } from '@constants/products'

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ id, label, className, products, ...rest }, ref) => {
    const productsSize = products.length

    const pagesAvailable = Math.ceil(productsSize / PAGE_SIZE)

    const pagesArray = Array.from({ length: pagesAvailable }, (_, index) => index + 1)

    return (
      <>
        <div className={classNames(className, 'input-select')}>
          <select id={id} name="page" {...rest} ref={ref}>
            {pagesArray.map((page) => (
              <option value={page} key={`page-${page}`}>
                {page}
              </option>
            ))}
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
  products: Product[]
}

type SelectFieldProps = SelectFieldType & SelectHTMLAttributes<HTMLSelectElement>

export default SelectField
