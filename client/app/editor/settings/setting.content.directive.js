'use strict';

angular.module('html5editorApp')
  .directive('editorSettingContent', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/settings/setting-content.html',
      restrict: 'EA',
      controller: function($scope, Upload, EditorWidget, FileModal){
        $scope.widget = EditorWidget;
        
        $scope.selectBackground = function(){
          FileModal().result.then(function(file){
            $scope.widget.widget.src = file.path;
          });
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
