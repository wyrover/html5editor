'use strict';

angular.module('html5editorApp')
  .directive('editor', function () {
    return {
      require: 'ngModel',
      templateUrl: 'app/editor/editor.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
