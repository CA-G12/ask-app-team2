const connection = require('../config/connection');

const getQuestions = (id) => {
  const sql = {
    text: 'SELECT users.id, content, cover FROM questions INNER JOIN users ON users.id = questions.user_id WHERE users.id = $1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getQuestions;
