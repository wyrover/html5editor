'use strict';

var _ = require('lodash');
var Notice = require('./notice.model');

// Get list of notices
exports.index = function(req, res) {
  return res.json([{name:'2.0上线了',info:'2.0上线了',status:1},{name:'2.0上线了',info:'2.0上线了',status:1}]);
  Notice.find(function (err, notices) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(notices);
  });
};

// Get a single notice
exports.show = function(req, res) {
  Notice.findById(req.params.id, function (err, notice) {
    if(err) { return handleError(res, err); }
    if(!notice) { return res.status(404).send('Not Found'); }
    return res.json(notice);
  });
};

// Creates a new notice in the DB.
exports.create = function(req, res) {
  Notice.create(req.body, function(err, notice) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(notice);
  });
};

// Updates an existing notice in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Notice.findById(req.params.id, function (err, notice) {
    if (err) { return handleError(res, err); }
    if(!notice) { return res.status(404).send('Not Found'); }
    var updated = _.merge(notice, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(notice);
    });
  });
};

// Deletes a notice from the DB.
exports.destroy = function(req, res) {
  Notice.findById(req.params.id, function (err, notice) {
    if(err) { return handleError(res, err); }
    if(!notice) { return res.status(404).send('Not Found'); }
    notice.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}