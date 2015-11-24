'use strict';

angular.module('html5editorApp')
  .directive('editorWidget', function () {
    return {
      require: 'ngModel',
      scope:{
        widget: '=ngModel'
      },
      templateUrl: 'app/editor/editor-widget.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget){
        //$scope.widget = EditorWidget.widget;
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
