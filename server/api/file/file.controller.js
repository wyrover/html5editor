'use strict';

var _ = require('lodash');
var File = require('./file.model');

// Get list of files
exports.index = function(req, res) {
  var gfs = req.app.get('gfs');
  return gfs.files.find({}).toArray(function(err, files){
    res.status(200).json(files);
  });
};

// Get a single file
exports.show = function(req, res) {
  var gfs = req.app.get('gfs');
  gfs.findOne({_id:req.params.id}, function (err, file) {
    if(err) { return handleError(res, err); }
    if(!file) { return res.status(404).send('Not Found'); }
    return res.json(file);
  });
};

// Creates a new file in the DB.
exports.create = function(req, res) {
  //console.log(req.file, req.body)
  if(!req.file){
    res.status(500).json({message:'上传失败'});
  }
  res.json(req.file.gridfsEntry);
};

// Updates an existing file in the DB.
exports.update = function(req, res) {
  res.send('')
};

// Deletes a file from the DB.
exports.destroy = function(req, res) {
  var gfs = req.app.get('gfs');
  gfs.remove({_id:req.params.id}, function (err, file) {
    if(err) { return handleError(res, err); }
    return res.send('');
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}