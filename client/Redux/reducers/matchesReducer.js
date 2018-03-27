
export default (state = [], action) => {
  switch (action.type) {
    case 'MATCHES_DATA_RECIEVED':
      return (state = action.payload);
    case 'ADDITIONAL_MATCHES_TO_RATE_ADDED':
      return (state = action.payload);
    case 'MATCHMAKER_RATING_SUBMITTED':
      return (state = action.payload);
    case 'MATCHMAKER_COMMENTS_RECIEVED':
      return (state = action.payload);
    case 'MATCHMAKER_COMMENT_ADDED':
      return (state = action.payload);
    case 'MATCHMAKER_COMMENT_VOTED':
      return (state = action.payload);
    default:
      return state;
  }
}