'use strict';

angular.module('html5editorApp')
  .directive('editor', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/editor.html',
      restrict: 'EA',
      controller: function($scope){
        $scope.page = $scope.sense.contents[0];
        $scope.widget = $scope.background;
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
