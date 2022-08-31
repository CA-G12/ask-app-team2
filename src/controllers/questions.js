require('dotenv').config();

const getQuestion = require('../database/queries/getQuestions');

const getQuestionController = (req, res, next) => {
  getQuestion(req.user.id)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

module.exports = { getQuestionController };
