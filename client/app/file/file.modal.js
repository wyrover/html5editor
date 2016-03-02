'use strict';

angular.module('html5editorApp')
  .factory('FileModal', function ($rootScope, $uibModal) {
    
    function openModal(scope){
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $uibModal.open({
        size:'lg',
        templateUrl: 'app/file/modal.html',
        controller: FileModalCtrl
      });
    };

    function FileModalCtrl($scope, $uibModalInstance, File, Upload, angularLoad){
      $scope.files = File.query({type:'image'});
      $scope.totalItems = 1;

      $scope.remove = function(index){
        $scope.files[index].$remove(function(){
          $scope.files.splice(index, 1)
        });
      };

      $scope.select = function(file){
        $uibModalInstance.close(file);
      };

      $scope.upload = function(file){
        Upload.upload({
          url:'/api/files',
          data: {
            file: file
          }
        })
        .success(function(res){
          $scope.files.unshift(new File(res))
        });
      };

      $scope.onPageChange = function(){
        $scope.files = query($scope.currentPage,{type:'image'});
      };

      function query(page, params){
        return File.page(page)
          .query(params,function(data,headersGetter){
            var headers = headersGetter();
            var range = File.parseRange(headers['content-range']);
            $scope.totalItems = range.length;
          });
      }

    };

    return function(options){
      return openModal(options);
    }
  });
