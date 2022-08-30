const router = require('express').Router();

const { getLogin } = require('../controllers');

router.get('/login', getLogin);

module.exports = router;
