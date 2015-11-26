'use strict';

angular.module('html5editorApp')
  .directive('uploader', function () {
    return {
      templateUrl: 'components/uploader/uploader.html',
      restrict: 'EA',
      controller: function($scope, Upload){
        $scope.progress = 0;

        $scope.upload = function(file){
          Upload.upload({
            url:'/api/files',
            data:{file:file}
          })
          .then(function(resp){
            console.log(resp)
            $scope.progress = 0;
          },
          function(resp){
            console.log(resp)
            $scope.progress = 0;
          },function(e){
            $scope.progress = parseInt(100*(e.loaded/e.total));
          });
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
