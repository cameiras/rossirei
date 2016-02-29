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
  }
});

module.exports = mongoose.model('photos', Photo);
