
export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_CURRENT_MATCH_RECIEVED':
      return (state = action.payload);
    case 'CURRENT_MATCH_ACCECPTED':
      return (state = action.payload);
    case 'CURRENT_MATCH_REJECTED_OR_ENDED':
      return (state = action.payload);
    case 'CURRENT_MATCH_REFRESHED':
      return (state = action.payload);
    default:
      return state;
  }
}