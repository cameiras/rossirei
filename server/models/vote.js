var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
  photo_id: {
    type: String
  },
  like: {
    type: Number
  },
   dislike: {
    type: Number
  },
  user_id: {
    type: String
  },
  campaign_id: {
    type: String
  },

});

module.exports = mongoose.model('votes', Vote);