import { useNavigate } from 'react-router-dom'

import Button from '@atoms/Button'
import InputField from '@atoms/InputField'

const SearchProducts = ({ query, setQuery }: SearchProductsProps) => {
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = e.target.value
    setQuery(value)
  }

  const handleRedirect = () => navigate('/products/create')

  return (
    <div className="search">
      <InputField
        id="productSearch"
        placeholder="Search..."
        autoComplete="off"
        value={query}
        onChange={handleChange}
      />
      <Button className="button-yellow" onClick={handleRedirect}>
        Agregar
      </Button>
    </div>
  )
}

type SearchProductsProps = {
  query: string
  setQuery: (query: string) => void
}

export default SearchProducts
