var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Recipes_controller = require('../controllers/Recipes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Recipes ROUTES ///
// POST request for creating a Recipes.
router.post('/Recipes', Recipes_controller.Recipes_create_post);
// DELETE request to delete Recipes.
router.delete('/Recipes/:id', Recipes_controller.Recipes_delete);
// PUT request to update Recipes.
router.put('/Recipes/:id', Recipes_controller.Recipes_update_put);
// GET request for one Recipes.
router.get('/Recipes/:id', Recipes_controller.Recipes_detail);
// GET request for list of all Recipes items.
router.get('/Recipes', Recipes_controller.Recipes_list);
module.exports = router;