var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/categoryController.js')
router.get('/', categoryController.category);

module.exports = router;