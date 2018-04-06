export default (state = false, action) => {
  switch (action.type) {
    case 'INITIALIZE_STATUS_TRUE':
      return (state = true)
    default:
      return state;
  }
}