import SelectField from '@components/atoms/InputSelector'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

import { useGetProducts } from '@hooks'
import dayjs from 'dayjs'

const ProductsList = () => {
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
            products.map((product) => {
              const parsedReleaseDate = dayjs(product.date_release).format('DD/MM/YYYY')
              const parsedRevisionDate = dayjs(product.date_revision).format('DD/MM/YYYY')

              return (
                <tr key={product.id}>
                  <td>
                    <img src={product.logo} alt={product.name} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{parsedReleaseDate}</td>
                  <td>{parsedRevisionDate}</td>
                  <td className="products-list__logo">
                    <EllipsisVerticalIcon />
                  </td>
                </tr>
              )
            })}
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
