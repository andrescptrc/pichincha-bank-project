import { Button, InputField } from '@components/atoms'
import { useForm } from 'react-hook-form'

const ProductForm = () => {
  const { handleSubmit: onSubmit } = useForm()

  return (
    <div className="product_form">
      <div className="product_form__container">
        <h2>Formulario de Registro</h2>
        <form>
          <div className="product_form__group">
            <InputField label="ID" />
            <InputField label="Nombre" />
          </div>
          <div className="product_form__group">
            <InputField label="Descripcion" />
            <InputField label="Logo" />
          </div>
          <div className="product_form__group">
            <InputField label="Fecha Liberacion" />
            <InputField label="Fecha Revision" />
          </div>
          <div className="product_form__group-buttons">
            <Button className="margin-r-2">Reiniciar</Button>
            <Button type="submit" className="button-yellow">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
