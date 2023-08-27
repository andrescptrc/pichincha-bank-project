import { Button, InputField } from '@components/atoms'

const SearchProducts = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <div className="search">
      <InputField id="productSearch" placeholder="Search..." value={''} onChange={handleChange} />
      <Button>Agregar</Button>
    </div>
  )
}

export default SearchProducts
