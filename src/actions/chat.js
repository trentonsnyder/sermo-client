import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

axios.defaults.headers.common['Authorization'] = cookies.get('sermoToken')
axios.defaults.headers.common['Accept'] = 'application/json'

export const getMessages = (client_id) => dispatch => {
  dispatch({type: 'GET_MESSAGES_LOADING'})
  axios.get('/api/v1/messages', { params: { client_id} })
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
  dispatch({type: 'CREATE_MESSAGE_LOADING'})
  axios.post('/api/v1/messages', { message })
  .then(res => {
    dispatch({type: 'CREATE_MESSAGE_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'CREATE_MESSAGE_NOT_LOADING'})
  })
}