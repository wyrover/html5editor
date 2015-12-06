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
          var active = 0;
          angular.forEach($scope.sense.contents, function(item, index){
            if(item.active) active = index;
          });
          $scope.page = $scope.sense.contents[active];
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
