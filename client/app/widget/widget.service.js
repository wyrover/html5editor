'use strict';

angular.module('html5editorApp')
  .service('Widget', function (Resource) {
    return Resource('/api/widgets/:id/:controller',{id:'@_id'});
  });
