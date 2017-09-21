import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

axios.defaults.headers.common['Authorization'] = cookies.get('sermoToken')
axios.defaults.headers.common['Accept'] = 'application/json'

export const getClients = () => dispatch => {
  dispatch({type: 'GET_CLIENTS_LOADING'})
  axios.get('/api/v1/clients')
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
  axios.post('/api/v1/clients', { client: payload })
  .then(res => {
    dispatch({type: 'CREATE_CLIENT', data: res.data.client})
    dispatch({type: 'CREATE_CLIENT_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'CREATE_CLIENT_NOT_LOADING'})
  })
}

export const updateClient = payload => dispatch => {
  dispatch({type: 'UPDATE_CLIENT_ID', id: payload.id})
  axios.put(`/api/v1/clients/${payload.id}`, {client: payload})
  .then(res => {
    dispatch({type: 'UPDATE_CLIENT', data: res.data.client})
    dispatch({type: 'REMOVE_UPDATE_CLIENT_ID', id: res.data.id})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'REMOVE_UPDATE_CLIENT_ID', id: payload.id})
  })
}