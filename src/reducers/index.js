import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currentUser from './currentUser'
import clients from './clients'
import tasks from './tasks'
import messages from './messages'

export default combineReducers({
  currentUser,
  clients,
  messages,
  router: routerReducer,
  tasks
})