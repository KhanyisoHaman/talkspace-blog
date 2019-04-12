var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
// var viewRouter = require('./routes/view');
// var updateRouter = require('./routes/update');
// var deleteRouter = require('./routes/delete');
// var archivesRouter = require('./routes/archives');
// var editRouter = require('./routes/edit');
var registerRouter = require('./routes/register');
// var signInRouter = require('./routes/sign-in');
// var signOutRouter = require('./routes/sign-out');

// var routes = [
//   require('./routes/index'),
//   require('./routes/users'),
//   require('./routes/create'),
//   require('./routes/view'),
//   require('./routes/update'),
//   require('./routes/delete'),
// ]

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
// app.use('/', signInRouter);
// app.use('/', signOutRouter);
app.use('/', registerRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
// app.listen(8080);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on ${PORT} ..`))
