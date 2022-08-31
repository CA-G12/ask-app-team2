const connection = require('../config/connection');

const getAUser = (username) => connection.query(`SELECT * FROM USERS WHERE username = '${username}'`);

module.exports = getAUser;
