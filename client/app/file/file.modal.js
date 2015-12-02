'use strict';

angular.module('html5editorApp')
  .controller('FileModalCtrl', function($scope, $modalInstance, files){
    $scope.files = files;

    $scope.remove = function(index){
      files[index].$remove(function(){
        files.splice(index, 1)
      });
    };

    $scope.select = function(file){
      $modalInstance.close(file);
    };
  })
  .factory('FileModal', function ($rootScope, $modal, File) {
    
    function openModal(scope){
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $modal.open({
        size:'lg',
        templateUrl: 'app/file/modal.html',
        controller: 'FileModalCtrl',
        resolve: {
          files: function(){
            return File.query();
          }
        }
      });
    };

    return function(options){
      return openModal(options);
    }
  });
