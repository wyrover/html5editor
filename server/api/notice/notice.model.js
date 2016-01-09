'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoticeSchema = new Schema({
  name: String,
  info: String,
  status: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Notice', NoticeSchema);