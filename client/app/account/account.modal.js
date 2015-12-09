'use strict';

angular.module('html5editorApp')
  .factory('AccountModal', function ($rootScope, $modal) {
    var opened = false;
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
        controller: AccountModalCtrl,
        templateUrl:'app/account/account.modal.html',
        scope: modalScope,
        //size:'sm',
        backdrop:scope.type!='alert'
      });

      instance.result.then(function(){
          opened = false;
      }, function(){
          opened = false;
      });

      opened = true;

      return instance;
    }

    function AccountModalCtrl($scope, $modalInstance, Auth){
      $scope.modal.title = $scope.modal.type=='login'?'登录':'注册';
      $scope.templateUrl = 'app/account/'+$scope.modal.type+'/'+$scope.modal.type+'.html';

      $scope.user = {};
      $scope.errors = {};

      $scope.login = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
          Auth.login({
            email: $scope.user.email,
            password: $scope.user.password
          })
          .then( function(user) {
            // Logged in, redirect to home
            $modalInstance.close(user);
          })
          .catch( function(err) {
            $scope.errors.other = err.message;
          });
        }
      };

      $scope.signup = function(e){
          e.preventDefault();
          $scope.templateUrl = 'app/account/signup/signup.html';
      };

      $scope.ok = function(){
        $modalInstance.close($scope.modal.value)
      };
      $scope.cancel = function(){
        $modalInstance.dismiss();
      };
    };

    // Public API here
    return  {
      login:function(options) {
        if(opened) return;
        options = options||{};
        options.type = 'login';
        return openModal(options);
      },
      signup:function(options){
        options = options||{};
        options.type = 'signup';
        return openModal(options);
      }
    };
  });
