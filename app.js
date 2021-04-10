var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mensClothingRouter = require('./routes/mens_clothing');
var womensClothingRouter = require('./routes/womens_clothing');
var electronicsRouter = require('./routes/electronics_stuff');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'), { extensions: 'html' }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mensClothing', mensClothingRouter);
app.use('/womensClothing', womensClothingRouter);
app.use('/electronicsStuff', electronicsRouter);

module.exports = app;
