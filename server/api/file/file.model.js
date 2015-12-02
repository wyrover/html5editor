'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FileSchema = new Schema({
  filename: String,
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  type: String,
  size: Number,
  destination: String,
  path: String,
  active: Boolean
});

module.exports = mongoose.model('File', FileSchema);