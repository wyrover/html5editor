'use strict';

angular.module('html5editorApp')
  .directive('actionbar', function () {
    return {
      require: 'ngModel',
      templateUrl: 'app/editor/actionbar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
