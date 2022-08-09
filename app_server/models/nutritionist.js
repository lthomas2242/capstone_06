const mongoose = require('mongoose');

var nutritionistsSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String},
    address: { type: String, required: true },
    designation: {type: String, required: true},
    city: {type: String, required: true},
    pincode :{type: String, required: true}
});

var User = mongoose.model('Nutritionist', nutritionistsSchema, 'nutritionists');

module.exports = {
    Nutritionist
}