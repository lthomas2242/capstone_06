var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const shoppingList = require('../controllers/shoppingListController');
const recipeController = require('../controllers/recipeController');

//user
router.post('/user/login', userController.login);
router.post('/user/register', userController.register);
router.post('/list/store', shoppingList.store);
router.get('/list', shoppingList.getList);
router.get('/user', userController.getUsers);
router.delete('/user/:id', userController.deleteUser);

//recipe
router.get('/recipe', recipeController.getAllRecipe);
router.get('/recipe/:id', recipeController.getRecipeById);
router.post('/recipe', recipeController.createRecipe);
router.put('/recipe/:id', recipeController.updateRecipe);
router.delete('/recipe/:id', recipeController.deleteRecipe);
router.post('/recipe/filters', recipeController.getRecipesByFilters);
router.get('/recipe/ids', recipeController.getRecipeIds)

module.exports = router;