'use strict';

var _ = require('lodash');
var File = require('./file.model');

// Get list of files
exports.index = function(req, res) {
  File.find({})
  .sort('-uploadDate')
  .skip(req.range.first)
  .limit(req.range.last-req.range.first+1)
  .exec(function (err, files) {
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

exports.count = function(req, res, next) {
  File.count({}, function(err, count){console.log('file count:', count)
    res.range({first:req.range.first,last:req.range.last,length:count});
    next();
  })
};

exports.user = function(req, res, next){
  req.body.user = req.user._id;
  next();
};

function handleError(res, err) {
  return res.status(500).send(err);
}