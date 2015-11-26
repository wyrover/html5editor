'use strict';

angular.module('html5editorApp')
  .directive('uploader', function () {
    return {
      templateUrl: 'components/uploader/uploader.html',
      restrict: 'EA',
      controller: function($scope, Upload){
        $scope.upload = function(file){
          Upload.upload({
            url:'/api/files',
            data:{file:file}
          })
          .then(function(resp){
            console.log(resp)
          },
          function(resp){
            console.log(resp)
          },function(resp){
            console.log(resp)
          });
        };
      },
      link: function (scope, element, attrs) {

      }
    };
  });
