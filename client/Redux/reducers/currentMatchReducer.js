
export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_CURRENT_MATCH_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
}