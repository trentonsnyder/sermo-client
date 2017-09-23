const defaultState = {
  messages: [], 
  loading: true,
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_MESSAGES':
      return { ...state, messages: action.data }
    case 'GET_MESSAGES_LOADING':
      return { ...state, loading: true }
    case 'GET_MESSAGES_NOT_LOADING':
      return { ...state, loading: false }
    default:
      return state
  }
}