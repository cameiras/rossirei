var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Campaign = new Schema({
  description: {
    type: String
  }

});

module.exports = mongoose.model('campaigns', Campaign);