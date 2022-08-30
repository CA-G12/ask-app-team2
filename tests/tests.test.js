const supertest = require('supertest');

const app = require('../src/app');
// const connection = require('../src/database/config/connection');
// const build = require('../src/database/config/build');

/* eslint-disable no-undef */
test('initial', () => {
  expect(3).toBe(3);
});

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

// beforeAll(() => build());
// afterAll(() => connection.end());

// describe('Testing development database', () => {
//   test('Testing the first parameter of the returned object', () => {
//     connection
//       .query('SELECT id, content FROM questions')
//       .then((data) => {
//         console.log(data);
//         return expect(Object.keys(data.rows[0]).length).toBe(2);
//       });
//   });
// });
