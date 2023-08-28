import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('should work as expected', () => {
    render(<App />)
    const h1Element = screen.getByText(/vite react/i)
    expect(h1Element).toBeInTheDocument()
  })
})
