var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

/* Returns list of recipes */
const getAllRecipe = function(req, res) {
    Recipe.find({}).exec(function(err, data) {
        if (err) {
            res.status(404).json(err);
            return;
        }
        res.status(200).json(data);
    });
};

/*Return recipe based on id. */
const getRecipeById = function(req, res) {
    if (req.params && req.params.id) {
        Recipe.findById(req.params.id)
            .exec((err, data) => {
                if (!data) {
                    res.status(404)
                        .json({
                            "message": "Recipe_id not found",
                        });
                    return;
                } else if (err) {
                    res.status(404).json(err);
                    return;
                }
                res.status(200).json(data);
            });

    } else {
        res.status(404)
            .json({
                "message": "No Recipe_id in request"
            });
    }
};

// add new recipe
const createRecipe = function(req, res) {
    let isApproved = true;
    if (req.body.user_id && req.body.user_id != undefined) {
        isApproved = false;
    }
    Recipe.create({
        title: req.body.title,
        meal_type: req.body.meal_type,
        category: req.body.category,
        description: req.body.description,
        rating: req.body.rating,
        user_id: req.body.user_id,
        preparation_time: req.body.preparation_time,
        image_url: req.body.image_url,
        approved: isApproved,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        nutritions: req.body.nutritions
    }, (err, data) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(data);
        }
    });
};


/*Update Recipe based on id */
const updateRecipe = function(req, res) {
    if (!req.params.id) {
        res.status(404)
            .json({
                "message": "Not found, Recipe_id is required"
            });
        return;
    }
    Recipe.findById(req.params.id)
        .exec((err, data) => {
            if (!data) {
                res.status(404)
                    .json({
                        "message": "Recipe_id not found"
                    });
                return;
            } else if (err) {
                res.status(400).json(err);
                return;
            }

            data.title = req.body.title,
                data.meal_type = req.body.meal_type,
                data.category = req.body.category,
                data.description = req.body.description,
                data.user_id = req.body.user_id,
                data.rating = req.body.rating,
                data.preparation_time = req.body.preparation_time,
                data.image_url = req.body.image_url,
                data.approved = req.body.approved,
                data.ingredients = req.body.ingredients,
                data.directions = req.body.directions,
                data.nutritions = req.body.nutritions

            data.save((err, recipeData) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.status(200).json(recipeData);
                }
            });

        });
};

/*Delete Recipe based on id */
const deleteRecipe = function(req, res) {
    const id = req.params.id;
    if (id) {
        Recipe.findByIdAndRemove(id)
            .exec((err, data) => {
                if (err) {
                    res.status(404).json(err);
                    return;
                }
                res.status(204).json(null);
            });
    } else {
        res.status(404)
            .json({ "message": "No recipe_id" });
    }
};

/* Returns list of Recipes by filters*/
const getRecipesByFilters = function(req, res) {
    title = req.body.title;
    Recipe.find({
            title: { $regex: title }
        })
        .exec(function(err, data) {
            if (err) {
                res.status(404).json(err);
                return;
            }
            res.status(200).json(data);
        });
};

/* Returns random Recipe*/
const getRecipeIds = function(req, res) {
    Recipe.find({}, { projection: { _id: 1 } }).toArray((err, data) => {
        if (err) {
            res.status(404).json(err);
            return;
        }
        res.status(200).json(data);
    });
};

/* Count of all Recipes*/
const getAllRecipesCount = function(req, res) {
    Recipe.count({}).exec(function(err, data) {
        if (err) {
            res.status(404).json(err);
            return;
        }
        res.status(200).json(data);
    });
};


/* Count of approved Recipes*/
const getApprovedRecipesCount = function(req, res) {
    Recipe.count({ approved: true }).exec(function(err, data) {
        if (err) {
            res.status(404).json(err);
            return;
        }
        res.status(200).json(data);
    });
};

const recipeByUser = function(req, res) {

        let userid = req.params.userid;

        if (userid) {
            Recipe
                .find({ user_id: userid })
                .exec(function(err, data) {
                    console.log(data);
                    if (err) {
                        res
                            .status(404)
                            .json(err)
                        return;
                    }
                    res
                        .status(200)
                        .json(data)
                })
        } else {
            res
                .status(404)
                .json({ "message": "User id" })
        }
    }
    /* Count of approved Recipes*/
const getAllApprovedRecipes = function(req, res) {
    Recipe.find({ approved: true }).exec(function(err, data) {
        console.log(err, data)
        if (err) {
            res.status(404).json(err);
            return;
        }
        res.status(200).json(data);
    });
};


/*Exporting modules */
module.exports = {
    getAllRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipesByFilters,
    getRecipeIds,
    getAllRecipesCount,
    getApprovedRecipesCount,
    recipeByUser,
    getAllApprovedRecipes
}