import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const getClients = () => dispatch => {
  let instance = axios.create({
    headers: {'Authorization': cookies.get('sermoToken') }
  })
  dispatch({type: 'GET_CLIENTS_LOADING'})
  instance.get('/api/v1/clients')
  .then(res => {
    dispatch({type: 'GET_CLIENTS', data: res.data.clients})
    dispatch({type: 'GET_CLIENTS_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_CLIENTS_NOT_LOADING'})
  })
}
