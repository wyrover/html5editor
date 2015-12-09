'use strict';

angular.module('html5editorApp')
  .directive('editorPreview', function () {
    return {
      scope:{
        sense:'=ngModel'
      },
      templateUrl: 'app/editor/preview/preview.html',
      restrict: 'EA',
      controller: function($scope){
        //$scope.page = $scope.sense.contents[0];
      },
      link: function (scope, element, attrs) {
      }
    };
  });
