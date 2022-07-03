var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); //para que cargue los datos del archivo .env

var indexRouter = require('./routes/index');//routes/index.js
var nosotrosRouter = require('./routes/nosotros'); //routes/nosotros.js
var proyectosRouter = require('./routes/proyectos'); //routes/proyectos
var noticiasRouter = require('./routes/noticias'); //routes/noticias
var contactoRouter = require('./routes/contacto'); //routes/contacto

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/proyectos', proyectosRouter);
app.use('/noticias', noticiasRouter);
app.use('/contacto', contactoRouter);

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

module.exports = app;
