'use strict';

angular.module('html5editorApp')
  .directive('editorSettingContent', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/setting-content.html',
      restrict: 'EA',
      controller: function($scope, Upload, EditorWidget){
        $scope.widget = EditorWidget;
        
        $scope.upload = function(file){
          Upload.upload({
            url:'/api/files',
            data: {
              file: file
            }
          })
          .success(function(res){
            $scope.widget.widget.src = res.path;
          });
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
