const supertest = require('supertest');

const app = require('../src/app');
const build = require('../src/database/config/build');
const connection = require('../src/database/config/connection');

/* eslint-disable no-undef */
test('initial', () => {
  expect(3).toBe(3);
});

beforeEach(() => build());
afterAll(() => connection.end());

it('tests the returned object', (done) => {
  supertest(app)
    .post('/api/v1/auth/signup')
    .send({
      username: 'mmmmm',
      fname: 'csdcsdds',
      lname: 'zaqout',
      password: 'AAvdd124',
      email: 'fada@sld.com',
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toBe('1 rows were added successfully!!!');
      return done();
    });
});
