const defaultState = {
  tasks: [], 
  loading: true,
  creating: false,
  updating: [],
  deleting: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_TASKS':
      return { ...state, tasks: action.data, loading: false }
    case 'GET_TASKS_LOADING':
      return { ...state, loading: true }
    case 'GET_TASKS_NOT_LOADING':
      return { ...state, loading: false }
    case 'CREATE_TASK':
      return { ...state, tasks: [...state.tasks, action.data]}
    case 'CREATE_TASK_LOADING':
      return { ...state, creating: true }
    case 'CREATE_TASK_NOT_LOADING':
      return { ...state, creating: false }
    case 'UPDATE_TASK':
      return { ...state, tasks: state.tasks.map(t => t.id !== action.data.id ? t : action.data) }
    case 'UPDATE_TASK_ID':
      return { ...state, updating: [...state.updating, action.id] }
    case 'REMOVE_UPDATE_TASK_ID':
      return { ...state, updating: state.updating.filter(u => u !== action.id) }
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.data) }
    case 'DELETE_TASK_ID':
      return { ...state, deleting: [ ...state.deleting, action.id] }
    case 'REMOVE_DELETE_TASK_ID':
      return { ...state, deleting: state.deleting.filter(u => u !== action.id) }
    default:
      return state
  }
}