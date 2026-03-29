var express = require('express');
var router = express.Router();
var controller = require('../controllers/about.js');

router.get('/', controller.about);

module.exports = router;