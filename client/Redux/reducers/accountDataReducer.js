
export default (state = {id: 1, username: 'jack'}, action) => {
  switch (action.type) {
    case 'USER_ACCOUNT_DATA_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
}