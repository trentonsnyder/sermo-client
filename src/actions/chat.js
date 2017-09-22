import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

axios.defaults.headers.common['Authorization'] = cookies.get('sermoToken')
axios.defaults.headers.common['Accept'] = 'application/json'

export const getRooms = () => dispatch => {
  dispatch({type: 'GET_ROOMS_LOADING'})
  axios.get('/api/v1/rooms')
  .then(res => {
    dispatch({type: 'GET_ROOMS', data: res.data.rooms})
    dispatch({type: 'GET_ROOMS_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_ROOMS_NOT_LOADING'})
  })
}