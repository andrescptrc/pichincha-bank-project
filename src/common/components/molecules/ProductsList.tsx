import { useGetProducts } from '@hooks'
import ProductsTable from './ProductsTable'

const ProductsList = () => {
  const { data } = useGetProducts()

  console.log(data)

  return (
    <div className="products-list">
      <ProductsTable />
    </div>
  )
}

export default ProductsList
