var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController.js')

router.get('/', productController.product);

module.exports = router;