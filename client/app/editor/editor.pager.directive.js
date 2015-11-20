'use strict';

angular.module('html5editorApp')
  .directive('editorPager', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/editor-pager.html',
      restrict: 'EA',
      controller: function($scope){
        $scope.insertPage = function($index){
            $scope.sense.contents.push({background:{type:'background'}})
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
