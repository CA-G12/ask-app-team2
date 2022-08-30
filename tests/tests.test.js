require('dotenv').config();
const { hashPassword } = require('../src/controllers/auth');
const build = require('../src/database/config/build');
const connection = require('../src/database/config/connection');

/* eslint-disable no-undef */
test('initial', () => {
  expect(3).toBe(3);
});

beforeEach(() => build());
afterAll(() => connection.end());

it('tests hashed Password', () => hashPassword('AAvdd124', 12)
  .then((data) => {
    expect(data.substring(0, 4)).toEqual('$2b$');
  }));
