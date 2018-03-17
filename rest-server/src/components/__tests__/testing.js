const request = require('supertest');
const app = require('../../config/express/index');

test('Testing jest connection', () => {
  expect('true').toEqual('true')
})

request(app) 
  .get('/')