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
      controller: function($scope, EditorWidget){
        var x = 0, y = 0;

        $scope.changeWidget = function($event, widget){
          EditorWidget.widget = widget;
        };
        $scope.onPanStart = function($event, widget){
          x = widget.left;
          y = widget.top;
        };
        $scope.onPanMove = function($event, widget){
          widget.left = parseInt(x) + $event.deltaX;
          widget.top = parseInt(y) + $event.deltaY;
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
