var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Standing = new Schema({
  photoName: {
       type: String,
  },
  userName: {
       type: String,
  },
  like: {
    type: Number
  },
   dislike: {
    type: Number
  },
  brand: {
    type: String,
  },
});

module.exports = mongoose.model('standings', Standing);