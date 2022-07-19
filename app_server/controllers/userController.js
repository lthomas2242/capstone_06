var mongoose = require('mongoose');
var User = mongoose.model('User');


/* user login by email and password */
const login = function(req, res) {
    User.find({
            email: req.body.email,
            password: req.body.password
        })
        .exec((err, usertData) => {
            if (!usertData) {
                res
                    .status(404)
                    .json({
                        "message": "User not found",
                    });
                return;
            } else if (err) {
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
                .status(200)
                .json(usertData);
        });
};

const register = function(req, res) {
    console.log("sssss");
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        user_role: "user",
        height: req.body.height,
        weight: req.body.weight,
        BMI: "",

    }, (err, data) => {
        console.log("Err", err);
        console.log("data", data);
        if (err) {
            res
            .status(400)
            .json(err);
        } else {
            res
            .status(201)
            .json(data);
        }
    });
};


/*Exporting modules */
module.exports = {
    login,
    register
}