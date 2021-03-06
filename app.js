var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan'); 
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
var employee = require('./routes/employee');
var newemp=require('./routes/newemp');
var deleteemp=require('./routes/deleteemp');
var buscaremp=require('./routes/buscaremp');
var controller=require('./controllers/employeeController.js');

var app = express();

// Connect to database
mongoose.connect('mongodb://localhost/employee');
//mongoose.connect('process.env.MONGODB_URI');

var db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connection Successful');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Rutas para accesar
app.use('/', routes);
app.use('/users', users);
app.use('/employee', employee);
app.use('/employee/newemp', newemp);
app.use('/employee/deleteemp', deleteemp);
app.use('/employee/buscaremp', buscaremp);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
    res.status(err.status || 500); 
    res.render('error');
  });


module.exports = app;
