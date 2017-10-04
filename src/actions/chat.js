import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const getMessages = (client_id) => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'GET_MESSAGES_LOADING'})
  instance.get('/api/v1/messages', { params: { client_id} })
  .then(res => {
    dispatch({type: 'GET_MESSAGES', data: res.data.messages})
    dispatch({type: 'GET_MESSAGES_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_MESSAGES_NOT_LOADING'})
  })
}

export const createMessage = (message) => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'CREATE_MESSAGE_LOADING'})
  instance.post('/api/v1/messages', { message })
  .then(res => {
    dispatch({type: 'CREATE_MESSAGE_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'CREATE_MESSAGE_NOT_LOADING'})
  })
}