var express         = require('express'),
    router          = express.Router(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    Sushi           = require('../models/sushi');

// index
router.get("/sushi", function(req, res){
  Sushi.find({}, function (err, sushis) {
    if (err){
      res.render('error', {err: err});
    } else {
      res.render('sushi', { sushis: sushis });
    }
  });
})

// Sushi.find({}).sort({status: -1}).exec(function(){})

// create
router.post("/sushi", function(req, res){
  Sushi.create(req.body.sushi, function (err, sushi) {
    if (err){
      res.render('error', {err: err});
      // console.log(err.errors.comment)
    } else {
      req.flash('success', 'Comment Created');
      res.redirect('/sushi');
    }
  });
})

// SHOW individual
router.get('/sushi/:id', function(req, res){
  Sushi.findById(req.params.id, function(err, sushi) {
    if (err){
      res.render('error', {err: err});
    } else {
      res.render('./sushi/show', {sushi:sushi});
    }
  })
});

// Got to EDIT page individual
router.get('/sushi/:id/edit', function(req, res){
  Sushi.findById(req.params.id, function(err, sushi) {
    if (err){
      res.render('error', {err: err});
    } else {
      res.render('./sushi/edit', {sushi: sushi});
    }
  })
});

// UPDATE from EDIT page
router.put("/sushi/:id", function(req, res){
  Sushi.findByIdAndUpdate(req.params.id, req.body.comment, function(err, comment){
    console.log(req.body.comment);
    console.log(comment);
    res.redirect('/sushi');
  })
});

// delete
router.get('/sushi/:id/delete',function(req, res){
  Sushi.findByIdAndRemove(req.params.id, function (err, sushi) {
    if (err){
      res.render('error', {err: err});
    } else {
      res.redirect('/sushi');
    }
  });
});

// Update favourite and SUPER favourite
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
