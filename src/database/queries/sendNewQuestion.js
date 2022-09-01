const connection = require('../config/connection');

const sendNewQuestion = (question, userId) => connection.query({
  text: 'INSERT INTO questions(content, user_id) VALUES($1, $2) returning *',
  values: [question, userId],
});

module.exports = sendNewQuestion;
