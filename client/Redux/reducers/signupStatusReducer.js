
export default (state = false, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_STATUS_RECIEVED':
      return (state = action.payload);
    case 'SIGNUP_COMPLETE':
      return (state = true);
    default:
      return state;
  }
}