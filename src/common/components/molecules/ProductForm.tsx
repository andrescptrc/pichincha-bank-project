import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import dayjs from 'dayjs'

import { Product } from '@interfaces/products'
import { productFormSchema } from '@schemas'
import { Button, InputField } from '@components/atoms'
import { useCreateProduct } from '@hooks'

const ProductForm = () => {
  const {
    handleSubmit: onSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<Product>({ resolver: joiResolver(productFormSchema) })

  const { mutate, isLoading } = useCreateProduct()

  const handleSubmit = async (values: Product) => {
    if (isLoading) return
    mutate(values)
    reset()
  }

  const dateRelease = watch('date_release')

  useEffect(() => {
    if (!dateRelease) return

    const parsedRevisionDate = dayjs(dateRelease).add(1, 'year').format('YYYY-MM-DD')

    setValue('date_revision', parsedRevisionDate)
  }, [dateRelease])

  return (
    <div className="product_form">
      <div className="product_form__container">
        <h2>Formulario de Registro</h2>
        <form onSubmit={onSubmit(handleSubmit)}>
          <div className="product_form__group">
            <InputField type="text" label="ID" errors={errors.id} {...register('id')} />
            <InputField label="Nombre" errors={errors.name} {...register('name')} />
          </div>
          <div className="product_form__group">
            <InputField
              label="Descripcion"
              errors={errors.description}
              {...register('description')}
            />
            <InputField label="Logo" errors={errors.logo} {...register('logo')} />
          </div>
          <div className="product_form__group">
            <InputField
              type="date"
              label="Fecha Liberacion"
              errors={errors.date_release}
              {...register('date_release')}
            />
            <InputField
              type="date"
              label="Fecha Revision"
              labelClasses="product_form__disabled"
              disabled={true}
              errors={errors.date_revision}
              {...register('date_revision')}
            />
          </div>
          <div className="product_form__group-buttons">
            <Button className="margin-r-2" onClick={() => reset()}>
              Reiniciar
            </Button>
            <Button type="submit" className="button-yellow" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
