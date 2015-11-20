'use strict';

angular.module('html5editorApp')
  .directive('stage', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/stage.html',
      restrict: 'EA',
      controller: function($scope){
        console.log($scope.sense)
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
