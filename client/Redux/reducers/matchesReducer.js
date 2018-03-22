
export default (state = [], action) => {
  switch (action.type) {
    case 'MATCHES_DATA_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
}