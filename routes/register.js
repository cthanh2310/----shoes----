var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController.js')
router.get('/', registerController.register);

module.exports = router;