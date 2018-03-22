
export default (state = [], action) => {
  switch (action.type) {
    case 'RATINGS_DATA_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
}