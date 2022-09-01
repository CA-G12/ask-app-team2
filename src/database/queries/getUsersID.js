const connection = require('../config/connection');

const getUsersID = (username) => connection.query(`SELECT id FROM USERS WHERE username = '${username}'`);

module.exports = getUsersID;
