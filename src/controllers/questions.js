require('dotenv').config();

const getQuestion = require('../database/queries/getQuestions');
const getQuestionsQuery = require('../database/queries/getUserQuestions');
const getUsersID = require('../database/queries/getUsersID');
const sendNewQuestion = require('../database/queries/sendNewQuestion');

const getQuestionController = (req, res, next) => {
  const username = req.query.q;
  getUsersID(username).then(
    (data) => {
      getQuestion(data.rows[0].id)
        .then((newData) => res.status(200).json(newData.rows))
        .catch((err) => next(err));
    },
  ).catch((err) => next(err));
};

const getQuestions = (req, res, next) => {
  const { username } = req.query;
  getQuestionsQuery(username)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => next(err));
};

const sendQuestion = (req, res, next) => {
  const { question, username } = req.body;
  getUsersID(username).then((data) => {
    const { id } = data.rows[0];
    sendNewQuestion(question, id)
      .then(() => res.status(201).json('Added!'))
      .catch((err) => next(err));
  });
};

module.exports = { getQuestionController, getQuestions, sendQuestion };
