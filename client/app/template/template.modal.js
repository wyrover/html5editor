'use strict';

angular.module('html5editorApp')
  
  .factory('TemplateModal', function ($rootScope, $modal) {
    
    function openModal(scope){
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $modal.open({
        size:'lg',
        templateUrl: 'app/template/modal.html',
        controller: TemplateModalCtrl
      });
    };

    function TemplateModalCtrl($scope, $modalInstance, Template){
      $scope.list = Template.query({type:'widget'});

      $scope.remove = function(index){
        $scope.list[index].$remove(function(){
          $scope.list.splice(index, 1)
        });
      };

      $scope.select = function(file){
        $modalInstance.close(file);
      };
    };

    return function(options){
      return openModal(options);
    }
  });
