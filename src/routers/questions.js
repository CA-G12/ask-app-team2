const router = require('express').Router();
const { getQuestion } = require('../controllers');

router.get('/', getQuestion);
module.exports = router;
