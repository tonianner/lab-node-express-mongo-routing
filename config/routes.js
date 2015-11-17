var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var sushiController = require('../controllers/sushi');

router.route('/')
  .get(function(req, res){
    res.redirect('/sushi');
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

module.exports = router;