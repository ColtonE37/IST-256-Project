var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Added from video
var bodyParser = require("body-parser");
var Program = require("./models/program");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mensClothingRouter = require('./routes/mens_clothing');
var womensClothingRouter = require('./routes/womens_clothing');
var electronicsRouter = require('./routes/electronics_stuff');

//Added from video
var programsRouter = require('./routes/programs');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'), { extensions: 'html' }));

//Added from video
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mensClothing', mensClothingRouter);
app.use('/womensClothing', womensClothingRouter);
app.use('/electronicsStuff', electronicsRouter);

//Added from video
app.use('/programs', programsRouter);

module.exports = app;
