import { useDeleteProduct } from '@hooks'
import { useNavigate } from 'react-router-dom'

const MenuActions = ({ id }: MenuActionsProps) => {
  const navigate = useNavigate()
  const { mutate, isLoading } = useDeleteProduct()

  const handleDelete = () => {
    mutate(id)
  }

  const handleEdit = () => {
    navigate(`/products/edit/${id}`)
  }

  return (
    <div className="menu-actions">
      <div className="menu-actions__container">
        <p onClick={handleEdit}>Editar</p>
        <p onClick={handleDelete}>{isLoading ? 'Eliminando...' : 'Eliminar'}</p>
      </div>
    </div>
  )
}

type MenuActionsProps = {
  id: string
}

export default MenuActions
