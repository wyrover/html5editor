'use strict';

angular.module('html5editorApp')
  .factory('AccountModal', function ($rootScope, $uibModal) {
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

      var instance = $uibModal.open({
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

    function AccountModalCtrl($scope, $uibModalInstance, Auth){
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
            $uibModalInstance.close(user);
          })
          .catch( function(err) {
            $scope.errors.other = err.message;
          });
        }
      };

      $scope.register = function(form) {
          $scope.submitted = true;

          if(form.$valid) {
            Auth.createUser({
              name: $scope.user.name,
              email: $scope.user.email,
              password: $scope.user.password
            })
            .then( function() {
              // Account created, redirect to home
              $location.path('/');
            })
            .catch( function(err) {
              err = err.data;
              $scope.errors = {};

              // Update validity of form fields that match the mongoose errors
              angular.forEach(err.errors, function(error, field) {
                form[field].$setValidity('mongoose', false);
                $scope.errors[field] = error.message;
              });
            });
          }
        };

      $scope.signup = function(e){
          e.preventDefault();
          $uibModalInstance.close();
          $rootScope.$emit('modal.signup.show');
      };

      $scope.signin = function(e){
          e.preventDefault();
          $uibModalInstance.close();
          $rootScope.$emit('modal.login.show');
      };

      $scope.ok = function(){
        $uibModalInstance.close($scope.modal.value)
      };
      $scope.cancel = function(){
        $uibModalInstance.dismiss();
      };
    };

    $rootScope.$on('modal.signup.show',function(){
        api.signup();
    });

    $rootScope.$on('modal.login.show',function(){
        api.login();
    });

    // Public API here
    var api =  {
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

    return api;
  });
