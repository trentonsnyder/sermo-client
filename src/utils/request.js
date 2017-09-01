import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const apiRequest = (attributes) => {
  console.log(attributes)
  let token = cookies.get('token');
  let instance = axios.create({
    baseURL: `/api/v1/`,
    headers: { 'Authorization': token }
  })
  get: () => {
    instance.get(attributes.url, {
      params: { ...attributes.params }
    })
  }
  post: () => {
    instance.post(attributes.url, {
      params: {...attributes.params}
    })
  }
}