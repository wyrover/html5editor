'use strict';

angular.module('html5editorApp')
  .directive('editorPreview', function () {
    return {
      templateUrl: 'app/editor/preview/preview.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
