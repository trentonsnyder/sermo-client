export default (state= {user: {}, loading: true}, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      return { ...state, user: { ...action.data }, loading: false }
    default:
      return state
  }
}