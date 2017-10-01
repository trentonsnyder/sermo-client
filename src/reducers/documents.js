const defaultState = {
  documents: [],
  loading: true,
  creating: false,
  deleting: false,
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
      return { ...state, creating: true }
    case 'CREATE_DOCUMENT_NOT_LOADING':
      return { ...state, creating: false }
    case 'DELETE_DOCUMENT':
      return { ...state, documents: state.documents.filter(d => !action.data.includes(d.id) ) }
    case 'DELETE_DOCUMENT_LOADING':
      return { ...state, deleting: true }
    case 'DELETE_DOCUMENT_NOT_LOADING':
      return { ...state, deleting: false }
    default:
      return state
  }
}