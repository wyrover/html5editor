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
      controller: function($scope, EditorWidget){
        var x,y;
        
        $scope.$on('widget.panstart', function(){
          x = Number($scope.widget.left);
          y = Number($scope.widget.top);
        });
        $scope.$on('widget.panmove', function(e, deltaX, deltaY){
          if(!$scope.widget.active) return;
          $scope.widget.left = x + deltaX;
          $scope.widget.top = y + deltaY;
        });
        $scope.$on('widget.active', function(e, widget, shiftKey, active){
          if(widget!=$scope.widget){
            if(!shiftKey&&!active)$scope.widget.active = false;
          }
          if(widget.group>0&&$scope.widget.group==widget.group){
            $scope.widget.active = true;
          }
        });
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
