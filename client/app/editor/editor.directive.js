'use strict';

angular.module('html5editorApp')
  .directive('editor', function () {
    return {
      require: 'ngModel',
      scope:{
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/editor.html',
      restrict: 'EA',
      controller: function($scope, EditorWidget){
        $scope.init = function(){
          $scope.page = $scope.sense.contents[0];
          EditorWidget.widget = $scope.page.background;
        };
        if($scope.sense._id){
          $scope.sense.$get(function(){
            $scope.init();
          });
        }
        $scope.init();
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
