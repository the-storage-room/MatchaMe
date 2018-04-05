export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_STATUS_RECEIVED':
      return (state = action.payload);
    default:
      return state;
  }
};
