const { getQuestionController } = require('./questions');
const { addUser, login } = require('./auth');

module.exports = {
  getQuestionController,
  addUser,
  login,
};
