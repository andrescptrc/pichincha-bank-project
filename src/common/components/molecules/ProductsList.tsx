import { useState } from 'react'

import SelectField from '@components/atoms/InputSelector'
import ProductItem from '@components/atoms/ProductItem'
import { useGetProducts } from '@hooks'

const ProductsList = () => {
  const [currentSelected, setCurrentSelected] = useState('')
  const { data: products = [], isLoading } = useGetProducts()

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
            products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                setCurrentSelected={setCurrentSelected}
                currentSelected={currentSelected}
              />
            ))}
        </tbody>
      </table>
      <div className="products-list__footer">
        <p className="results">{isLoading ? 'Cargando...' : `${products.length} Resultados`}</p>
        <SelectField />
      </div>
    </div>
  )
}

export default ProductsList
