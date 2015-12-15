'use strict';

var _ = require('lodash');

// Get a single file
exports.show = function(req, res) {console.log('id:',req.params.id)
  var gfs = req.app.get('gfs');
  var stream = gfs.createReadStream({_id:req.params.id});
  stream.pipe(res);
};


function handleError(res, err) {
  return res.status(500).send(err);
}
