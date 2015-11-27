'use strict';

angular.module('html5editorApp')
  .directive('editorResizer', function (EditorWidget) {
    return {
      require: 'ngModel',
      scope: {
        widget: '=ngModel'
      },
      templateUrl: 'app/editor/editor-resizer.html',
      restrict: 'EA',
      controller: function($scope){
        var widget = $scope.widget;
        $scope.onPanStart = function(){
            widget = angular.copy($scope.widget);
        };
        $scope.topMiddle = function($event){
            $scope.widget.height = parseInt(widget.height) - $event.deltaY;
            $scope.widget.left = widget.left;
        };
        $scope.topLeft = function($event){
            $scope.widget.height = parseInt(widget.height) - $event.deltaY;
            $scope.widget.width = parseInt(widget.width) - $event.deltaX;
        };
        $scope.topRight = function($event){
            $scope.widget.height = parseInt(widget.height) - $event.deltaY;
            $scope.widget.width = parseInt(widget.width) + $event.deltaX;
            $scope.widget.left = widget.left;
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
