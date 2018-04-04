export default (state = 0, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return { ...state, persistedState: action.payload };
    default:
      return state;
  }
};
