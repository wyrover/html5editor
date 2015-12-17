'use strict';

angular.module('html5editorApp')
  .directive('editorToolbar', function () {
    return {
      require: 'ngModel',
      scope: {
        page: '=ngModel'
      },
      templateUrl: 'app/editor/toolbar/toolbar.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget, WidgetModal){
        $scope.insertWidget = function(type){
          var defaults = EditorWidget.getDefaults(type);
          defaults.active = true;
          angular.forEach($scope.page.contents, function(item){
            item.active = false;
          });
          $scope.page.contents.push(defaults);
          EditorWidget.widget = $scope.page.contents[$scope.page.contents.length-1];
        };

        $scope.insertCustomWidget = function(){
          WidgetModal().result.then(function(template){
            var page = angular.copy(template.contents[0]);
            angular.extend($scope.page.background, page.background);
            $scope.page.contents = $scope.page.contents.concat(template.contents[0].contents);
          })
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
