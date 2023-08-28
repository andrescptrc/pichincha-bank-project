import { fireEvent, render } from '@testing-library/react'

import { Button } from '@atoms'

describe('Button Tests', () => {
  it('The buttons should render correctly', () => {
    const { getByText } = render(<Button>Test</Button>)
    const buttonElement = getByText('Test')

    expect(buttonElement).toBeInTheDocument()
  })

  it('Should render the button with aditional classes', () => {
    const { container } = render(<Button className="test-class">Test</Button>)
    const buttonElement = container.querySelector('.test-class')

    expect(buttonElement).toBeInTheDocument()
  })

  it('Should call the function on the onClick', () => {
    const onClickMock = jest.fn()

    const { getByText } = render(<Button onClick={onClickMock}>Test</Button>)
    const buttonElement = getByText('Test')

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
