import { useNavigate } from 'react-router-dom'

import { Button, InputField } from '@components/atoms'

const SearchProducts = () => {
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  const handleRedirect = () => navigate('/products/create')

  return (
    <div className="search">
      <InputField id="productSearch" placeholder="Search..." value={''} onChange={handleChange} />
      <Button className="button-yellow" onClick={handleRedirect}>
        Agregar
      </Button>
    </div>
  )
}

export default SearchProducts
