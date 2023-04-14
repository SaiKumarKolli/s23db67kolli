var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var RecipesRouter = require('./routes/Recipes');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var Recipes = require('./models/Recipes');

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await Recipes.deleteMany();
 let instance1 = new Recipes({recipes_name:"fish fry",recipes_qunatity:"10",recipes_price:1500});
 let instance2 = new Recipes({recipes_name:"palak paneer",recipes_qunatity:"15",recipes_price:1200});
 let instance3 = new Recipes({recipes_name:"chicken tikka",recipes_qunatity:"20",recipes_price:1700});
 instance1.save().then(()=>{
    console.log("Object 1 created")
  }).catch((err)=>{
    console.log(err);
  })
  instance2.save().then(()=>{
      console.log("Object 2 created")
    }).catch((err)=>{
      console.log(err);
    })
    instance3.save().then(()=>{
        console.log("Object 3 created")
      }).catch((err)=>{
        console.log(err);
      })
}

let reseed = true;
if (reseed) {recreateDB();}
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Recipes', RecipesRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);



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
