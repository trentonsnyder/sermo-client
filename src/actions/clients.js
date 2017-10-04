import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const getClients = () => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
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

export const createClient = payload => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'CREATE_CLIENT_LOADING'})
  instance.post('/api/v1/clients', { client: payload })
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
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'UPDATE_CLIENT_ID', id: payload.id})
  instance.put(`/api/v1/clients/${payload.id}`, {client: payload})
  .then(res => {
    dispatch({type: 'UPDATE_CLIENT', data: res.data.client})
    dispatch({type: 'REMOVE_UPDATE_CLIENT_ID', id: res.data.id})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'REMOVE_UPDATE_CLIENT_ID', id: payload.id})
  })
}