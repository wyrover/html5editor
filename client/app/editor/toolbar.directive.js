'use strict';

angular.module('html5editorApp')
  .directive('toolbar', function () {
    return {
      templateUrl: 'app/editor/toolbar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
