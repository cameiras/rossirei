// *** main dependencies *** //
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Photo = require('./models/photo.js');
//var Test = require('./models/test.js');
var Schema = mongoose.Schema;
var fs = require('fs');



// *** config file *** //
var config = require('../_config');


// *** express instance *** //
var app = express();


// *** routes *** //
var mainRoutes = require('./routes/index');
var authRoutes = require('./routes/auth');
var styleRoutes = require('./routes/style');


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));


// *** mongoose ** //
mongoose.connect(config.MONGO_URI);

// *** main routes *** //
app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/style', styleRoutes);


// *** handle 404 error *** //
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send({
      message: err.message,
      error: err
    });
  });
}
app.use(function(err, req, res, next) {
  var status = err.status || 500;
  res.status(status).send({
    message: err.message,
    error: err
  });
});

 /*Test.create({ name: 'test', season: 'season', brand: 'brand', comment: '', disliked: [
        "56d77596fe079311003f7720"
    ] }, function (err, small) {
    if (err) {
       console.log(err);
    }
    // saved!
  })*/

//Test.path('test.disliked', [{ type : Schema.ObjectId, ref: 'User' }]) 
/*
// Load all images from the server/photos folder in the database
var photos_on_disk = fs.readdirSync(__dirname + '/photos');
console.log('disk ' + __dirname + '/photos');
// Insert the photos in the database. This is executed on every 
// start up of your application, but because there is a unique
// constraint on the name field, subsequent writes will fail 
// and you will still have only one record per image:

photos_on_disk.forEach(function(photo){
  var name = photo.replace('.jpg', '');
  var split = photo.split("_");
  console.log('brand ' + split[0]);
  console.log('season ' + split[1]);

  Photo.create({ name: name, season: split[1], brand: split[0], comment: '' }, function (err, small) {
    if (err) {
       console.log(err);
    }
    // saved!
  })
    console.log('all pictures are loaded');
});*/

module.exports = app;
