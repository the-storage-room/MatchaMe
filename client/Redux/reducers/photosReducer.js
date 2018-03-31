
const testState = [
    {url: 'https://samepageteam.files.wordpress.com/2014/04/elaine-benes-picture.jpg?w=470', id: 33},
  ]


export default (state = testState, action) => {
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

