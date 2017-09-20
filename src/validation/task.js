import validator from 'validator'
// import taskStatusOptions from '../utils/constants'
import { isEmpty } from '../utils/functions'

export default (data) => {
  let errors = {}

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
