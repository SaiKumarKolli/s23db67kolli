var express = require('express');
var router = express.Router();

const Recipes_controllers= require('../controllers/Recipes');
/* GET home page. */
router.get('/', Recipes_controllers.Recipes_view_all_Page);
router.get('/detail', Recipes_controllers.Recipes_view_one_Page);
router.get('/create', Recipes_controllers.Recipes_create_Page);
router.get('/update', Recipes_controllers.Recipes_update_Page);
router.get('/delete', Recipes_controllers.Recipes_delete_Page);
module.exports = router;