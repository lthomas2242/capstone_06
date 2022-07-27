var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const shoppingList = require('../controllers/shoppingListController');

router.post('/user/login', userController.login);
router.post('/user/register', userController.register);
router.post('/list/store', shoppingList.store);
router.get('/list', shoppingList.getList);

module.exports = router;