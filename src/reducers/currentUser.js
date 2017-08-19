export default (state= {}, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      return {...action.data}
    default:
      return {...action.data}
  }
}