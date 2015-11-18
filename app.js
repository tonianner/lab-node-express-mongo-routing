var express         = require('express');
var path            = require('path');
var logger          = require('morgan');
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var expressLayouts  = require('express-ejs-layouts');
var methodOverride  = require('method-override');

var passport     = require('passport');
var flash        = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var routes = require('./config/routes');
var app    = express();

// Mongoose stuff
var mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/sushi';
mongoose.connect(mongoUri);

// link_to
var helpers = require('express-helpers');
helpers(app);

// Morgan
app.use(logger('dev'));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// EJS, views, public
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))

app.use(session({
    secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// FLASH message
app.use(flash());

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

require('./config/passport')(passport);

app.use(function (req, res, next) {
  global.user = req.user;
  next()
});


app.use(routes);
// app.use('/api', routes)

app.listen(process.env.PORT || 3000 )
console.log('Start getting hungry!!');