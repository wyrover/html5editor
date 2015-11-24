'use strict';

angular.module('html5editorApp')
  .directive('editorSettingStyle', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/style.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget){
        $scope.widget = EditorWidget;
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
