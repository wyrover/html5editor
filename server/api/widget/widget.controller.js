'use strict';

var _ = require('lodash');
var Widget = require('./widget.model');

// Get list of widgets
exports.index = function(req, res) {
  Widget.find(function (err, widgets) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(widgets);
  });
};

// Get a single widget
exports.show = function(req, res) {
  Widget.findById(req.params.id, function (err, widget) {
    if(err) { return handleError(res, err); }
    if(!widget) { return res.status(404).send('Not Found'); }
    return res.json(widget);
  });
};

// Creates a new widget in the DB.
exports.create = function(req, res) {
  Widget.create(req.body, function(err, widget) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(widget);
  });
};

// Updates an existing widget in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Widget.findById(req.params.id, function (err, widget) {
    if (err) { return handleError(res, err); }
    if(!widget) { return res.status(404).send('Not Found'); }
    var updated = _.merge(widget, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(widget);
    });
  });
};

// Deletes a widget from the DB.
exports.destroy = function(req, res) {
  Widget.findById(req.params.id, function (err, widget) {
    if(err) { return handleError(res, err); }
    if(!widget) { return res.status(404).send('Not Found'); }
    widget.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}