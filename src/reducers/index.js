import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currentUser from './currentUser'
import clients from './clients'
import tasks from './tasks'

export default combineReducers({
  currentUser,
  clients,
  router: routerReducer,
  tasks
})