
export default (state = [], action) => {
  switch (action.type) {
    case 'RATINGS_DATA_RECIEVED':
      return (state = action.payload);
    case 'ADDITIONAL_USERS_TO_RATE_ADDED':
      return (state = action.payload);
    case 'RATING_SUBMITTED':
      return (state = action.payload);
    default:
      return state;
  }
}