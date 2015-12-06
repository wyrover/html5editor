'use strict';

angular.module('html5editorApp')
  .controller('TemplateModalCtrl', function($scope, $modalInstance, Template){
    $scope.list = Template.query({type:'widget'});

    $scope.remove = function(index){
      list[index].$remove(function(){
        list.splice(index, 1)
      });
    };

    $scope.select = function(file){
      $modalInstance.close(file);
    };
  })
  .factory('TemplateModal', function ($rootScope, $modal) {
    
    function openModal(scope){
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $modal.open({
        size:'lg',
        templateUrl: 'app/template/modal.html',
        controller: 'TemplateModalCtrl'
      });
    };

    return function(options){
      return openModal(options);
    }
  });
