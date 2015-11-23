'use strict';

angular.module('html5editorApp')
  .directive('editorToolbar', function () {
    return {
      require: 'ngModel',
      scope: {
        page: '=ngModel'
      },
      templateUrl: 'app/editor/toolbar.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget){
        var defaults = {
          position:'absolute',
          top:'0',
          left:'0'
        };

        $scope.insertWidget = function(type){
          var conf = angular.copy(defaults);
          conf.type = type;
          switch(type){
            case 'text':
              conf.text = '点击可编辑';
              break;
            case 'shape':
              conf.shape = 'rect';
              break;
            case 'image':
              conf.src = 'assets/images/widget.png';
              break;
          }

          $scope.page.contents.push(conf);
          EditorWidget.widget = $scope.page.contents[$scope.page.contents.length-1];
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
