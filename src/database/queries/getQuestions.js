const connection = require('../config/connection');

const getQuestions = (id) => connection.query(`select * from questions where user_id = ${id}`);

module.exports = getQuestions;
