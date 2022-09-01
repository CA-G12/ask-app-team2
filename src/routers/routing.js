const router = require('express').Router();
const { getLogin, getSignup, profileNotSingedIn, getQuestionsPage } = require('../controllers/routing');

router.get('/login', getLogin);
router.get('/signup', getSignup);
router.get('/profile/user', profileNotSingedIn);
router.get('/questions/', getQuestionsPage);

module.exports = router;
