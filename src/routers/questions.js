const router = require('express').Router();
const verifyAccessToken = require('./middlewares/verifyAccessToken');

const { getQuestions, getQuestionController, sendQuestion } = require('../controllers');

router.get('/users-question', getQuestions);
router.post('/send-question', sendQuestion);
router.get('/load-questions', verifyAccessToken, getQuestionController);

module.exports = router;
