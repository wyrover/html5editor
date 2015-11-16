'use strict';

angular.module('html5editorApp')
  .directive('actionbar', function () {
    return {
      require: 'ngModel',
      templateUrl: 'app/editor/actionbar.html',
      restrict: 'EA',
      controller: function($scope){
        $scope.save = function(){console.log('save')
          return $scope.sense.$save();
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
