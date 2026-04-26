require('./app_api/models/db'); 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app_api/routes/index');
var usersRouter = require('./routes/users');

var app = express();
const cors = require('cors');

// ==============================
// VIEW ENGINE
// ==============================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// ==============================
// MIDDLEWARE
// ==============================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ==============================
// ENABLE CORS (Angular frontend)
// ==============================
app.use(cors({
  origin: 'http://localhost:4200'
}));

// OPTIONAL: Allow all methods globally
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// ==============================
// STATIC FILES
// ==============================
app.use(express.static(path.join(__dirname, 'public')));

// ==============================
// ROUTES
// ==============================

app.use('/api', indexRouter);

// (optional, not used for your app)
app.use('/users', usersRouter);

// ==============================
// 404 HANDLER
// ==============================
app.use(function(req, res, next) {
  next(createError(404));
});

// ==============================
// ERROR HANDLER
// ==============================
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;