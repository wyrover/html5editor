'use strict';

angular.module('html5editorApp')
  .directive('preview', function () {
    return {
      templateUrl: 'app/preview/preview.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
