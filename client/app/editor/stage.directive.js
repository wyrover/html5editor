'use strict';

angular.module('html5editorApp')
  .directive('editorStage', function () {
    return {
      require: 'ngModel',
      scope:{
        page: '=ngModel'
      },
      templateUrl: 'app/editor/stage.html',
      restrict: 'EA',
      controller: function($scope){
        console.log($scope.page)
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
