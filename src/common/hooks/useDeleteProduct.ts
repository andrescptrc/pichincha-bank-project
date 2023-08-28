import { useMutation, useQueryClient } from '@tanstack/react-query'

import { PRODUCTS } from '@constants/cache-query-keys'
import { Product } from '@interfaces/products'
import { ProductsService } from '@services/products'
import { useNavigate } from 'react-router-dom'

const productService = new ProductsService()

const useDeleteProduct = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutate = useMutation(async (id: string) => productService.deleteProduct(id), {
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: [PRODUCTS] })

      const previousProducts = (queryClient.getQueryData([PRODUCTS]) || []) as Product[]

      const filterDeleteProduct = previousProducts.filter((product) => product.id !== id)

      queryClient.setQueryData([PRODUCTS], [...filterDeleteProduct])

      return { previousProducts }
    },

    onError: (err, id, context) => {
      queryClient.setQueryData([PRODUCTS], context?.previousProducts || [])
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS] })
      navigate('/')
    },
  })

  return { ...mutate }
}

export default useDeleteProduct
