import validator from 'validator'
import { isEmpty } from '../utils/functions'

export default (data) => {
  let errors = {}

  if (validator.isEmpty(data.body)) {
    errors.body = 'body required'
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
