import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currentUser from './currentUser'
import clients from './clients'

export default combineReducers({
  currentUser,
  clients,
  router: routerReducer,
})