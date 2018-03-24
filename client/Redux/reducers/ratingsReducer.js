

const entryState = 
  [
    {
      url: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-simpsons-Dan-Castellaneta-Homer.jpg",
      firstname: "Homer",
      lastname: "Simpson",
      tags: ['Fat'],
      age: 36,
      bio: 'Doh!',
      location: 91344,
      gender: 0,
      id: 28
    },
    {
      url: "https://www.thewrap.com/wp-content/uploads/2018/01/Apu.jpg",
      firstname: "Apu",
      lastname: "Nahasapeemapetilon",
      tags: ['Vegan'],
      age: 32,
      bio: 'Kwik-E-Mart Owner',
      location: 90005,
      gender: 0,
      id: 29
    },
    {
      url: "http://www.slate.com/content/dam/slate/blogs/future_tense/2014/12/08/engineer_alex_smolyanitsky_submitted_fake_papers_to_two_for_profit_scientific/edna.jpg.CROP.promo-mediumlarge.jpg",
      firstname: "Edna",
      lastname: "Krabappel",
      tags: ['Teacher'],
      age: 33,
      bio: 'Fourth Grade Teacher',
      location: 91326,
      gender:1,
      id: 27
    },
  ]






export default (state = entryState, action) => {
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