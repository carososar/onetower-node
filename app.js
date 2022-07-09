var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); //para que cargue los datos del archivo .env
var session = require('express-session');

var indexRouter = require('./routes/index');//routes/index.js
var nosotrosRouter = require('./routes/nosotros'); //routes/nosotros.js
var proyectosRouter = require('./routes/proyectos'); //routes/proyectos.js
var noticiasRouter = require('./routes/noticias'); //routes/noticias.js
var contactoRouter = require('./routes/contacto'); //routes/contacto.js
var loginRouter = require('./routes/admin/login'); //routes/admin/login.js
var adminRouter = require('./routes/admin/nosotros'); //routes/admin/nosotros.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'hegdyfhjrufhty254863', //esta clave secreta se guarda en la memoria del servidor.
  cookie:{MaxAge:null},
  resave: false,
  saveUninitialized: true
}))

//con la fila 38 a la 50 lo que hacemos es autentificar y autorizar, o sea si recibe el usuario y contrasenia correcto lo autentifica y autoriza el paso.
secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login')
    }

  } catch (error) {
    console.log(error)
  }
}

app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/proyectos', proyectosRouter);
app.use('/noticias', noticiasRouter);
app.use('/contacto', contactoRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/nosotros', secured, adminRouter);
//en la linea 58 lo que hice fue agregar la seguridad, que hicimos el codigo en la linea 38.


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
