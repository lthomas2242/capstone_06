var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.post('/user/login', userController.login);
router.post('/user/register', userController.register);

module.exports = router;