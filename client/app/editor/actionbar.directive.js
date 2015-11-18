'use strict';

angular.module('html5editorApp')
  .directive('actionbar', function () {
    return {
      require: 'ngModel',
      scope: {
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/actionbar.html',
      restrict: 'EA',
      controller: function($scope){
        $scope.save = function(){
          return $scope.sense.$save();
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
