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
      controller: function($scope, EditorWidget, hotkeys, History, Modal, Template){
        var widget_copy = {},
            history = new History(200);

        $scope.changeWidget = function($event, widget){
            angular.forEach($scope.page.contents, function(item){
              item.active = false;
            });
          EditorWidget.widget = widget;
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

        $scope.save = function(widget){
              Modal.prompt({title:'请输入名字',value:'新名字'})
              .result.then(function(name){
                    var widgets = [];
                    angular.forEach($scope.page.contents, function(item){
                          item.active&&widgets.push(item);
                    });
                    if(!widgets.length) return;
                    Template.save({
                          name:name,
                          type:'widget',
                          contents:[{contents:[].concat(widgets)}]
                    });
              });
        };

        $scope.savePage = function(widget){
              Modal.prompt({title:'请输入页面名字',value:'新页面'})
              .result.then(function(name){
                    var page = angular.copy($scope.page);
                    Template.save({
                          name:name,
                          type:'page',
                          contents:[page]
                    });
              });
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
              })
              .add({
                    combo:'left',
                    callback:function(e){
                          EditorWidget.widget.type!='background'&&e.preventDefault();
                          $rootScope.$broadcast('widget.panstart');
                          $rootScope.$broadcast('widget.panmove', -1, 0);
                    }
              })
              .add({
                    combo:'down',
                    callback:function(e){
                          EditorWidget.widget.type!='background'&&e.preventDefault();
                          $rootScope.$broadcast('widget.panstart');
                          $rootScope.$broadcast('widget.panmove', 0, 1);
                    }
              })
              .add({
                    combo:'right',
                    callback:function(e){
                          EditorWidget.widget.type!='background'&&e.preventDefault();
                          $rootScope.$broadcast('widget.panstart');
                          $rootScope.$broadcast('widget.panmove', 1, 0);
                    }
              })
              .add({
                    combo:'up',
                    callback:function(e){
                          EditorWidget.widget.type!='background'&&e.preventDefault();
                          $rootScope.$broadcast('widget.panstart');
                          $rootScope.$broadcast('widget.panmove', 0, -1);
                    }
              });

      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
