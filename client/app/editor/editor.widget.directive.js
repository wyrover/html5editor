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
        var x,y;
        $scope.$on('widget.panstart', function(){
          x = Number($scope.widget.left);
          y = Number($scope.widget.top);console.log(x,y)
        });
        $scope.$on('widget.panmove', function(e, deltaX, deltaY){
          if(!$scope.widget.active) return;
          $scope.widget.left = x + deltaX;
          $scope.widget.top = y + deltaY;
        });
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
