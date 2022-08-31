require('dotenv').config();
const supertest = require('supertest');
const app = require('../src/app');
const { hashPassword } = require('../src/controllers/auth');
const build = require('../src/database/config/build');
const connection = require('../src/database/config/connection');

/* eslint-disable no-undef */
test('initial', () => {
  expect(3).toBe(3);
});

beforeAll(() => build());
afterAll(() => connection.end());

it('tests hashed Password', () => hashPassword('AAvdd124', 12)
  .then((data) => {
    expect(data.substring(0, 4)).toEqual('$2b$');
  }));

describe('test sign up route', () => {
  test('tests adding a new user to the database', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'mynameinitials',
        fname: 'fadi',
        lname: 'zaqout',
        email: 'fadyzaqut@gmaul.com',
        password: 'ABab123434',
        avatar: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHBF1S5y6ZJlJlq42dZLkpN2mNMoTzVVLMA&usqp=CAU',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body[0].username).toBe('mynameinitials');
        return done();
      });
  });
});

describe('test login', () => {
  test('test login', (done) => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'mynameinitials',
        password: 'ABab123434',
      })
      .end((err, res) => {
        if (err) return done(err);
        const token = res.headers['set-cookie'].toString();
        const tokenValue = token.split('=')[1].split(';')[0];
        expect(tokenValue).not.toBe(undefined);
        return done();
      });
  });
});
