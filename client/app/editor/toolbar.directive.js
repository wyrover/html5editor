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
          console.log('insert custom widget')
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
