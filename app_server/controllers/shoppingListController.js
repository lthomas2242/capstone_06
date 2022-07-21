    var mongoose = require('mongoose');
    var ShoppingList = mongoose.model('ShoppingList');


    const storeList = function(req, res) {
        User.create({
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
        storeList
    }