'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SenseSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Sense', SenseSchema);