var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')
router.get('/', usersController.users);

module.exports = router;