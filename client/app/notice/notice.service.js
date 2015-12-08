'use strict';

angular.module('html5editorApp')
  .service('Notice', function (Resource) {
    return Resource('/api/notices/:id/:controller');
  });
