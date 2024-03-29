'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WidgetSchema = new Schema({
  name: String,
  contents: Array,
  active: Boolean,
  type:String,
  user: Schema.Types.ObjectId,
  created_time: {
    type: Date,
    default: new Date
  }
});

module.exports = mongoose.model('Widget', WidgetSchema);