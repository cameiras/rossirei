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
var _ = require("underscore");
var ObjectId = require('mongodb').ObjectId;


router.post('/styleselector', function(req, res) {

	  Photo.find({}, function(err, photos) {
	   	res.send(photos);	   
	  });
});


router.post('/like', function(req, res) {
	Photo.findOne({ _id: ObjectId(req.body.photoId) }, function(err, photo) {
		photo.liked = true;
		if(_.indexOf(photo.liked, req.body.userId) < 0) {
			photo.liked.push(req.body.userId);
		} 
		if(_.indexOf(photo.disliked, req.body.userId) > 0) {
			photo.disliked = _.filter(photo.disliked, function(x) { return x != req.body.userId });
		}
		photo.save();
	    res.send({ photo_id: req.body.photoId });  
	});
});

router.post('/dislike', function(req, res) {
	Photo.findOne({ _id: ObjectId(req.body.photoId) }, function(err, photo) {
		photo.liked = true;
		if(_.indexOf(photo.disliked, req.body.userId) < 0) {
			photo.disliked.push(req.body.userId);
		} 
		if(_.indexOf(photo.liked, req.body.userId) > 0) {
			photo.liked = _.filter(photo.liked, function(x) { return x != req.body.userId });
		}
		photo.save();
	    res.send({ photo_id: req.body.photoId });  
	});

});

router.post('/allStandings', function(req, res) {
	Photo.find({}, function(err, photos) {
	   	res.send(photos);	   
	  });
});

module.exports = router;
