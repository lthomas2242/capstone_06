const mongoose = require('mongoose');

var item = new mongoose.Schema({ 
    item_title: {type: String, required: false, minlength: 2},
});

var shoppingListSchema = new mongoose.Schema({
    title: [{ type: String }],
    user_id: { type: String },
    items: [item]
});

var ShoppingList = mongoose.model('ShoppingList', shoppingListSchema, 'shoppingLists');

module.exports = {
    ShoppingList
}