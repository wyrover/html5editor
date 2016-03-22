'use strict';

angular.module('html5editorApp')
  .directive('actionbar', function ($state) {
    return {
      require: 'ngModel',
      scope: {
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/settings/actionbar.html',
      restrict: 'EA',
      controller: function($scope, SenseSettingsModal, Modal, Template){
        $scope.save = function(){
           $scope.sense.$save(function(){
              $state.go('^.edit',{id:$scope.sense._id});
              Modal.alert({value:'保存成功'});
            });
        };

        $scope.settings = function(){
          SenseSettingsModal({
            resolve: {
              sense: $scope.sense
            }
          })
          .result.then(function(name){
            $scope.sense.name = name;
          });
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
