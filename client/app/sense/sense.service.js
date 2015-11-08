'use strict';

angular.module('html5editorApp')
  .service('Sense', function (Resource) {
    return Resource('/api/senses/:id/:controller');
  });
