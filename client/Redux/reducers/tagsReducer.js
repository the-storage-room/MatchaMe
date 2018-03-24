
let entryState = 
  {
    user: [], 
    mate: [],
  }




export default (state = entryState, action) => {
  switch (action.type) {
    case 'USER_TAGS_RECIEVED':
      return (state = action.payload);
    case 'USER_TAGS_UPDATED':
      return (state = action.payload);
    default:
      return state;
  }
}

