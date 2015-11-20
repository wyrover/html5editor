'use strict';

angular.module('html5editorApp')
  .directive('toolbar', function () {
    return {
      require: 'ngModel',
      scope: {
        page: '=ngModel'
      },
      templateUrl: 'app/editor/toolbar.html',
      restrict: 'EA',
      controller: function($scope){
        $scope.insertWidget = function(type){
          $scope.page.contents.push({type:type});
          $scope.page.contents = angular.copy($scope.page.contents)
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
