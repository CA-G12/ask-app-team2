const router = require('express').Router();

const { getQuestionController } = require('../controllers');
const verifyAccessToken = require('./middlewares/verifyAccessToken');

router.get('/', verifyAccessToken, getQuestionController);
module.exports = router;
