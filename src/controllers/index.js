const { getQuestionController, getQuestions, sendQuestion, sendReply } = require('./questions');
const { addUser, login, logout } = require('./auth');
const { getUsersData, getUserProfile } = require('./users');
const { notFound, serverError } = require('./errors');
const { getLogin, getSignup, getQuestionsPage, profileNotSingedIn } = require('./routing');

module.exports = {
  getQuestionController,
  getQuestions,
  addUser,
  login,
  notFound,
  serverError,
  getUsersData,
  getUserProfile,
  logout,
  getLogin,
  getSignup,
  getQuestionsPage,
  profileNotSingedIn,
  sendQuestion,
  sendReply,
};
