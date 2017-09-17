const defaultState = {
  clients: [], 
  loading: false,
  creating: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_CLIENTS':
    return { clients: action.data, loading: false }
    case 'GET_CLIENTS_LOADING':
    return { ...state, loading: true }
    case 'GET_CLIENTS_NOT_LOADING':
    return { ...state, loading: false }
    case 'CREATE_CLIENT':
      return { clients: [...state.clients, action.data], creating: false }
    case 'CREATE_CLIENT_LOADING':
      return { ...state, creating: true }
    case 'CREATE_CLIENT_NOT_LOADING':
      return { ...state, creating: false }
    default:
      return state
  }
}