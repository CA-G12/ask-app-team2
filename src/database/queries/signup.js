const connection = require('../config/connection');

const addUser = ({
  username, fname, lname, password, email,
}) => {
  const sql = {
    text: 'INSERT INTO users(username, fname, lname, password, email) values ($1, $2, $3, $4, $5) RETURNING *',
    values: [username, fname, lname, password, email],
  };
  return connection.query(sql);
};

module.exports = addUser;
