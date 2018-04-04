
export default (state = testState, action) => {
  switch (action.type) {
    case 'USER_CURRENT_MATCH_RECIEVED':
      return (state = action.payload);
    case 'CURRENT_MATCH_ACCECPTED':
      return (state = action.payload);
    case 'CURRENT_MATCH_REJECTED_OR_ENDED':
      return (state = action.payload);
    case 'CURRENT_MATCH_REFRESHED':
      return (state = action.payload);
    default:
      return state;
  }
}

let testState = {
  id: 7,
  matchid: 7,
  user1_id: 4,
  user2_id: {
    age: 19770101,
    bio: "You know the message you're sending out to the world with these sweatpants? You're telling the world, 'I give up. I can't compete in normal society. I'm miserable, so I might as well be comfortable.'",
    firstname: "Jerry",
    gender: 3,
    id: 73,
    lastname: "Seinfeld",
    location:90051,
    username:"BigJerr77",
    photos: [
      {url: "https://ioneglobalgrind.files.wordpress.com/2015/04/14303344627687.jpg?w=1024&quality=80&strip=all&h=1024"},
      {url: "https://thecoggintoboggan.files.wordpress.com/2015/07/seinfeld-cast-jerry-seinfeld-16x9-1.jpg"},
      {url: "https://img.wennermedia.com/920-width/rs-140912-20140627-jerry-x1800-1403899771.jpg"},
      {url: "https://13movies.files.wordpress.com/2013/04/seinfeld-pirate.jpg"},
      {url: "https://img.wennermedia.com/article-leads-horizontal/rs-194522-143480206.jpg"},
      {url: "http://media2.s-nbcnews.com/i/streams/2014/March/140305/2D11890316-today-seinfeld-140305-01.jpg"},
    ],
    tags: [
      "Patron of the Arts",
      "Confident",
      "Homebody",
    ],
  },
}