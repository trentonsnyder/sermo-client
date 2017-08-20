import Cookies from 'react-cookie'

let cookie = new Cookies()

export const apiRequest = (attributes) => {
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