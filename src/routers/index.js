const router = require('express').Router();

const questions = require('./questions');
const auth = require('./auth');
// const users = require('./users');
const errors = require('./errors');

router.use('/auth', auth);
// router.use('/users', users);
router.use('/questions', questions);
router.use(errors);

module.exports = router;
