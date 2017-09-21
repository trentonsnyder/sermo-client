import validator from 'validator'
import { isEmpty } from '../utils/functions'

export default (data) => {
  let re = new RegExp('^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$')
  let errors = {}

  if (validator.isEmpty(data.phone_number)) {
    errors.phone_number = 'Phone required'
  }

  if (!validator.isEmpty(data.phone_number) && !re.test(data.phone_number)) {
    errors.phone_number = 'Phone number invalid (eg. 123-123-1234)'
  }
  
  if (validator.isEmpty(data.first_name)) {
    errors.first_name = 'First name is required'
  }

  if (validator.isEmpty(data.last_name)) {
    errors.last_name = 'Last name required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
