import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const getClients = () => dispatch => {
  dispatch({type: 'GET_CLIENTS_LOADING'})
  let instance = axios.create({
    headers: {'Authorization': cookies.get('sermoToken') }
  })
  instance.get('/api/v1/clients.json')
  .then(res => {
    dispatch({type: 'GET_CLIENTS', data: res.data.clients})
    dispatch({type: 'GET_CLIENTS_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_CLIENTS_NOT_LOADING'})
  })
}

export const createClient = payload => dispatch => {
  dispatch({type: 'CREATE_CLIENT_LOADING'})
  let instance = axios.create({
    headers: { 
      'Authorization': cookies.get('sermoToken')
    }
  })
  instance.post('/api/v1/clients.json', {
    client: payload
  })
  .then(res => {
    dispatch({type: 'CREATE_CLIENT', data: res.data.client})
    dispatch({type: 'CREATE_CLIENT_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'CREATE_CLIENT_NOT_LOADING'})
  })
}
