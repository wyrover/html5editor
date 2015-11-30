'use strict';

angular.module('html5editorApp')
  .directive('editorResizer', function (EditorWidget) {
    return {
      require: ['ngModel','editorResizer'],
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
        $scope.bottomLeft = function($event){
            $scope.widget.height = parseInt(widget.height) + $event.deltaY;
            $scope.widget.width = parseInt(widget.width) - $event.deltaX;
            $scope.widget.top = widget.top;
        };
        $scope.bottomRight = function($event){
            $scope.widget.height = parseInt(widget.height) + $event.deltaY;
            $scope.widget.width = parseInt(widget.width) + $event.deltaX;
            $scope.widget.left = widget.left;
            $scope.widget.top = widget.top;
        };
        $scope.bottomMiddle = function($event){
            $scope.widget.height = parseInt(widget.height) + $event.deltaY;
            $scope.widget.left = widget.left;
            $scope.widget.top = widget.top;
        };
        $scope.middleRight = function($event){
            $scope.widget.width = parseInt(widget.width) + $event.deltaX;
            $scope.widget.left = widget.left;
            $scope.widget.top = widget.top;
        };
        $scope.middleLeft = function($event){
            $scope.widget.width = parseInt(widget.width) - $event.deltaX;
            $scope.widget.top = widget.top;
        };

        this.left = function(){console.log($scope.widget.left)
          $scope.widget.left--;
        };
        this.right = function(){
          $scope.widget.left++;
        };
        this.up = function(){
          $scope.widget.top--;
        };
        this.down = function(){
          $scope.widget.top++;
        };
      },
      link: function (scope, element, attrs, ctrls) {
        var ctrl = ctrls[1];
        element.on('keydown', function(e){
          e.preventDefault();
          switch(e.keyCode){
            case 37: ctrl.left();break;
            case 38: ctrl.up();break;
            case 39: ctrl.right();break;
            case 40: ctrl.down();break;
          };
          scope.$apply();
        });
      }
    };
  });
