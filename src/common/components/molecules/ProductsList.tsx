import { useState } from 'react'
import { useDebounce } from 'react-use'

import SelectField from '@atoms/InputSelector'
import ProductItem from '@atoms/ProductItem'
import { isEmptyArray } from '@helpers/array'
import { PAGE_SIZE } from '@constants/products'
import useGetProducts from '@hooks/petitions/useGetProducts'

const SEARCH_DELAY = 300

const ProductsList = ({ query }: ProductsListProps) => {
  const [queryKey, setQueryKey] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSelected, setCurrentSelected] = useState('')
  const { data: products = [], isLoading } = useGetProducts()

  useDebounce(
    () => {
      setCurrentPage(1)
      setQueryKey(query)
    },
    SEARCH_DELAY,
    [query]
  )

  const filterByQuery = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(queryKey.toLocaleLowerCase())
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
