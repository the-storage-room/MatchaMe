const request = require('supertest');
const app = require('../../config/express/index');

//Matchmaking
describe('fetchPendingMatchmaking', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/matchmaking/fetchPendingMatchmaking')
      .expect(200)
  })
})

describe('updateMatchmaking', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/matchmaking/updateMatchmaking')
      .expect(200)
  })
})
