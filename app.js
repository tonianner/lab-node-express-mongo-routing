var express         = require('express');
var path            = require('path');
var logger          = require('morgan');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var expressLayouts  = require('express-ejs-layouts');
var methodOverride  = require('method-override');

var app    = express();
var router = express.Router();

// Morgan
app.use(logger('dev'));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose stuff
var mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/sushi';
mongoose.connect(mongoUri);

// EJS, views, public
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))

// development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.use(require('./controllers/sushi'));

app.listen(process.env.PORT || 3000 )
console.log('Start getting hungry!!');