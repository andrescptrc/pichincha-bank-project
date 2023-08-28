import { useQuery } from '@tanstack/react-query'

import { ProductsService } from '@services/products'
import { PRODUCTS } from '@constants/cache-query-keys'
import { Product } from '@interfaces/products'

const productsService = new ProductsService()

const useGetProducts = () => {
  return {
    ...useQuery<Product[]>([PRODUCTS], async () => productsService.getProducts()),
  }
}

export default useGetProducts
