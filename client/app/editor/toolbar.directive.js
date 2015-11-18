'use strict';

angular.module('html5editorApp')
  .directive('toolbar', function () {
    return {
      require: 'ngModel',
      scope: {
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/toolbar.html',
      restrict: 'EA',
      controller: function($scope){
        $scope.insertWidget = function(type){
          console.log(type)
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
