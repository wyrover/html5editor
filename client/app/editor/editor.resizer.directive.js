'use strict';

angular.module('html5editorApp')
  .directive('editorResizer', function ($state) {
    return {
      require: 'ngModel',
      scope: {
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/editor-resizer.html',
      restrict: 'EA',
      controller: function($scope){
        
      },
      link: function (scope, element, attrs) {
      }
    };
  });
