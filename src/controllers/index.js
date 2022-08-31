const { getQuestionController, getQuestions } = require('./questions');
const { addUser, login } = require('./auth');
const { getUsersData } = require('./users');
const { notFound, serverError } = require('./errors');



module.exports = {
  getQuestionController,
  getQuestions,
  addUser,
  login,
  notFound,
  serverError,
  getUsersData,
};
