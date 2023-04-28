var express = require('express');
var router = express.Router();

//new code for Asn13
//A little function to check if we have an authorized user and continue on or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

const Recipes_controllers= require('../controllers/Recipes');
/* GET home page. */
router.get('/', Recipes_controllers.Recipes_view_all_Page);
router.get('/detail',secured, Recipes_controllers.Recipes_view_one_Page);
router.get('/create',secured, Recipes_controllers.Recipes_create_Page);
router.get('/update',secured, Recipes_controllers.Recipes_update_Page);
router.get('/delete',secured, Recipes_controllers.Recipes_delete_Page);
module.exports = router;
