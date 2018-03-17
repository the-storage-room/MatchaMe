const request = require('supertest');
const app = require('../../config/express/index');

//Photos
describe('fetchAllPhotos/:userId, () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/photos/fetchAllPhotos/:userId')
      .expect(200)
  })
})

describe('fetchPrimaryPhoto/:userId', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/photos/fetchPrimaryPhoto/:userId')
      .expect(200)
  })
})

describe('addPhoto', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/photos/addPhoto')
      .expect(200)
  })
})

describe('deletePhoto/:userId/:photoId', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/photos/deletePhoto/:userId/:photoId')
      .expect(200)
  })
})

describe('updatePrimaryPhoto/:userId', () => {
  it('Should return status code of 200', () => {
    return request(app)
      .get('/api/photos/updatePrimaryPhoto/:userId')
      .expect(200)
  })
})