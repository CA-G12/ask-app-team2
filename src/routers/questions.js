const router = require('express').Router();
const { getQuestions } = require('../controllers');

router.get('/users-question', getQuestions);

module.exports = router;
