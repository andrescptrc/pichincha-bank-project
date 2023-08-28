import { Fragment } from 'react'

import dayjs from 'dayjs'

import { Product } from '@interfaces/products'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import MenuActions from './MenuActions'

const ProductItem = ({ product, currentSelected, setCurrentSelected }: ProductItemProps) => {
  const { id, logo, name, description, date_release, date_revision } = product

  const parsedReleaseDate = dayjs(date_release).format('DD/MM/YYYY')
  const parsedRevisionDate = dayjs(date_revision).format('DD/MM/YYYY')

  const canShow = currentSelected === id

  const handleClick = () => {
    let currentId = ''
    if (!canShow) currentId = id

    setCurrentSelected(currentId)
  }

  return (
    <Fragment>
      <tr className="product-item">
        <td>
          <img src={logo} alt={name} />
        </td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{parsedReleaseDate}</td>
        <td>{parsedRevisionDate}</td>
        <td className="products-list__logo">
          <EllipsisVerticalIcon onClick={handleClick} title="Menu" />
          {canShow && <MenuActions id={id} />}
        </td>
      </tr>
    </Fragment>
  )
}

type ProductItemProps = {
  product: Product
  currentSelected: string
  setCurrentSelected: (id: string) => void
}

export default ProductItem
