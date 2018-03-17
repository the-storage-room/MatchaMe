const request = require('supertest');
const app = require('../../config/express/index');

//follows
describe('fetchStarredMatches', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/follows/fetchStarredMatches')
      .expect(200)
  })
})

describe('fetchUnstarredMatches', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/follows/fetchUnstarredMatches')
      .expect(200)
  })
})

describe('starSingleMatch', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/follows/starSingleMatch')
      .expect(200)
  })
})

describe('unstarSingleMatch', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/follows/unstarSingleMatch')
      .expect(200)
  })
})