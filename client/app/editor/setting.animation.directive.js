'use strict';

angular.module('html5editorApp')
  .directive('editorSettingAnimation', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/animation.html',
      restrict: 'EA',
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
