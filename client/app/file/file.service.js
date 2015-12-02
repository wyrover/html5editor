'use strict';

angular.module('html5editorApp')
  .service('File', function (Resource) {
    return Resource('/api/files/:id/:controller');
  });
