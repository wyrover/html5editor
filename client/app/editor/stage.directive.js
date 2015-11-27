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
        var x = 0, 
            y = 0, 
            contents = angular.copy($scope.page.contents);

        $scope.changeWidget = function($event, widget){
          if(!$event.shiftKey&&!widget.active||widget.type=='background'){
            angular.forEach($scope.page.contents, function(item){
              item.active = false;
            });
          }
          widget.active = true;
          EditorWidget.widget = widget;
        };
        $scope.onPanStart = function($event, widget){
          x = widget.left;
          y = widget.top;
          contents = angular.copy($scope.page.contents);
        };
        $scope.onPanMove = function($event, widget){
          widget.left = parseInt(x) + $event.deltaX;
          widget.top = parseInt(y) + $event.deltaY;

          angular.forEach($scope.page.contents, function(item, index){
            if(!item.active)return;
            item.left = parseInt(contents[index].left) + $event.deltaX;
            item.top = parseInt(contents[index].top) + $event.deltaY;
          });
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
