var express = require('express');
var path = require('path');
// var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

var amazon = require('./config/amazon.js');


/** 
 * Database Configuration
 */
var mongoose = require('./config/db');
// var mongoose = require('mongoose');
// Connect to DB
// mongoose.connect(dbConfig.url);


/** 
 * Create App
 */
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/** 
 *  Configuring Passport User login
 */
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
var flash = require('connect-flash');
app.use(flash());

var initPassport = require('./passport/init');
initPassport(passport);


/**
*   Create Application Routes
*/
var routes = require('./routes/index')(passport);
app.use('/', routes);

/**
*   Uploading Multipart Form Data (Files)
*/
app.use(multer({
  dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }
}))

/**
*   Error Handling
*/
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.listen(process.env.PORT || 3000);


module.exports = app;
