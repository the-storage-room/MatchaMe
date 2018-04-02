
export default (state = [], action) => {
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

// let testState = {
//   age: 19880101,
//   bio: "Jerry, just remember, it’s not a lie if you believe it.",
//   firstname: "George",
//   gender: 3,
//   id: 73,
//   lastname: "Costanza",
//   location:90051,
//   photos:[
//   "https://i.ytimg.com/vi/RAVsU1Y_OMs/maxresdefault.jpg",
//   "https://parade.com/wp-content/uploads/2017/12/Seinfeld-George-Costanza-FTR.jpg",
//   "http://costanzastyle.weebly.com/uploads/2/6/6/0/26604544/5600718_orig.png",
//   "https://fashionista.com/.image/t_share/MTE5NTU2MzIyNTU2MDg1Nzcx/george-fur-hatjpg.jpg"
// ],
//   tags: [
//     "Awkward Turtle",
//     "Ambitious",
//     "Nerdy",
//   ],
// }