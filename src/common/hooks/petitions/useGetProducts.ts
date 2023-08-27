import { useQuery } from '@tanstack/react-query'

import { ProductsService } from '@services/products'
import { PRODUCTS } from '@constants/cache-query-keys'

const productsService = new ProductsService()

const useGetProducts = () => {
  return {
    ...useQuery([PRODUCTS], async () => productsService.getProducts()),
  }
}

export default useGetProducts
