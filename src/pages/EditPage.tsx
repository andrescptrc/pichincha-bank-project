import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'

import { ProductForm } from '@components/molecules'
import { PRODUCTS } from '@constants/cache-query-keys'
import { Product } from '@interfaces/products'
import { useQueryClient } from '@tanstack/react-query'

const EditPage = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const productsCache = (queryClient.getQueryData([PRODUCTS]) || []) as Product[]
  const currentProduct = productsCache.find((product) => product.id === id)

  if (currentProduct) {
    currentProduct.date_release = dayjs(currentProduct.date_release).format('YYYY-MM-DD')
    currentProduct.date_revision = dayjs(currentProduct.date_revision).format('YYYY-MM-DD')
  }

  return (
    <div className="container">
      <ProductForm product={currentProduct} />
    </div>
  )
}

export default EditPage
