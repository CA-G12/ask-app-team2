// const connection = require('../src/database/config/connection');
// const build = require('../src/database/config/build');

/* eslint-disable no-undef */
test('initial', () => {
  expect(3).toBe(3);
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
