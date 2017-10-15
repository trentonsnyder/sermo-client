import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currentUser from './currentUser'
import clients from './clients'
import conversations from './conversations'
import documents from './documents'
import tasks from './tasks'
import messages from './messages'

export default combineReducers({
  currentUser,
  clients,
  conversations,
  documents,
  messages,
  router: routerReducer,
  tasks
})