var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController.js')

router.get('/', adminController.admin);

module.exports = router;