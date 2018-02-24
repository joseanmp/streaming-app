const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const messageModel = new Schema({
  message: String,
  user: String
});

module.exports = mongoose.model('Message', messageModel);
