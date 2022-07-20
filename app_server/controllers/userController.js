var mongoose = require('mongoose');
var User = mongoose.model('User');


/* user login by email and password */
const login = function(req, res) {
    User.find({
            email: req.body.email,
            password: req.body.password
        })
        .exec((err, usertData) => {
            if (usertData.length === 0) {
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


/*Exporting modules */
module.exports = {
    login
}