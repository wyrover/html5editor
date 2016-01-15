'use strict';

angular.module('html5editorApp')
  .factory('FileModal', function ($rootScope, $modal) {
    
    function openModal(scope){
      var modalScope = $rootScope.$new();
      scope = scope || {};

      angular.extend(modalScope, scope);

      return $modal.open({
        size:'lg',
        templateUrl: 'app/file/modal.html',
        controller: FileModalCtrl
      });
    };

    function FileModalCtrl($scope, $modalInstance, File, Upload, angularLoad){
      $scope.files = File.query({type:'image'});
      $scope.totalItems = 1;

      $scope.remove = function(index){
        $scope.files[index].$remove(function(){
          $scope.files.splice(index, 1)
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

      angularLoad.loadScript("bower_components/plupload/js/plupload.full.min.js")
      .then(function(){
        console.log(plupload)
      })

    };

    return function(options){
      return openModal(options);
    }
  });
