'use strict';

var _ = require('lodash');
var Sense = require('./sense.model');

// Get list of senses
exports.index = function(req, res) {
  Sense.find({user: String(req.user._id)})
  .sort('-created_time')
  .exec(function (err, senses) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(senses);
  });
};

// Get a single sense
exports.show = function(req, res) {
  Sense.findById(req.params.id, function (err, sense) {
    if(err) { return handleError(res, err); }
    if(!sense||String(sense.user)!=String(req.user._id)) { 
      return res.status(404).send('Not Found'); 
    }
    return res.json(sense);
  });
};

// Creates a new sense in the DB.
exports.create = function(req, res) {
  delete req.body._id;
  req.body.user = req.user._id;
  Sense.create(req.body, function(err, sense) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(sense);
  });
};

// Updates an existing sense in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  req.body.user = req.user._id;
  Sense.findById(req.params.id, function (err, sense) {
    if (err) { return handleError(res, err); }
    if(!sense||String(sense.user)!=String(req.user._id)) { return res.status(404).send('Not Found'); }
    var updated = _.merge(sense, req.body);
    updated.markModified('contents');
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(sense);
    });
  });
};

// Deletes a sense from the DB.
exports.destroy = function(req, res) {
  Sense.findById(req.params.id, function (err, sense) {
    if(err) { return handleError(res, err); }
    if(!sense||String(sense.user)!=String(req.user._id)) { return res.status(404).send('Not Found'); }
    sense.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}