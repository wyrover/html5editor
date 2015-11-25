'use strict';

angular.module('html5editorApp')
  .directive('uploader', function () {
    return {
      templateUrl: 'components/uploader/uploader.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
