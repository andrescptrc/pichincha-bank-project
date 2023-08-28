import { ReactNode } from 'react'

import { fireEvent, render } from '@testing-library/react'

import MenuActions from '@atoms/MenuActions'
import { useNavigate } from 'react-router-dom'
import useDeleteProduct from '@hooks/useDeleteProduct'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@wrappers/ReactQuery'

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('@hooks/useDeleteProduct')

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

const mockUseNavigate = useNavigate as jest.Mock
const mockUseDeleteProduct = useDeleteProduct as jest.Mock

describe('Menu Actions Test', () => {
  it('Should call the useNavigate hook when is clicked the Editar button', () => {
    const mockNavigate = jest.fn()
    mockUseNavigate.mockReturnValue(mockNavigate)

    mockUseDeleteProduct.mockImplementation(() => ({
      mutate: jest.fn,
      isLoading: false,
    }))

    const { getByText } = render(<MenuActions id="test123" />, { wrapper })
    const editButton = getByText('Editar')

    fireEvent.click(editButton)
    expect(mockNavigate).toHaveBeenCalledWith('/products/edit/test123')
  })

  it('Should call useDeleteProduct when is clicked the Delete button', () => {
    const mockMutate = jest.fn()

    mockUseDeleteProduct.mockImplementation(() => ({
      mutate: mockMutate,
      isLoading: false,
    }))

    const { getByText } = render(<MenuActions id="test123" />, { wrapper })
    const deleteButton = getByText('Eliminar')

    fireEvent.click(deleteButton)
    expect(mockMutate).toHaveBeenCalledWith('test123')
  })

  it('Shoud show Eliminando... when isLoading of the delete hook is true', () => {
    const mockMutate = jest.fn()

    mockUseDeleteProduct.mockImplementation(() => ({
      mutate: mockMutate,
      isLoading: true,
    }))

    const { getByText } = render(<MenuActions id="test123" />, { wrapper })
    const deleteButton = getByText('Eliminando...')

    expect(deleteButton).toBeInTheDocument()
  })
})
