export default (state = false, action) => {
  switch (action.type) {
    case 'INITIALIZE_STATE_RECEIVED':
      return (state = false);
    default:
      return state;
  }
}