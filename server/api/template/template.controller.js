'use strict';

var _ = require('lodash');
var Template = require('./template.model');

// Get list of templates
exports.index = function(req, res) {
  var query = req.query;
  Template.find({})
  .sort('-created_time')
  .skip(req.range.first)
  .limit(req.range.last-req.range.first+1)
  .exec(function (err, templates) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(templates);
  });
};

// Get a single template
exports.show = function(req, res) {
  Template.findById(req.params.id, function (err, template) {
    if(err) { return handleError(res, err); }
    if(!template) { return res.status(404).send('Not Found'); }
    return res.json(template);
  });
};

// Creates a new template in the DB.
exports.create = function(req, res) {
  Template.create(req.body, function(err, template) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(template);
  });
};

// Updates an existing template in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Template.findById(req.params.id, function (err, template) {
    if (err) { return handleError(res, err); }
    if(!template) { return res.status(404).send('Not Found'); }
    var updated = _.merge(template, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(template);
    });
  });
};

// Deletes a template from the DB.
exports.destroy = function(req, res) {
  Template.findById(req.params.id, function (err, template) {
    if(err) { return handleError(res, err); }
    if(!template) { return res.status(404).send('Not Found'); }
    template.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

exports.count = function(req, res, next) {
  Template.count({}, function(err, count){
    res.range({first:req.range.first,last:req.range.last,length:count});
    next();
  })
};

function handleError(res, err) {
  return res.status(500).send(err);
}