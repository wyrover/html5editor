'use strict';

angular.module('html5editorApp')
  .directive('editorTemplate', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/template.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget){},
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
