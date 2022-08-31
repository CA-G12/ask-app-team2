require('dotenv').config();

const getQuestion = require('../database/queries/getQuestions');
const getQuestionsQuery = require('../database/queries/getUserQuestions');

const getQuestionController = (req, res, next) => {
  getQuestion(req.user.id)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

const getQuestions = (req, res, next) => {
  const { username } = req.query;
  getQuestionsQuery(username)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => next(err));
};

module.exports = { getQuestionController, getQuestions };
