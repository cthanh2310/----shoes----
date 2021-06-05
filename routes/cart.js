var express = require('express');
var router = express.Router();
var cartController = require('../controllers/cartController.js')
router.get('/', cartController.cart);

module.exports = router;