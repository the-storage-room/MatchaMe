
export default (state = fakeData, action) => {
  switch (action.type) {
    case 'MATCHES_DATA_RECIEVED':
      return (state = action.payload);
    case 'ADDITIONAL_MATCHES_TO_RATE_ADDED':
      return (state = action.payload);
    case 'MATCHMAKER_RATING_SUBMITTED':
      return (state = action.payload);
    default:
      return state;
  }
}

const fakeData = [{
  id: 9,
  user1:{
    age: 19780101,
    bio: "Jerry, just remember, it’s not a lie if you believe it.",
    firstname: "George",
    gender: 3,
    id: 73,
    lastname: "Costanza",
    location:90051,
    username:"GeorgieC",
    photos: [
      "https://i.ytimg.com/vi/RAVsU1Y_OMs/maxresdefault.jpg",
      "https://parade.com/wp-content/uploads/2017/12/Seinfeld-George-Costanza-FTR.jpg",
      "http://costanzastyle.weebly.com/uploads/2/6/6/0/26604544/5600718_orig.png",
      "https://fashionista.com/.image/t_share/MTE5NTU2MzIyNTU2MDg1Nzcx/george-fur-hatjpg.jpg"
    ],
    tags: [
      "Awkward Turtle",
      "Ambitious",
      "Nerdy",
    ],
  },
  user2:{
    age: 19770101,
    bio: "You know the message you're sending out to the world with these sweatpants? You're telling the world, 'I give up. I can't compete in normal society. I'm miserable, so I might as well be comfortable.'",
    firstname: "Jerry",
    gender: 3,
    id: 73,
    lastname: "Seinfeld",
    location:90051,
    username:"BigJerr77",
    photos: [
      "https://ioneglobalgrind.files.wordpress.com/2015/04/14303344627687.jpg?w=1024&quality=80&strip=all&h=1024",
      "https://thecoggintoboggan.files.wordpress.com/2015/07/seinfeld-cast-jerry-seinfeld-16x9-1.jpg",
      "https://img.wennermedia.com/920-width/rs-140912-20140627-jerry-x1800-1403899771.jpg",
      "https://13movies.files.wordpress.com/2013/04/seinfeld-pirate.jpg",
      "https://img.wennermedia.com/article-leads-horizontal/rs-194522-143480206.jpg",
      "http://media2.s-nbcnews.com/i/streams/2014/March/140305/2D11890316-today-seinfeld-140305-01.jpg",
    ],
    tags: [
      "Patron of the Arts",
      "Confident",
      "Homebody",
    ],
  },
  comments: []
}]