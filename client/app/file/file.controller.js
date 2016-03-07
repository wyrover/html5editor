'use strict';

angular.module('html5editorApp')
  .controller('FileCtrl', function FileModalCtrl($scope, File, Upload){
      $scope.files = File.query({type:'image'});
      $scope.totalItems = 1;

      $scope.remove = function(index){
        $scope.files[index].$remove(function(){
          $scope.files.splice(index, 1)
        });
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

    });
