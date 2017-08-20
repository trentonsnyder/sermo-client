import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const auth = payload => dispatch => {
  axios.post('/user_token', {
    auth: {
      email: payload.email,
      password: payload.password
    }
  })
  .then(res => {
    cookies.set('sermoToken', res.data.jwt, { path: '/' })
    dispatch(getUser(res.data.jwt))
  })
  .catch(error => {
    console.log(error)
  })
}

export const getUser = token => dispatch => {
  let instance = axios.create({
    headers: {'Authorization': token}
  })
  instance.get('/api/v1/user')
  .then(res => {
    dispatch({type: 'CURRENT_USER', data: res.data})
  })
  .catch(error => {
    console.log(error)
  })
}
