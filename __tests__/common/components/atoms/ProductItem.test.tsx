import ProductItem from '@atoms/ProductItem'
import { fireEvent, render } from '@testing-library/react'
import { mockProducts } from '../../../mocks/products'
import { wrapper } from '../../../utilities/utilities'

import { useNavigate } from 'react-router-dom'

const mockSetCurrentSelected = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

const mockUseNavigate = useNavigate as jest.Mock

describe('Product Item Test', () => {
  it('Should render correctly', () => {
    const mockNavigate = jest.fn()
    mockUseNavigate.mockReturnValue(mockNavigate)

    const { container } = render(
      <ProductItem
        product={mockProducts[0]}
        currentSelected="1"
        setCurrentSelected={mockSetCurrentSelected}
      />,
      { wrapper }
    )

    const productElement = container.querySelector('.product-item')

    expect(productElement).toBeInTheDocument()
  })

  it('Should call the setCurrentState when the logo is clicked', () => {
    const { getByTitle } = render(
      <ProductItem
        product={mockProducts[0]}
        currentSelected="1"
        setCurrentSelected={mockSetCurrentSelected}
      />,
      { wrapper }
    )

    const logoButton = getByTitle('Menu')

    fireEvent.click(logoButton)
    expect(mockSetCurrentSelected).toHaveBeenCalledWith('')
  })

  it('Should not render MenuActions if canShow is false', () => {
    const { container } = render(
      <ProductItem
        product={mockProducts[0]}
        currentSelected="2"
        setCurrentSelected={mockSetCurrentSelected}
      />,
      { wrapper }
    )

    const menuActions = container.querySelector('.menu-actions')

    expect(menuActions).not.toBeInTheDocument()
  })

  it('Should render MenuActions if canShow is false', () => {
    const { container } = render(
      <ProductItem
        product={mockProducts[0]}
        currentSelected="1"
        setCurrentSelected={mockSetCurrentSelected}
      />,
      { wrapper }
    )

    const menuActions = container.querySelector('.menu-actions')

    expect(menuActions).toBeInTheDocument()
  })
})
