    var mongoose = require('mongoose');
    var ShoppingList = mongoose.model('ShoppingList');

    const getList = function(req, res) {
        let userid = req.params.userid;
        ShoppingList.find({ user_id: userid}).exec(function(err, data) {
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

    const deleteList = function(req, res) {
        const id = req.params.id;
        if (id) {
            ShoppingList
                .findByIdAndRemove(id)
                .exec((err, fooddata) => {
                    if (err) {
                        res
                        .status(404)
                        .json(err);
                    return;
                    } 
                    res
                    .status(204)
                    .json(null);
                });
        } else {
            res
            .status(404)
            .json({"message": "No id"});
        }
    };


    const getListById = function(req, res) {
        var id = req.params.id;
    
        if (id) {
            ShoppingList
                .findById(id)
                .exec(function(err, data){
                    if (err){
                        res 
                            .status(404)
                            .json(err)
                    return;
                    }
                    res 
                        .status(200)
                        .json(data)
                }) 
        } else{
            res
                .status(404)
                .json({"message": "No list id"})
        }
    };

    const updateList = function(req, res) {
        console.log('items',  req.body.items)
        if (!req.params.id){
            res 
                .status(404)
                .json({"message":"Not found, listid is required"})
            return
        }
        ShoppingList
            .findById(req.params.id)
            .exec(function(err, data){
                if (!data){
                    res
                        .status(404)
                        .json({"message":"listid not found"})
                return;
                }
                else if (err){
                    res 
                        .status(400)
                        .json(err)
                    return;    
                }
                data.title = req.body.title;
                data.user_id = req.body.user_id;
                data.items = req.body.items;
                
                data.save((err, data) =>{
                    if (err){
                        res
                            .status(404)
                            .json(err)
                    }
                    else{
                        res 
                            .status(200)
                            .json(data)
                    }
                })
    
            })
    }


    module.exports = {
        store, getList, deleteList, getListById, updateList
    }