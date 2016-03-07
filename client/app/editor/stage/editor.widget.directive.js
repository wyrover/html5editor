'use strict';

angular.module('html5editorApp')
  .directive('editorWidget', function () {
    return {
      require: 'ngModel',
      scope:{
        widget: '=ngModel'
      },
      templateUrl: 'app/editor/stage/editor-widget.html',
      restrict: 'EA',
      controller: function($scope, Editor){
                
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
