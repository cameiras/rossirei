var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Photo = new Schema({
  name: {
    type: String,
    unique: true
  },
  season: {
    type: String
  },
  brand: {
    type: String
  },
  liked: [],
  disliked: []
});

module.exports = mongoose.model('photos', Photo);
