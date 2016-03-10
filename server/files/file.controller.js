'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
var gfs = Grid(mongoose.connection.db, mongoose.mongo);

// Get a single file
exports.show = function(req, res) {
  gfs.exist({_id:req.params.id}, function(err, found){
    if (err) return handleError(res, err);
    if(!found){
      return res.status(404).send('');
    }
    var stream = gfs.createReadStream({_id:req.params.id});
    stream.on('error', function(err){
      res.status(404, err)
    });
    stream.pipe(res);
  });
  
};


function handleError(res, err) {
  return res.status(500).send(err);
}
