import validator from 'validator'
// import taskStatusOptions from '../utils/constants'
import { isEmpty } from '../utils/functions'

export default (data) => {
  let errors = {}

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name required'
  }

  if (validator.isEmpty(data.client_id)) {
    errors.client_id = 'Client required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
