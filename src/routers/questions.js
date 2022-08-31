const router = require('express').Router();
const verifyAccessToken = require('./middlewares/verifyAccessToken');

const { getQuestion, getQuestionController } = require('../controllers');

router.get('/users-question', getQuestion);
router.get('/', verifyAccessToken, getQuestionController);

module.exports = router;
