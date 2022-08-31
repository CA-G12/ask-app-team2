const { getQuestionController } = require('./questions');
const { addUser, login } = require('./auth');
const { notFound, serverError } = require('./errors');

module.exports = {
  getQuestionController,
  addUser,
  login,
  notFound,
  serverError,
};
