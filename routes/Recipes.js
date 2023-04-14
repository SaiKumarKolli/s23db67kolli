var express = require('express');
var router = express.Router();

const Recipes_controlers= require('../controllers/Recipes');
/* GET home page. */
router.get('/', Recipes_controlers.Recipes_view_all_Page);
module.exports = router;