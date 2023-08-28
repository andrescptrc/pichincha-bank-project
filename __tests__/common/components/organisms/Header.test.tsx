import { Header } from '@organisms'
import { render } from '@testing-library/react'

describe('Header Tests', () => {
  it('Should render the logo', () => {
    const { getByAltText } = render(<Header />)
    const logoElement = getByAltText(/logo/i)
    expect(logoElement).toBeInTheDocument()
  })
})
