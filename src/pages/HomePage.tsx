import { ProductsList, SearchProducts } from '@components/molecules'

const HomePage = () => {
  return (
    <div className="container">
      <SearchProducts />
      <ProductsList />
    </div>
  )
}

export default HomePage
