'use strict';

angular.module('html5editorApp')
  .controller('ModalCtrl', function($scope, $modalInstance){
    $scope.ok = function(){
      $modalInstance.close($scope.value)
    };
    $scope.cancel = function(){
      $modalInstance.dismiss();
    };
  })
  .factory('Modal', function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope) {
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      var instance = $modal.open({
        controller:'ModalCtrl',
        scope: modalScope
      });

      return instance;
    }

    // Public API here
    return  {
      prompt:function(options) {
        options.type = 'prompt';
        return openModal(options);
      }
    };
  });
