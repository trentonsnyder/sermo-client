import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

axios.defaults.headers.common['Authorization'] = cookies.get('sermoToken')
axios.defaults.headers.common['Accept'] = 'application/json'

export const getMessages = (room_id) => dispatch => {
  dispatch({type: 'GET_MESSAGES_LOADING'})
  axios.get('/api/v1/messages', { params: { room_id} })
  .then(res => {
    dispatch({type: 'GET_MESSAGES', data: res.data.messages})
    dispatch({type: 'GET_MESSAGES_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_MESSAGES_NOT_LOADING'})
  })
}