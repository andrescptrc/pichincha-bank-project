import { useState } from 'react'

import SelectField from '@components/atoms/InputSelector'
import ProductItem from '@components/atoms/ProductItem'
import { isEmptyArray } from '@helpers/array'
import { useGetProducts } from '@hooks'
import { PAGE_SIZE } from '@constants/products'

const ProductsList = ({ query }: ProductsListProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSelected, setCurrentSelected] = useState('')
  const { data: products = [], isLoading } = useGetProducts()

  const filterByQuery = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

  const filterByPage = filterByQuery.slice((currentPage - 1) * PAGE_SIZE, PAGE_SIZE * currentPage)

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const page = Number(e.target.value)
    setCurrentPage(page)
  }

  return (
    <div className="products-list">
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Nombre del producto</th>
            <th>Descripcion</th>
            <th>Fecha de liberacion</th>
            <th>Fecha de reestructuracion</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Cargando...</td>
            </tr>
          )}

          {!isLoading &&
            filterByPage.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                setCurrentSelected={setCurrentSelected}
                currentSelected={currentSelected}
              />
            ))}

          {!isLoading && isEmptyArray(filterByPage) && (
            <tr>
              <td>No hay resultados</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="products-list__footer">
        <p className="results">
          {isLoading ? 'Cargando...' : `${filterByQuery.length} Resultados`}
        </p>
        <SelectField products={filterByQuery} onChange={handlePageChange} />
      </div>
    </div>
  )
}

type ProductsListProps = {
  query: string
}

export default ProductsList
