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

describe('Testing "/api/v1/signup" route', () => {
  it('test the returned object', (done) => {
    supertest(app)
      .post('api/v1/signup')
      .end((err, res) => {
        if (err) done(err);
        expect(typeof res.body).toBe('object');
        done();
      });
  });
  it('test the returned object', (done) => {
    supertest(app)
      .post('api/v1/signup')
      .end((err, res) => {
        if (err) done(err);
        expect(res.type).toBe('text/html');
        done();
      });
  });
});
