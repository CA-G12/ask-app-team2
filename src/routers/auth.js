const router = require('express').Router();

const { addUser,  login } = require('../controllers');
const {  } = require('../controllers');

router.post('/signup', addUser);
router.post('/login',  login);

module.exports = router;
