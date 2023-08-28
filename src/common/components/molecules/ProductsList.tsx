import { useState } from 'react'

import SelectField from '@components/atoms/InputSelector'
import ProductItem from '@components/atoms/ProductItem'
import { useGetProducts } from '@hooks'
import { isEmptyArray } from '@helpers/array'

const ProductsList = ({ query }: ProductsListProps) => {
  const [currentSelected, setCurrentSelected] = useState('')
  const { data: products = [], isLoading } = useGetProducts()

  const filterByQuery = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

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
            filterByQuery.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                setCurrentSelected={setCurrentSelected}
                currentSelected={currentSelected}
              />
            ))}

          {!isLoading && isEmptyArray(filterByQuery) && (
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
        <SelectField />
      </div>
    </div>
  )
}

type ProductsListProps = {
  query: string
}

export default ProductsList
