'use strict';

angular.module('html5editorApp')
  .filter('trustAsHtml', function ($sce) {
    return function (input) {
      return $sce.trustAsHtml(input);
    };
  });
