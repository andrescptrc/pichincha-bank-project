import { useMutation } from '@tanstack/react-query'

import { Product } from '@interfaces/products'
import { ProductsService } from '@services/products'
import { useNavigate } from 'react-router-dom'

const productService = new ProductsService()

const useEditProduct = () => {
  const navigate = useNavigate()

  const mutate = useMutation(async (product: Product) => productService.editProduct(product), {
    onSettled: () => {
      navigate('/')
    },
  })

  return { ...mutate }
}

export default useEditProduct
