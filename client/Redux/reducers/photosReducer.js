

export default (state = [], action) => {
  switch (action.type) {
    case 'USER_PHOTOS_RECIEVED':
      return (state = action.payload);
    case 'USER_PHOTO_ADDED':
      return (state = action.payload);
    case 'USER_PHOTO_DELETED':
      return (state = action.payload);
    case 'USER_PRIMARY_PHOTO_UPDATED':
      return (state = action.payload);
    default:
      return state;
  }
}

