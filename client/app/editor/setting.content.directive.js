'use strict';

angular.module('html5editorApp')
  .directive('editorSettingContent', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/content.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget){
        $scope.widget = EditorWidget;
        $scope.$watch('widget', function(newVal){
          console.log(newVal)
        })
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
