var Sushi = require('../models/sushi')
var flash = require('connect-flash');


// GET // index
function getAll(req, res) {
    Sushi.find({}).sort({date: -1}).exec(function (err, sushi) {
    if (err){
      res.render('error', {err: err});
    } else {
      res.render('sushi', { sushi: sushi, error: req.flash('error'), success: req.flash('success') });
    };
  })
}

// POST // create
function createSushi(req, res) {
  Sushi.create(req.body.sushi, function (err, sushi) {
    if (err){
      req.flash('error', 'Sushi name and comment are required input');
    } else {
      req.flash('success', 'Added your sushi');
    }
    res.redirect('/sushi');
  });
}

// GET // Show individual
function getSushi(req, res) {
  Sushi.findById(req.params.id, function(err, sushi) {
    if (err){
      res.render('error', {err: err});
    } else {
      res.render('./sushi/show', { sushi: sushi, error: req.flash('error'), success: req.flash('success') });
    }
  })
}

// GET // Got to EDIT page individual
function getSushiEdit(req, res) {
  Sushi.findById(req.params.id, function(err, sushi) {
    if (err){
      res.render('error', {err: err});
    } else {
      res.render('./sushi/edit', { sushi: sushi, error: req.flash('error'), success: req.flash('success') });
    }
  })
}

// PUT /// UPDATE from EDIT page
function updateSushi(req, res) {
    Sushi.findByIdAndUpdate(req.params.id, req.body.comment, function(err, comment){
    console.log(req.body.comment);
    console.log(comment);
    res.redirect('/sushi', { sushi: sushi, error: req.flash('error'), success: req.flash('success') });
  })
}

function removeSushi(req, res) {
  Sushi.findByIdAndRemove(req.params.id, function (err, sushi) {
    if (err){
      res.render('error', {err: err});
    } else {
      res.redirect('/sushi');
    }
  });
}

// Update favourite and SUPER favourite
function getFavSushi(req, res){
  Sushi.findByIdAndUpdate(req.params.id, {status: "favourite"}, function(err, sushi){
    res.redirect('/sushi');
  })
}

function getSuperFav(req, res){
  Sushi.findByIdAndUpdate(req.params.id, {status: "SUPER favourite"}, function(err, sushi){
    res.redirect('/sushi');
  })
}


module.exports = {
  getAll      : getAll,
  createSushi : createSushi,
  getSushi    : getSushi,
  getSushiEdit: getSushiEdit,
  updateSushi : updateSushi,
  removeSushi : removeSushi,
  getFavSushi : getFavSushi,
  getSuperFav : getSuperFav
};

// // index
// router.get("/sushi", function(req, res){
//   Sushi.find({}).sort({date: -1}).exec(function (err, sushi) {
//     if (err){
//       res.render('error', {err: err});
//     } else {
//       res.render('sushi', { sushi: sushi });
//     };
//   })
// })

// // create
// router.post("/sushi", function(req, res){
//   Sushi.create(req.body.sushi, function (err, sushi) {
//     if (err){
//       res.render('error', {err: err});
//     } else {
//       res.redirect('/sushi');
//     }
//   });
// })

// // SHOW individual
// router.get('/sushi/:id', function(req, res){
//   Sushi.findById(req.params.id, function(err, sushi) {
//     if (err){
//       res.render('error', {err: err});
//     } else {
//       res.render('./sushi/show', {sushi:sushi});
//     }
//   })
// });

// // Got to EDIT page individual
// router.get('/sushi/:id/edit', function(req, res){
//   Sushi.findById(req.params.id, function(err, sushi) {
//     if (err){
//       res.render('error', {err: err});
//     } else {
//       res.render('./sushi/edit', {sushi: sushi});
//     }
//   })
// });

// // UPDATE from EDIT page
// router.put("/sushi/:id", function(req, res){
//   Sushi.findByIdAndUpdate(req.params.id, req.body.comment, function(err, comment){
//     console.log(req.body.comment);
//     console.log(comment);
//     res.redirect('/sushi');
//   })
// });

// // delete
// router.get('/sushi/:id/delete',function(req, res){
//   Sushi.findByIdAndRemove(req.params.id, function (err, sushi) {
//     if (err){
//       res.render('error', {err: err});
//     } else {
//       res.redirect('/sushi');
//     }
//   });
// });

// // Update favourite and SUPER favourite
// router.get("/sushi/:id/favourite", function(req, res){
//   Sushi.findByIdAndUpdate(req.params.id, {status: "favourite"}, function(err, sushi){
//     res.redirect('/sushi');
//   })
// });

// router.get("/sushi/:id/SUPER", function(req, res){
//   Sushi.findByIdAndUpdate(req.params.id, {status: "SUPER favourite"}, function(err, sushi){
//     res.redirect('/sushi');
//   })
// });

// module.exports = router;
