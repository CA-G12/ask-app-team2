const router = require('express').Router();

const { notFound, serverError } = require('../controllers');

router.use('/', notFound);
router.use(serverError);

module.exports = router;
