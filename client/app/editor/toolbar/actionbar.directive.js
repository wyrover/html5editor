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
      controller: function($scope, Modal, Template){
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

        $scope.settings = function(){
          Modal.prompt({title:'设置场景名字',value:$scope.sense.name}).result.then(function(name){
            $scope.sense.name = name;
          });
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
