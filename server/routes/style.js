var express = require('express');
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var request = require('request');
var qs = require('querystring');

var config = require('../../_config');
var User = require('../models/user.js');
var Vote = require('../models/vote.js');
var Photo = require('../models/photo.js');

router.post('/styleselector', function(req, res) {
  Photo.find({}, function(err, photos) {
    res.send(photos);  
  });
});

module.exports = router;
