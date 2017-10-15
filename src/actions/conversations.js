import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const getConversations = () => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'GET_CONVERSATIONS_LOADING'})
  instance.get('/api/v1/conversations')
  .then(res => {
    dispatch({type: 'GET_CONVERSATIONS', data: res.data.conversations})
    dispatch({type: 'GET_CONVERSATIONS_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_CONVERSATIONS_NOT_LOADING'})
  })
}

export const getMyConversations = () => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'GET_CONVERSATIONS_LOADING'})
  instance.get('/api/v1/conversations/my_conversations')
  .then(res => {
    dispatch({type: 'GET_CONVERSATIONS', data: res.data.conversations})
    dispatch({type: 'GET_CONVERSATIONS_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_CONVERSATIONS_NOT_LOADING'})
  })
}

export const closeConversation = (id) => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'CLOSE_CONVERSATION_LOADING'})
  instance.put(`/api/v1/conversations/${id}/close`)
  .then(res => {
    dispatch({type: 'CLOSE_CONVERSATION', data: res.data.conversation})
    dispatch({type: 'CLOSE_CONVERSATION_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_CONVERSATIONS_NOT_LOADING'})
  })
}
