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
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
