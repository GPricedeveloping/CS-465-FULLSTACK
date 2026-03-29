var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel.js');

router.get('/api/trips', controller.tripsList);
router.get('/', controller.travel);

module.exports = router;