const defaultState = {
  conversations: [],
  loading: true,
  updating: [],
  deleting: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_CONVERSATIONS':
      return { ...state, conversations: action.data, loading: false }
    case 'GET_CONVERSATIONS_LOADING':
      return { ...state, loading: true }
    case 'GET_CONVERSATIONS_NOT_LOADING':
      return { ...state, loading: false }
    case 'CLOSE_CONVERSATION':
      return { ...state, conversations: state.conversations.filter(c => !action.data.id) }
    case 'CLOSE_CONVERSATION_LOADING':
      return { ...state, deleting: true }
    case 'CLOSE_CONVERSATION_NOT_LOADING':
      return { ...state, deleting: false }
    case 'APPEND_TO_CONVERSATION':
      return state
      // if data.conversation exists append the message
      // else make a new convo and fetch conversation?
    default:
      return state
  }
}