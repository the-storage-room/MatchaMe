const request = require('supertest');
const app = require('../../config/express/index');

//user tests
describe('fetchAllUsers', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/users/fetchAllUsers')
      .expect(200)
      .then(res => {
        expect(typeof res).toBe('string')
      })
  })
})

describe('fetchSingleUser', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/users/fetchSingleUser')
      .expect(200)
  })
})

describe('fetchMultipleUsers', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/users/fetchMultipleUsers/:userId')
      .expect(200)
  })
})

describe('updateUserRating', () => {
  it('Should be able to update ratings', () => {
    return Promise.all([
      request(app)
        .put('/api/users/updateUserRating')
        .send({rating: '10'})
        .expect(200),
      request(app)
        .get('/api/users/updateUserRating')
        .then(res => {
          expect(typeof res).toBe('number')
        })
    ])
  })
})

describe('updateUserInfo', () => {
  it('Should be able to update a info', () => {
    return request(app)
      .get('/api/users/updateUserInfo')
      .expect(200) 
      .then(res => {
        expect(typeof res).toBe('string')
      })
  })
})
