'use strict';

angular.module('html5editorApp')
  
  .factory('SenseSettingsModal', function ($rootScope, $uibModal) {

    function ModalCtrl($scope, $uibModalInstance, sense){
      $scope.sense = sense;
      console.log(sense)
    };

    return function(options){
      return $uibModal.open({
        size:'lg',
        resolve: options.resolve,
        templateUrl: 'app/editor/settings/modal.html',
        controller: ModalCtrl
      });
    }
  });
