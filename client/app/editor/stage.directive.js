'use strict';

angular.module('html5editorApp')
  .directive('editorStage', function () {
    return {
      require: 'ngModel',
      scope:{
        page: '=ngModel'
      },
      templateUrl: 'app/editor/stage.html',
      restrict: 'EA',
      controller: function($scope){
        var x = 0, y = 0;
        $scope.onPanStart = function($event, widget){
          x = widget.left;
          y = widget.top;
        };
        $scope.onPanMove = function($event, widget){
          widget.left = x + $event.deltaX;
          widget.top = y + $event.deltaY;
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
