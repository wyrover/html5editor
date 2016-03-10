'use strict';

var _ = require('lodash');
var File = require('./file.model');
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
var multer = require('multer');
var gfs = Grid(mongoose.connection.db, mongoose.mongo);


// Get list of files
exports.index = function(req, res) {
  File.find()
  //.populate('metadata')
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
exports.create = function(req, res, next) {
  var storage = require('multer-gridfs')({
      gfs:gfs,
      metadata: function(req, file){
          return {user:req.user._id};
      }
  });
  var upload = multer({storage:storage}).single('file');
  upload(req, res, function(err){console.log(req.file)
    if(err){
      return res.json(err);
    }
    res.json(req.file.obj);
  });
};

// Updates an existing file in the DB.
exports.update = function(req, res) {
  res.send('')
};

// Deletes a file from the DB.
exports.destroy = function(req, res) {
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
  //console.log('-----',req.file, req.body)
  next();
};

function handleError(res, err) {
  return res.status(500).send(err);
}