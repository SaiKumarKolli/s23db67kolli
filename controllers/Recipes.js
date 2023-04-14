var Recipes = require('../models/Recipes');
// List of all Recipes
exports.Recipes_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Recipes list');
};
// for a specific Recipes.
exports.Recipes_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Recipes detail: ' + req.params.id);
};
// Handle Recipes create on POST.
exports.Recipes_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Recipes create POST');
};
// Handle Recipes delete form on DELETE.
exports.Recipes_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Recipes delete DELETE ' + req.params.id);
};
// Handle Recipes update form on PUT.
exports.Recipes_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Recipes update PUT' + req.params.id);
};

// List of all Costumes
exports.Recipes_list = async function(req, res) {
    try{
    theRecipes = await Recipes.find();
    res.send(theRecipes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.Recipes_view_all_Page = async function(req, res) {
    try{
    theRecipes = await Recipes.find();
    res.render('Recipes', { title: 'Recipes Search Results', results: theRecipes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle Costume create on POST.
exports.Recipes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Recipes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.recipes_name = req.body.recipes_name;
    document.recipes_qunatity = req.body.recipes_qunatity;
    document.recipes_price = req.body.recipes_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // for a specific Costume.
exports.Recipes_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Recipes.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

    exports.Recipes_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await Recipes.findById( req.params.id)
        // Do updates of properties
        if(req.body.recipes_name)
        toUpdate.recipes_name = req.body.recipes_name;
        if(req.body.recipes_qunatity) toUpdate.recipes_qunatity = req.body.recipes_qunatity;
        if(req.body.recipes_price) toUpdate.recipes_price = req.body.recipes_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
        }
        };
        

        