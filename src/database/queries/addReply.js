const connection = require('../config/connection');

const addReply = (content, userId) => connection.query({
  text: 'update questions set reply = $1 where id = $2',
  values: [content, userId],
});

module.exports = addReply;
