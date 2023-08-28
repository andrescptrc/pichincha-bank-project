import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import dayjs from 'dayjs'

import { Product } from '@interfaces/products'
import { productFormSchema } from '@schemas'
import { Button, InputField } from '@components/atoms'
import { useCreateProduct, useEditProduct } from '@hooks'
import { EMPTY_VALUES } from '@constants/form'
import { useQueryClient } from '@tanstack/react-query'
import { PRODUCT_ID_EXIST } from '@constants/cache-query-keys'
import { ProductsService } from '@services/products'

const productService = new ProductsService()

const ProductForm = ({ product }: ProductFormProps) => {
  const isEdit = Boolean(product)

  const queryClient = useQueryClient()

  const {
    handleSubmit: onSubmit,
    register,
    formState: { errors },
    setError,
    setValue,
    watch,
    reset,
  } = useForm<Product>({
    resolver: joiResolver(productFormSchema),
    defaultValues: isEdit ? product : EMPTY_VALUES,
  })

  const { mutate: mutateCreate, isLoading: isCreating } = useCreateProduct()
  const { mutate: mutateEdit, isLoading: isEditing } = useEditProduct()

  const handleSubmitCreate = async (values: Product) => {
    if (isCreating) return

    const idExist = await queryClient.fetchQuery([PRODUCT_ID_EXIST], () =>
      productService.verificateId(values.id)
    )

    if (idExist) {
      setError('id', { type: 'custom', message: 'El ID ya existe' })
      return
    }

    mutateCreate(values)
    reset()
  }

  const handleSubmitEdit = async (values: Product) => {
    if (isEditing) return
    mutateEdit(values)
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
        <form onSubmit={onSubmit(isEdit ? handleSubmitEdit : handleSubmitCreate)}>
          <div className="product_form__group">
            <InputField
              type="text"
              label="ID"
              labelClasses={isEdit ? 'product_form__disabled' : ''}
              disabled={isEdit}
              errors={errors.id}
              {...register('id')}
            />
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
            {!isEdit && (
              <Button className="margin-r-2" onClick={() => reset()}>
                Reiniciar
              </Button>
            )}

            {isEdit && (
              <Button type="submit" className="button-yellow" disabled={isEditing}>
                {isEditing ? 'Editando...' : 'Editar'}
              </Button>
            )}
            {!isEdit && (
              <Button type="submit" className="button-yellow" disabled={isCreating}>
                {isCreating ? 'Enviando...' : 'Enviar'}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

type ProductFormProps = {
  product?: Product
}

export default ProductForm
