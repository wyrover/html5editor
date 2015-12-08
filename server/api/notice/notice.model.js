'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoticeSchema = new Schema({
  name: String,
  info: String,
  status: Number
});

module.exports = mongoose.model('Notice', NoticeSchema);