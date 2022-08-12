var mongoose = require('mongoose');
require("../models/nutritionist");
var Nutritionist = mongoose.model('Nutritionist');

const getNutritionists = function(req, res) {
    Nutritionist.find().exec(function(err, data) {
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
const getSingleNutritionist = function (req,res) {
    Nutritionist.findById(req.params.id).exec((err, data)=> {
        console.log(req.params.id);
        if (!data) {
          return res
          .status(404)
          .json( {
            "message": "nutritionistid not found"
          });
        } else if (err) {
          return res
          .status(404)
          .json(err);
        }
        res
        .status(200)
        .json(data);
      });
};
const editNutritionist = function (req,res) {
    if (!req.params.id) {
        res
        .status(404)
        .json({ 
            "message": "Not found, nutritionistid is required" 
        });
        return;
      }
      Nutritionist.findById(req.params.id)
      .exec((err, data) => {
        if (!data) {
          res
          .status(404)
          .json({
            message: "nutritionistid not found",
          });
          return;
        } else if (err) {
          res
          .status(400)
          .json(err);
          return;
        }
        data.id= req.body._id,
        data.first_name= req.body.first_name,
        data.last_name= req.body.last_name,
        data.email= req.body.email,
        data.address= req.body.address,
        data.designation= req.body.designation,
        data.city= req.body.city,
        data.pincode= req.body.pincode,
        data.save((err, data) => {
          if (err) {
            res
            .status(400)
            .json(err);
            console.log(err);
          } else {
            res
            .status(200)
            .json(data);
          }
        });
      });
};
const deleteNutritionist = function(req, res) {
    const nutritionistid = req.params.id;
    if (nutritionistid) {
        Nutritionist
            .findByIdAndRemove(nutritionistid)
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

const addNutritionist = function(req, res) {
    Nutritionist.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address: req.body.address,
        designation: req.body.designation,
        city: req.body.city,
        pincode: req.body.pincode
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
    // login,
    // register,
     getNutritionists,
     deleteNutritionist,
     getSingleNutritionist,
     editNutritionist,
    // editUser,
    // getSingleUser
    addNutritionist
}