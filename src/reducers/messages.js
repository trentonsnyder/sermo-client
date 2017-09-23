const defaultState = {
  messages: [],
  creating: false,
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
    case 'CREATE_MESSAGE':
      return { ...state, messages: [...state.messages, action.data] }
    case 'CREATE_MESSAGE_LOADING':
      return { ...state, creating: true }
    case 'CREATE_MESSAGE_NOT_LOADING':
      return { ...state, creating: false }
    default:
      return state
  }
}