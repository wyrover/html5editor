'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SenseSchema = new Schema({
  user: Schema.Types.ObjectId,
  name: String,
  contents: Array,
  active: Boolean
});

module.exports = mongoose.model('Sense', SenseSchema);