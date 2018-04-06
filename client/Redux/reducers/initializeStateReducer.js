export default (state = false, action) => {
  switch (action.type) {
    case 'INITIALIZE_STATE_TRUE':
      return (state = true);
    default:
      return state;
  }
}