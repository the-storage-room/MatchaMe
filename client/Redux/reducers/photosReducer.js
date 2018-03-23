
const testState = [
    {url: 'https://s3-us-west-1.amazonaws.com/ajjjthesis/Bentley+Bentayga++.jpg1521649326452', id: 12334234124},
  ]


export default (state = testState, action) => {
  switch (action.type) {
    case 'USER_PHOTOS_RECIEVED':
      return (state = action.payload);
    case 'USER_PHOTO_ADDED':
      return (state = action.payload);
    case 'USER_PHOTO_DELETED':
      return (state = action.payload);
    default:
      return state;
  }
}