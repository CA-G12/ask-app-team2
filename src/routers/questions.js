const router = require('express').Router();
const verifyAccessToken = require('./middlewares/verifyAccessToken');

const { getQuestions, getQuestionController } = require('../controllers');

router.get('/users-question', getQuestions);
router.get('/', verifyAccessToken, getQuestionController);

module.exports = router;
