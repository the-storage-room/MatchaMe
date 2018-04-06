export default (state = {totalPoints: 0, rank: "1"}, action) => {
  switch (action.type) {
    case 'USER_POWERRANKING_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
};
