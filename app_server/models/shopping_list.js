const mongoose = require('mongoose');

var shoppingListSchema = new mongoose.Schema({
    item: [{ type: String }],
    user_id: { type: String }
});

var ShoppingList = mongoose.model('ShoppingList', shoppingListSchema, 'shoppingLists');

module.exports = {
    ShoppingList
}