import Joi from 'joi'

const productFormSchema = Joi.object({
  id: Joi.string().required().min(3).max(10).messages({
    'string.empty': 'El ID es requerido',
    'string.min': 'El ID debe tener minimo 3 caracteres',
    'string.max': 'El ID debe tener maximo 10 caracteres',
    'any.required': 'El ID es requerido',
  }),
  name: Joi.string().required().min(5).max(100).messages({
    'string.empty': 'El Nombre es requerido',
    'string.min': 'El Nombre debe tener minimo 5 caracteres',
    'string.max': 'El Nombre debe tener maximo 100 caracteres',
    'any.required': 'El Nombre es requerido',
  }),
  description: Joi.string().required().min(10).max(200).messages({
    'string.empty': 'La Descripcion es requerida',
    'string.min': 'La Descripcion debe tener minimo 10 caracteres',
    'string.max': 'La Descripcion debe tener maximo 200 caracteres',
    'any.required': 'La Descripcion es requerida',
  }),
  logo: Joi.string().required().messages({
    'string.empty': 'El Logo es requerido',
    'any.required': 'El Logo es requerido',
  }),
  date_release: Joi.string().required().messages({
    'string.empty': 'La fecha de liberacion es requerida',
    'any.required': 'La fecha de liberacion es requerida',
  }),
  date_revision: Joi.string().required().messages({
    'string.empty': 'La fecha de revision es requerida',
    'any.required': 'La fecha de revision es requerida',
  }),
})

export default productFormSchema
