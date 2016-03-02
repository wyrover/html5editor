'use strict';

angular.module('html5editorApp')
  .factory('Modal', function ($rootScope, $uibModal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope) {
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, {modal:scope});

      var instance = $uibModal.open({
        controller:ModalCtrl,
        scope: modalScope,
        size:scope.size||'sm',
        backdrop:scope.type!='alert'
      });

      return instance;
    }

    function ModalCtrl($scope, $uibModalInstance, $timeout){
      $scope.ok = function(){
        $uibModalInstance.close($scope.modal.value)
      };
      $scope.cancel = function(){
        $uibModalInstance.dismiss();
      };
      if($scope.modal.type=='alert'){
        $timeout(function(){
          $uibModalInstance.close();
        },2000)
      }
    };

    // Public API here
    return  {
      open:function(options) {
        options.type = 'normal';
        options.size = 'normal';
        return openModal(options);
      },
      prompt:function(options) {
        options.type = 'prompt';
        return openModal(options);
      },
      confirm:function(options){
        options.type = 'confirm';
        return openModal(options);
      },
      alert:function(options){
        options.type = 'alert';
        return openModal(options);
      }
    };
  });
