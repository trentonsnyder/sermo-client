const defaultState = {
  clients: [], 
  loading: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_CLIENTS':
      return { clients: action.data, loading: false }
    case 'GET_CLIENTS_LOADING':
      return { ...state, loading: true }
    case 'GET_CLIENTS_NOT_LOADING':
      return { ...state, loading: false }
    default:
      return state
  }
}