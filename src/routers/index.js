const router = require('express').Router();

const questions = require('./questions');
const auth = require('./auth');
const users = require('./users');

router.use('/auth', auth);
router.use('/users', users);
router.use('/questions', questions);

module.exports = router;
