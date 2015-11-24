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
          $scope.page.contents.push(defaults);
          EditorWidget.widget = $scope.page.contents[$scope.page.contents.length-1];
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
