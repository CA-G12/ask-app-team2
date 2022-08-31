const router = require('express').Router();
const { getUsersData } = require('../controllers');

router.get('/profile', getUsersData);

module.exports = router;
