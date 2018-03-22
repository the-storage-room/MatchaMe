
export default (state = 0, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_STATUS_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
}