'use strict';

angular.module('html5editorApp')
  .directive('editorResizer', function (EditorWidget) {
    return {
      require: ['ngModel'],
      scope: {
        widget: '=ngModel'
      },
      templateUrl: 'app/editor/editor-resizer.html',
      restrict: 'EA',
      controller: function($scope, $rootScope){
        var widget = $scope.widget;

        $scope.changeWidget = function($event){
          var widget = $scope.widget;
//           if(!$event.shiftKey&&!widget.active){
//             angular.forEach($scope.page.contents, function(item){
//               item.active = false;
//             });
//           }
          widget.active = true;
          $rootScope.$broadcast('widget.active', widget, $event.shiftKey);
          EditorWidget.widget = widget;
        };

        $scope.onMoveStart = function($event){
          $rootScope.$broadcast('widget.panstart');
        };

        $scope.onMove = function($event){
          $rootScope.$broadcast('widget.panmove', $event.deltaX, $event.deltaY);
        };

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
      },
      link: function (scope, element, attrs, ctrls) {

      }
    };
  });
