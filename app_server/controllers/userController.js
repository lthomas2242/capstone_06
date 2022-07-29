var mongoose = require('mongoose');
var User = mongoose.model('User');

const getUsers = function (req,res) {
    User.find().exec(function (err, data) {
        if (err) {
          res
          .status(404)
          .json(err);
          return;
        }
        res
        .status(200)
        .json(data);
      });
};
const deleteUser = function (req,res) {
    const userid = req.params.id;
  if (userid) {
    User
    .findByIdAndRemove(userid)
    .exec((err, data) => {
      if (err) {
        res
        .status(404)
        .json(err);
        return;
      }
      res
      .status(204)
      .json(null);
      //alert("The user is deleted");
    });
  } else {
    res
    .status(404)
    .json({ message: "No userid" });
    return;
  }
};
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


const register = function(req, res) {
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
    register,
    getUsers,
    deleteUser
}