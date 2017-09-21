const defaultState = {
  clients: [],
  loading: true,
  creating: false,
  updating: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_CLIENTS':
      return { ...state, clients: action.data, loading: false }
    case 'GET_CLIENTS_LOADING':
      return { ...state, loading: true }
    case 'GET_CLIENTS_NOT_LOADING':
      return { ...state, loading: false }
    case 'CREATE_CLIENT':
      return { ...state, clients: [...state.clients, action.data] }
    case 'CREATE_CLIENT_LOADING':
      return { ...state, creating: true }
    case 'CREATE_CLIENT_NOT_LOADING':
      return { ...state, creating: false }
    case 'UPDATE_CLIENT':
      return { ...state, clients: state.clients.map(c => c.id !== action.data.id ? c : action.data) }
    case 'UPDATE_CLIENT_ID':
      return { ...state, updating: [...state.updating, action.id] }
    case 'REMOVE_UPDATE_CLIENT_ID':
      return { ...state, updating: state.updating.filter(u => u !== action.id) }
    default:
      return state
  }
}