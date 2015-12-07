'use strict';

angular.module('html5editorApp')
  .controller('AccountModalCtrl', function($scope, $modalInstance){
    $scope.modal.title = $scope.modal.type=='login'?'登录':'注册';
    $scope.templateUrl = 'app/account/'+$scope.modal.type+'/'+$scope.modal.type+'.html';

    $scope.ok = function(){
      $modalInstance.close($scope.modal.value)
    };
    $scope.cancel = function(){
      $modalInstance.dismiss();
    };
  })
  .factory('AccountModal', function ($rootScope, $modal) {
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

      var instance = $modal.open({
        controller:'AccountModalCtrl',
        templateUrl:'app/account/account.modal.html',
        scope: modalScope,
        //size:'sm',
        backdrop:scope.type!='alert'
      });

      return instance;
    }

    // Public API here
    return  {
      login:function(options) {
        options = options||{};
        options.type = 'login';
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
