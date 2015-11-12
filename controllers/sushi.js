var express    = require('express'),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var Sushi = require('../models/sushi').model;

router.get("/sushi", function(req, res){
  res.send('hello');
})

module.exports = router;