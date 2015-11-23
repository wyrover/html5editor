'use strict';

var _ = require('lodash');
var File = require('./file.model');

// Get list of files
exports.index = function(req, res) {
  File.find(function (err, files) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(files);
  });
};

// Get a single file
exports.show = function(req, res) {
  File.findById(req.params.id, function (err, file) {
    if(err) { return handleError(res, err); }
    if(!file) { return res.status(404).send('Not Found'); }
    return res.json(file);
  });
};

// Creates a new file in the DB.
exports.create = function(req, res) {
  console.log(req.file, req.body)
  if(!req.file){
    res.status(500).json({message:'上传失败'});
  }
  req.file.type = req.file.mimetype.split('/')[0];
  File.create(req.file, function(err, file) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(file);
  });
};

// Updates an existing file in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  File.findById(req.params.id, function (err, file) {
    if (err) { return handleError(res, err); }
    if(!file) { return res.status(404).send('Not Found'); }
    var updated = _.merge(file, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(file);
    });
  });
};

// Deletes a file from the DB.
exports.destroy = function(req, res) {
  File.findById(req.params.id, function (err, file) {
    if(err) { return handleError(res, err); }
    if(!file) { return res.status(404).send('Not Found'); }
    file.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}