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
        $scope.onPanStart = function($event){
          console.log($event)
        };
        $scope.onPanMove = function($event){
          console.log($event)
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
