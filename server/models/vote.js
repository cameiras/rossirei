var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vote = new Schema({
  photo_id: {
        type: Schema.ObjectId,
        ref: 'Photo',
  },
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
  user_id: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  campaign_id: {
        type: Schema.ObjectId,
        ref: 'Campaign',
  },

});

module.exports = mongoose.model('votes', Vote);