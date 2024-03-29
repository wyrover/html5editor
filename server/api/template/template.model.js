'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TemplateSchema = new Schema({
  name: String,
  contents: Array,
  active: Boolean,
  type:String,
  user: Schema.Types.ObjectId,
  created_time: {
    type: Date,
    default: new Date
  },
  thumb: String,
  public: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Template', TemplateSchema);