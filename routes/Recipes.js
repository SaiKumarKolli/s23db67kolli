var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Recipes', { title: 'Search Results Recipes' });
});

module.exports = router;