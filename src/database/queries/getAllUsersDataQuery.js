const connection = require('../config/connection');

const getAllUsersDataQuery = (username) => 
connection.query(`select users.username, count(questions.id) from users join questions on questions.user_id = users.id where users.username = '${username}' group by users.username`);

module.exports = getAllUsersDataQuery;
