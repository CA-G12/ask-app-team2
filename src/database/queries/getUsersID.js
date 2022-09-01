const connection = require('../config/connection');

const getUsersID = (username) => {
  const sql = {
    text: 'SELECT id FROM users WHERE username = $1',
    values: [username],
  };
  return connection.query(sql);
};

module.exports = getUsersID;
