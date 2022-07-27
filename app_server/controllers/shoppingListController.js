    var mongoose = require('mongoose');
    var ShoppingList = mongoose.model('ShoppingList');

    const getList = function(req, res) {
        ShoppingList.find().exec(function(err, data) {
            if(err) {
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

    const store = function(req, res) {
        console.log("api", req);
        ShoppingList.create({
            title: req.body.title,
            user_id: req.body.user_id,
            items: req.body.items    
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


    module.exports = {
        store, getList
    }