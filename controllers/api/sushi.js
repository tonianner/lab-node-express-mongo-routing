var express         = require('express'),
    router          = express.Router(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    Sushi           = require('../models/sushi');

// index
router.get("/sushi", function(req, res){
  Sushi.find({}, function (err, sushis) {
    if (err){
      res.send("something wrong happened " + err )
    } else {
      res.send(sushis);
    }
  });
})

// create
router.post("/sushi", function(req, res){
  Sushi.create(req.body.sushi, function (err, sushi) {
    if (err){
      res.send("something wrong happened " + err )
    } else {
      res.redirect('/sushi');
    }
  });
})

// SHOW individual
router.get('/sushi/:id', function(req, res){
  Sushi.findById(req.params.id, function(err, sushi) {
    if (err){
      res.send("something wrong happened " + err )
    } else {
      res.send(sushi);
    }
  });
})

// UPDATE from EDIT page
router.put("/sushi/:id", function(req, res){
  Sushi.update({id: req.params.id }, req.body.sushi, function (err, sushi){
    if (err){
      res.send(err);
    } else {
      res.json({message: "Sushi updated!"});
    }
  })
});

// delete
router.get('/sushi/:id/delete',function(req, res){
  Sushi.findByIdAndRemove(req.params.id, function (err, sushi) {
     if (err) {
       res.send(err);
     } else {
       res.json({message: 'Succesfully deleted'})
     }
  })
});


module.exports = router;
