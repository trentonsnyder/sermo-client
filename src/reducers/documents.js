const defaultState = {
  documents: [],
  loading: true,
  creating: false,
  updating: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_DOCUMENTS':
      return { ...state, documents: action.data, loading: false }
    case 'GET_DOCUMENTS_LOADING':
      return { ...state, loading: true }
    case 'GET_DOCUMENTS_NOT_LOADING':
      return { ...state, loading: false }
    case 'CREATE_DOCUMENT':
      return { ...state, documents: [...state.documents, action.data] }
    case 'CREATE_DOCUMENT_LOADING':
      return { ...state, loading: true }
    case 'CREATE_DOCUMENT_NOT_LOADING':
      return { ...state, loading: false }
    default:
      return state
  }
}