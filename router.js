const router = require('express').Router();

router.use('/houses', require('./controllers/house'));
router.use('/students', require('./controllers/student'));
router.get('/', require('./controllers/home'));

module.exports = router;
