<<<<<<< HEAD

export default (state = {id: 4, username: 'jack'}, action) => {
=======
export default (state = {}, action) => {
>>>>>>> [Auth] Sure take you to initialized page
  switch (action.type) {
    case 'USER_ACCOUNT_DATA_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
};
