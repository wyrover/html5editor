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
      controller: function($scope, EditorWidget, hotkeys){
        var x = 0, 
            y = 0, 
            contents = angular.copy($scope.page.contents);

        $scope.widget = {};

        $scope.changeWidget = function($event, widget){
          if(!$event.shiftKey&&!widget.active||widget.type=='background'){
            angular.forEach($scope.page.contents, function(item){
              item.active = false;
              if(widget.group&&item.group==widget.group){
                    item.active = true;
              }
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

        $scope.push = function(widget){
          var index = $scope.page.contents.indexOf(widget);
          if(index>0){
            $scope.page.contents[index] = $scope.page.contents[index-1];
            $scope.page.contents[index-1] = widget;
          };
        };

        $scope.pull = function(widget){
          var index = $scope.page.contents.indexOf(widget);
          if(index>-1&&index<$scope.page.contents.length-1){
            $scope.page.contents[index] = $scope.page.contents[index+1];
            $scope.page.contents[index+1] = widget;
          };
        };

        $scope.copy = function(widget){
          $scope.widget = widget;
        };

        $scope.paste = function(widget){
              var w = angular.copy($scope.widget);
              w.top += 10;
              w.left += 10;
              EditorWidget.widget.active = false;
              EditorWidget.widget = w;
              $scope.page.contents.push(w);
        };

        $scope.group = function(){
            $scope.page.glen = $scope.page.glen||1;
            angular.forEach($scope.page.contents, function(item, index){
                  if(item.active){
                        item.group = $scope.page.glen+1;
                  }
            });
            $scope.page.glen++;
        };

        $scope.split = function(){
            angular.forEach($scope.page.contents, function(item, index){
                  if(item.active){
                        delete item.group;
                        item.active = false;
                  }
            });
        };
        
        hotkeys.bindTo($scope)
            .add({
                combo:'ctrl+c',
                callback: function(){
                  $scope.copy(EditorWidget.widget);
                }
              })
              .add({
                combo:'ctrl+v',
                callback: function(){
                  $scope.paste();
                }
              });

      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
