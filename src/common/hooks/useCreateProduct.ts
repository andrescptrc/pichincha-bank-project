import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PRODUCTS } from '@constants/cache-query-keys'
import { Product } from '@interfaces/products'
import { ProductsService } from '@services/products'
import { useNavigate } from 'react-router-dom'

const productService = new ProductsService()

const useCreateProduct = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutate = useMutation(async (product: Product) => productService.createProduct(product), {
    onMutate: async (newProduct: Product) => {
      await queryClient.cancelQueries({ queryKey: [PRODUCTS] })

      const previousProducts = (queryClient.getQueryData([PRODUCTS]) || []) as Product[]

      queryClient.setQueryData([PRODUCTS], [newProduct, ...previousProducts])

      return { previousProducts }
    },

    onError: (err, newProduct, context) => {
      queryClient.setQueryData([PRODUCTS], context?.previousProducts || [])
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS] })
      navigate('/')
    },
  })

  return { ...mutate }
}

export default useCreateProduct
