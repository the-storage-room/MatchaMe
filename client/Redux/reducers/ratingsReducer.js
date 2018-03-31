
export default (state = [testState], action) => {
  switch (action.type) {
    case 'RATINGS_DATA_RECIEVED':
      return (state = action.payload);
    case 'ADDITIONAL_USERS_TO_RATE_ADDED':
      return (state = action.payload);
    case 'RATING_SUBMITTED':
      return (state = action.payload);
    default:
      return state;
  }
}

let testState = {
  age: 19880101,
  bio: "Jerry, just remember, it’s not a lie if you believe it.",
  firstname: "George",
  gender: 3,
  id: 73,
  lastname: "Costanza",
  location:90051,
  photos: [
    "http://www.themost10.com/wp-content/uploads/2012/05/George-Costanza-8.jpg",
    "http://www.themost10.com/wp-content/uploads/2012/05/George-Costanza-7.jpg",
    "http://www.themost10.com/wp-content/uploads/2012/05/George-Costanza-6.jpg",
    "http://www.themost10.com/wp-content/uploads/2012/05/George-Costanza-4.jpg",
    "http://www.themost10.com/wp-content/uploads/2012/05/George-Costanza-3.jpg",
    "http://www.themost10.com/wp-content/uploads/2012/05/George-Costanza-2.jpg",
  ],
  tags: [
    "Awkward Turtle",
    "Ambitious",
    "Nerdy",
  ],
}