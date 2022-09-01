const connection = require('../config/connection');

const addReply = (content, userId) => connection.query({
  text: 'INSERT INTO questions(reply) VALUES($1) where user_id = $2',
  values: [content, userId],
});

module.exports = addReply;
