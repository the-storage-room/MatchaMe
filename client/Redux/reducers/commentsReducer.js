
export default (state = [], action) => {
  switch (action.type) {
    case 'MATCHMAKER_COMMENTS_RECIEVED':
      return (state = action.payload);
    case 'MATCHMAKER_COMMENT_ADDED':
      return (state = action.payload);
    case 'MATCHMAKER_COMMENT_VOTED':
      return (state = action.payload);
    case 'MATCHMAKER_COMMENTS_CLEARED':
      return (state = []);
    default:
    return state;
  }
};