import { useState } from 'react'

import { ProductsList, SearchProducts } from '@molecules'

const HomePage = () => {
  const [query, setQuery] = useState('')

  return (
    <div className="container">
      <SearchProducts setQuery={setQuery} />
      <ProductsList query={query} />
    </div>
  )
}

export default HomePage
