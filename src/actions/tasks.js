import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

axios.defaults.headers.common['Authorization'] = cookies.get('sermoToken')
axios.defaults.headers.common['Accept'] = 'application/json'

export const getTasks = () => dispatch => {
  dispatch({type: 'GET_TASKS_LOADING'})
  axios.get('/api/v1/tasks')
  .then(res => {
    dispatch({type: 'GET_TASKS', data: res.data.tasks})
    dispatch({type: 'GET_TASKS_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_TASKS_NOT_LOADING'})
  })
}

export const createTask = payload => dispatch => {
  dispatch({type: 'CREATE_TASK_LOADING'})
  axios.post('/api/v1/tasks', { task: payload })
  .then(res => {
    dispatch({type: 'CREATE_TASK', data: res.data.task})
    dispatch({type: 'CREATE_TASK_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'CREATE_TASK_NOT_LOADING'})
  })
}

export const updateTask = payload => dispatch => {
  dispatch({type: 'UPDATE_TASK_ID', id: payload.id})
  axios.put(`/api/v1/tasks/${payload.id}`, {task: payload})
  .then(res => {
    dispatch({type: 'UPDATE_TASK', data: res.data.task})
    dispatch({type: 'REMOVE_UPDATE_TASK_ID', id: res.data.task.id})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'REMOVE_UPDATE_TASK_ID', id: payload.id})
  })
}

export const deleteTask = payload => dispatch => {
  dispatch({type: 'DELETE_TASK_ID', id: payload.id})
  axios.delete(`/api/v1/tasks/${payload.id}`, {task: payload})
  .then(res => {
    dispatch({type: 'DELETE_TASK', data: res.data.task})
    dispatch({type: 'REMOVE_DELETE_TASK_ID', id: payload.id})
  })
  .catch(error => {
    console.log('error', error)
    dispatch({type: 'REMOVE_DELETE_TASK_ID', id: payload.id})
  })
}
