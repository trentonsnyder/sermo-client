const defaultState = {
  tasks: [], 
  loading: true,
  creating: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_TASKS':
    return { tasks: action.data, loading: false }
    case 'GET_TASKS_LOADING':
    return { ...state, loading: true }
    case 'GET_TASKS_NOT_LOADING':
    return { ...state, loading: false }
    case 'CREATE_TASK':
      return { tasks: [...state.tasks, action.data], creating: false }
    case 'CREATE_TASK_LOADING':
      return { ...state, creating: true }
    case 'CREATE_TASK_NOT_LOADING':
      return { ...state, creating: false }
    default:
      return state
  }
}