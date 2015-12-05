'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TemplateSchema = new Schema({
  name: String,
  contents: Array,
  active: Boolean,
  type:String,
  user: Schema.Types.ObjectId
});

module.exports = mongoose.model('Template', TemplateSchema);