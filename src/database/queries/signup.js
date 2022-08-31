const connection = require('../config/connection');

const addUser = ({
  username, fname, lname, password, avatar, cover, email,
}) => {
  const sql = {
    text: 'INSERT INTO users(username, fname, lname, password, avatar, cover, email) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    values: [username, fname, lname, password, avatar, cover, email],
  };
  return connection.query(sql);
};

module.exports = addUser;
