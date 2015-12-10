'use strict';

var _ = require('lodash');
var Template = require('./template.model');

// Get list of templates
exports.index = function(req, res) {
  var query = req.query;
  Template.find({})
  .paginate(1, 4)
  .exec(function (err, templates, total) {
    if(err) { return handleError(res, err); }
    res.range({first:req.range.first,last:req.range.last,length:total});console.log(req.range)
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

function handleError(res, err) {
  return res.status(500).send(err);
}