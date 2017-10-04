import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const getTasks = () => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'GET_TASKS_LOADING'})
  instance.get('/api/v1/tasks')
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
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'CREATE_TASK_LOADING'})
  instance.post('/api/v1/tasks', { task: payload })
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
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'UPDATE_TASK_ID', id: payload.id})
  instance.put(`/api/v1/tasks/${payload.id}`, {task: payload})
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
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'DELETE_TASK_ID', id: payload.id})
  instance.delete(`/api/v1/tasks/${payload.id}`, {task: payload})
  .then(res => {
    dispatch({type: 'DELETE_TASK', data: res.data.task})
    dispatch({type: 'REMOVE_DELETE_TASK_ID', id: payload.id})
  })
  .catch(error => {
    console.log('error', error)
    dispatch({type: 'REMOVE_DELETE_TASK_ID', id: payload.id})
  })
}
