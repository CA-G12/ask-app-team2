const getQuestionsQuery = require('../database/queries/getUserQuestions');

const getQuestions = (req, res, next) => {
  const { username } = req.query;
  getQuestionsQuery(username)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => next(err));
};

module.exports = { getQuestions };
