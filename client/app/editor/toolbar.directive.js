'use strict';

angular.module('html5editorApp')
  .directive('toolbar', function () {
    return {
      require: 'ngModel',
      templateUrl: 'app/editor/toolbar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
