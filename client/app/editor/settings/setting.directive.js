'use strict';

angular.module('html5editorApp')
  .directive('editorSetting', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/settings/setting.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget){},
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
