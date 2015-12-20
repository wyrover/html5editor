'use strict';

var _ = require('lodash');
var Sense = require('../api/sense/sense.model');



// Get a single sense
exports.show = function(req, res) {
  Sense.findById(req.params.id, function (err, sense) {
    if(err) { return handleError(res, err); }
    if(!sense) { 
      return res.status(404).send('Not Found'); 
    }
    return res.json(sense);
  });
};

// Creates a new sense in the DB.
exports.create = function(req, res) {
  delete req.body._id;
  Sense.create(req.body, function(err, sense) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(sense);
  });
};


function handleError(res, err) {
  return res.status(500).send(err);
}
