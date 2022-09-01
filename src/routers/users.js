const router = require('express').Router();
const { getUsersData, getUserProfile } = require('../controllers');
const verifyAccessToken = require('./middlewares/verifyAccessToken');

router.get('/profile', getUsersData);
router.get('/profile/:username', verifyAccessToken, getUserProfile);

module.exports = router;
