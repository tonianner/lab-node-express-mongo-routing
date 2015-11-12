var express         = require('express'),
    router          = express.Router(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');

var Sushi           = require('../models/sushi'),
    User            = require('../models/user'),
    IngredientModel = require('../models/ingredients').model;

router.get("/sushi", function(req, res){
    Sushi.find({}, function (err, sushis) {
      res.render('sushi', { sushis: sushis });
    });
  })

router.post("/sushi", function(req, res){
  Sushi.create(req.body.sushi, function (err, sushi) {
    if (err){
      res.send("something wrong happened"+ err)
    } else {
      res.redirect('/sushi');
    }
  });
})

router.get("/sushi/:id/favourite", function(req, res){
  Sushi.findByIdAndUpdate(req.params.id, {status: "favourite"}, function(err, sushi){
    res.redirect('/sushi');
  })
});

router.get("/sushi/:id/SUPER", function(req, res){
  Sushi.findByIdAndUpdate(req.params.id, {status: "SUPER favourite"}, function(err, sushi){
    res.redirect('/sushi');
  })
});

module.exports = router;


