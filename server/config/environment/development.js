'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/html5editor-dev'
  },

  weibo: {
    app_key: 'app_key',
    app_secret: 'app_secret',
    callbackURL: 'callbackURL'
  },

  qq: {
    app_key: 'app_key',
    app_secret: 'app_secret',
    callbackURL: 'callbackURL'
  },

  seedDB: true
};
