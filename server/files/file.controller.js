'use strict';

var _ = require('lodash');

// Get a single file
exports.show = function(req, res) {
  var gfs = req.app.get('gfs');
  gfs.exist({_id:req.params.id}, function(err, found){
    if (err||!found) return handleError(res, err);
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
