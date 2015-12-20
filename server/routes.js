/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/notices', require('./api/notice'));
  app.use('/api/files', require('./api/file'));
  app.use('/api/widgets', require('./api/widget'));
  app.use('/api/senses', require('./api/sense'));
  app.use('/api/templates', require('./api/template'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  app.use('/files', require('./files'));
  app.use('/render', require('./render'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
