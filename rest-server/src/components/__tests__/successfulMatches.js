const request = require('supertest');
const app = require('../../config/express/index');

//Successful Matches
describe('fetchSuccessfulMatch', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/successfulMatches/fetchSuccessfulMatch')
      .expect(200)
  })
})

describe('acceptSuccessfulMatch', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/successfulMatches/acceptSuccessfulMatch')
      .expect(200)
  })
})

describe('rejectSuccessfulMatch', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/successfulMatches/rejectSuccessfulMatch')
      .expect(200)
  })
})

describe('ghostSuccessfulMatch', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/successfulMatches/ghostSuccessfulMatch')
      .expect(200)
  })
})