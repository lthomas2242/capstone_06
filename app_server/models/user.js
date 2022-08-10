const mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    user_role: { type: String },
    height: { type: String },
    weight: { type: Number },
    gender: { type: String },
    BMI: { type: String }
});

var User = mongoose.model('User', usersSchema, 'users');

module.exports = {
    User
}