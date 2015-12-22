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
          var active = 0, active2 = -1;

          angular.forEach($scope.sense.contents, function(item, index){
            if(item.active) active = index;
          });

          $scope.page = $scope.sense.contents[active];
          if(!$scope.page.active){$scope.page.active = true;}

          angular.forEach($scope.page.contents, function(item, index){
            if(item.active) active2 = index;
          });
          EditorWidget.widget = active2>=0?$scope.page.contents[active2]:$scope.page.background;
          EditorWidget.widget.active = true;
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
