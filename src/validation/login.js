import validator from 'validator'
import { isEmpty } from '../utils/functions'

export default (data) => {
  let errors = {}

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid.'
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required.'
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required.'
  }

  if (!validator.isLength(data.password, {min: 6, max: 255})) {
    errors.password = 'Password min length is 6.'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
