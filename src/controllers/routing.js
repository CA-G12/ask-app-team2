const { join } = require('path');

const getLogin = (req, res) => {
  const path = join(__dirname, '..', '..', 'public', 'pages', 'login', 'index.html');
  res.sendFile(path);
};

const getSignup = (req, res) => {
  const path = join(__dirname, '..', '..', 'public', 'pages', 'login', 'index.html');
  res.sendFile(path);
};

const profileNotSingedIn = (req, res) => {
  const path = join(__dirname, '..', '..', 'public', 'pages', 'profile', 'index.html');
  res.sendFile(path);
};

const getQuestionsPage = (req, res) => {
  const path = join(__dirname, '..', '..', 'public', 'pages', 'questions', 'index.html');
  res.sendFile(path);
};

module.exports = {
  getLogin,
  getSignup,
  profileNotSingedIn,
  getQuestionsPage,
};
