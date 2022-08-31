const { getQuestions } = require('./questions');
const { addUser } = require('./auth');
const { getUsersData } = require('./users');

module.exports = {
  getQuestions,
  addUser,
  getUsersData,
};
