'use strict';

angular.module('html5editorApp')
  .directive('editorStage', function ($rootScope) {
    return {
      require: 'ngModel',
      scope:{
        page: '=ngModel'
      },
      templateUrl: 'app/editor/editor-stage.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget, hotkeys, History){
        var x = 0, 
            y = 0, 
            contents = angular.copy($scope.page.contents),
            current = EditorWidget.widget,
            widget_copy = {},
            history = new History(200);

        $scope.changeWidget = function($event, widget){
          EditorWidget.widget = widget;
          $rootScope.$broadcast('widget.change', $event.shiftKey, widget.active);
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
          widget_copy = widget;
        };

        $scope.paste = function(widget){
              if(!widget_copy.type) return;
              var w = angular.copy(widget_copy);
              w.top += 10;
              w.left += 10;
              w.active = false;
              w.group = -1;
              EditorWidget.widget = w;
              widget_copy = w;
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

        $scope.remove = function(){
            var index = $scope.page.contents.indexOf(EditorWidget.widget);
            if(index>-1){
              $scope.page.contents.splice(index, 1);
            }
        };

        $scope.$watch('page.contents',function(nv, ov){
              if(nv.length&&nv!==ov){
                    history.add(nv);
              }
        },true);
        
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
              })
              .add({
                combo: 'ctrl+z',
                callback: function(){
                  if(history.canBack()) 
                        $scope.page.contents = history.back();
                }
              })
              .add({
                combo: 'ctrl+y',
                callback: function(){
                  if(history.canForward())
                        $scope.page.contents = history.forward();
                }
              })
              .add({
                combo:'del',
                callback: function(){
                  $scope.remove();
                }
              });

      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
