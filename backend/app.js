const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
const app = express();


//Importamos la Rutas
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');


//Usamos la rutas
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);





app.use(cors({
  origin:"*",
  methods:['GET','POST','PATCH','DELETE','PUT'],
  allowedHeaders: 'content-Type, Authorization, Origin, X-Requested-With, Accept'
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
