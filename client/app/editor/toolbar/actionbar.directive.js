'use strict';

angular.module('html5editorApp')
  .directive('actionbar', function ($state) {
    return {
      require: 'ngModel',
      scope: {
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/toolbar/actionbar.html',
      restrict: 'EA',
      controller: function($scope, Template){
        $scope.save = function(){
          return $scope.sense.$save(function(){
            $state.go('sense.edit',{id:$scope.sense._id});
          });
        };

        $scope.saveTemplate = function(){
          var template = $scope.sense.toJSON();
          template.type = 'sense';
          delete template._id;
          Template.save(template);
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
