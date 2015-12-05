'use strict';

angular.module('html5editorApp')
  .service('Template', function (Resource) {
    return Resource('/api/templates/:id/:controller');
  });
