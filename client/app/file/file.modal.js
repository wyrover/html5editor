'use strict';

angular.module('html5editorApp')
  .controller('FileModalCtrl', function($scope, $modalInstance, File, Upload){
    $scope.files = File.query({type:'image'});

    $scope.remove = function(index){
      files[index].$remove(function(){
        files.splice(index, 1)
      });
    };

    $scope.select = function(file){
      $modalInstance.close(file);
    };

    $scope.upload = function(file){
      Upload.upload({
        url:'/api/files',
        data: {
          file: file
        }
      })
      .success(function(res){
        files.unshift(new File(res))
      });
    };
  })
  .factory('FileModal', function ($rootScope, $modal) {
    
    function openModal(scope){
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $modal.open({
        size:'lg',
        templateUrl: 'app/file/modal.html',
        controller: 'FileModalCtrl'
      });
    };

    return function(options){
      return openModal(options);
    }
  });
