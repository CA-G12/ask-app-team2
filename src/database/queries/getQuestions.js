const connection = require('../config/connection');

const getQuestions = (id) => connection.query(`select * from questions where user_id = ${id} AND reply is null`);

module.exports = getQuestions;
