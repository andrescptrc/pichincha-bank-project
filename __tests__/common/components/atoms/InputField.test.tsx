import { render } from '@testing-library/react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

import { InputField } from '@atoms'

describe('InputField Tests', () => {
  it('Should render the input correctly', () => {
    const { container } = render(<InputField />)
    const inputElement = container.querySelector('.input-field')

    expect(inputElement).toBeInTheDocument()
  })

  it('Should render the label if is provided', () => {
    const { getByLabelText } = render(<InputField id="name" label="name" />)
    const labelElement = getByLabelText('name')

    expect(labelElement).toBeInTheDocument()
  })

  it('Should render with the provided classnames', () => {
    const { container } = render(<InputField className="test-class" />)
    const inputElement = container.querySelector('.test-class')

    expect(inputElement).toBeInTheDocument()
  })

  it('Should render errors if exists', () => {
    const error = { message: 'The ID is not valid' } as unknown as
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>

    const { getByText } = render(<InputField errors={error} />)
    const errorElement = getByText('The ID is not valid')

    expect(errorElement).toBeInTheDocument()
  })

  it('Should render the error classes if exists', () => {
    const error = { message: 'The ID is not valid' } as unknown as
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>

    const { container } = render(<InputField errors={error} errorClass="text-class-error" />)
    const errorElement = container.querySelector('.text-class-error')
    const inputElement = container.querySelector('.input-error')

    expect(errorElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })
})
