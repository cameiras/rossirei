var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Test = new Schema({
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
  comment: {
    type: String
  },
  liked: [],
  disliked: []
});

module.exports = mongoose.model('tests', Test);
