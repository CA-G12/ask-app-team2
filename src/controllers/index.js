const { getQuestionController, getQuestions } = require('./questions');
const { addUser, login } = require('./auth');
const { getUsersData } = require('./users');

module.exports = {
  getQuestionController,
  getQuestions,
  addUser,
  login,
  getUsersData,
};
