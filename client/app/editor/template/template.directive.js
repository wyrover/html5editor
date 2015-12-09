'use strict';

angular.module('html5editorApp')
  .directive('editorTemplate', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/template/template.html',
      restrict: 'EA',
      controller: function($scope, Template){
        $scope.templates = Template.query();
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
