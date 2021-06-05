var express = require('express');
var router = express.Router();
var payController = require('../../src/controllers/payController.js')
router.get('/', payController.pay);

module.exports = router;