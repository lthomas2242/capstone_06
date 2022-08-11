var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const shoppingList = require('../controllers/shoppingListController');
const recipeController = require('../controllers/recipeController');
const nutritionistController = require('../controllers/nutritionistController');

//user
router.post('/user/login', userController.login);
router.post('/user/register', userController.register);
router.post('/nutritionist/addNutritionist', nutritionistController.addNutritionist);
router.post('/list/store', shoppingList.store);
router.get('/list', shoppingList.getList);
router.delete('/list/delete/:id', shoppingList.deleteList);
router.get('/list/single/:id', shoppingList.getListById);
router.put('/list/:id', shoppingList.updateList);

router.get('/user', userController.getUsers);
router.get('/nutritionist', nutritionistController.getNutritionists);
router.put('/user/:id', userController.editUser);
router.delete('/user/:id', userController.deleteUser);
router.get('/user/count/all', userController.getAllUsersCount);
router.get('/user/:id', userController.getSingleUser);

//recipe
router.get('/recipe/byusers/:userid', recipeController.recipeByUser);
router.get('/recipe', recipeController.getAllRecipe);
router.get('/recipe/:id', recipeController.getRecipeById);
router.post('/recipe', recipeController.createRecipe);
router.put('/recipe/:id', recipeController.updateRecipe);
router.delete('/recipe/:id', recipeController.deleteRecipe);
router.post('/recipe/filters', recipeController.getRecipesByFilters);
router.get('/recipe/ids', recipeController.getRecipeIds);
router.get('/recipe/count/all', recipeController.getAllRecipesCount);
router.get('/recipe/count/approved', recipeController.getApprovedRecipesCount);


module.exports = router;