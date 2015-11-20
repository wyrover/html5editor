'use strict';

angular.module('html5editorApp')
  .directive('actionbar', function ($state) {
    return {
      require: 'ngModel',
      scope: {
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/actionbar.html',
      restrict: 'EA',
      controller: function($scope){
        $scope.save = function(){
          return $scope.sense.$save(function(){
            $state.go('sense.edit',{id:$scope.sense._id});
          });
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
