var express         = require('express'),
    router          = express.Router(),
    bodyParser      = require('body-parser'), //parses information from POST
    methodOverride  = require('method-override'), //used to manipulate POST
    passport        = require('passport');

var usersController = require('../controllers/users');
var sushiController = require('../controllers/sushi');

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();
  // Otherwise the request is always redirected to the home page
  res.redirect('/sushi');
}


router.route('/')
  .get(function(req, res){
    res.redirect('/sushi')
  });

router.route('/sushi')
  .get(sushiController.getAll)
  .post(sushiController.createSushi)

router.route('/sushi/:id')
  .get(sushiController.getSushi)
  .put(sushiController.updateSushi)

router.route('/sushi/:id/delete')
  .get(sushiController.removeSushi)

router.route('/sushi/:id/edit')
  .get(sushiController.getSushiEdit)

router.route('/sushi/:id/favourite')
  .get(sushiController.getFavSushi)

router.route('/sushi/:id/SUPER')
  .get(sushiController.getSuperFav)

// logging in
router.route('/sushi/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/sushi/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/sushi/logout")
  .get(usersController.getLogout);

router.route("/sushi/secret")
  .get(authenticatedUser, usersController.secret);

module.exports = router;