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
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
