import { render } from '@testing-library/react'

import { mockProducts } from '../../../mocks/products'
import SelectField from '@atoms/InputSelector'

describe('Input Selector Tests', () => {
  it('Should render the input correctly', () => {
    const { getByRole } = render(<SelectField products={mockProducts} />)

    const selectorElement = getByRole('combobox')
    expect(selectorElement).toBeInTheDocument()
  })

  it('Should render page options based on the products', () => {
    const { getAllByRole } = render(<SelectField products={mockProducts} />)

    const options = getAllByRole('option')
    expect(options).toHaveLength(1)
  })
})
