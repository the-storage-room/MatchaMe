
export default (state = null, action) => {
  switch (action.type) {
    case 'USER_POWERRANKING_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
}