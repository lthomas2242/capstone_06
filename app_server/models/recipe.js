const mongoose = require('mongoose');

var ingredientsSchema = new mongoose.Schema({
    ingredient_name: { type: String, required: true },
    quantity: { type: String }
});

var nutritionsSchema = new mongoose.Schema({
    calories: { type: Number },
    fat: { type: Number },
    carbs: { type: Number },
    protein: { type: Number },
    cholesterol: { type: Number },
    sodium: { type: Number }
});

var recipesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    user_id: { type: String },
    meal_type: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    rating: { type: Number },
    preparation_time: { type: String },
    image_url: { type: String },
    approved: { type: Boolean },
    ingredients: [ingredientsSchema],
    directions: [{ type: String }],
    nutritions: nutritionsSchema

});

var Recipe = mongoose.model('Recipe', recipesSchema, 'recipes');

module.exports = {
    Recipe
}