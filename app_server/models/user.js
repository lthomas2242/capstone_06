const mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    height: { type: Number },
    weight: { type: Number },
    BMI: { type: String }
});

var User = mongoose.model('User', usersSchema, 'users');

module.exports = {
    User
}