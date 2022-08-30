const router = require('express').Router();

const profile = require('./profile');
// const questions = require('./questions');
// const logout = require('./logout');
const login = require('./login');

router.use(profile);
// router.use(questions);
// router.use(logout);
router.use(login);

module.exports = router;
