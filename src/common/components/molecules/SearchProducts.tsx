import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { useDebounce } from 'react-use'
import Button from '@atoms/Button'
import InputField from '@atoms/InputField'

const SEARCH_DELAY = 300

const SearchProducts = ({ setQuery }: SearchProductsProps) => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const query = e.target.value
    setInputValue(query)
  }

  useDebounce(() => setQuery(inputValue), SEARCH_DELAY, [inputValue])

  const handleRedirect = () => navigate('/products/create')

  return (
    <div className="search">
      <InputField
        id="productSearch"
        placeholder="Search..."
        autoComplete="off"
        value={inputValue}
        onChange={handleChange}
      />
      <Button className="button-yellow" onClick={handleRedirect}>
        Agregar
      </Button>
    </div>
  )
}

type SearchProductsProps = {
  setQuery: (query: string) => void
}

export default SearchProducts
