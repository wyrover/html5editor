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
            $scope.page = {background:{type:'background'}};
            $scope.sense.contents.push($scope.page);
            $scope.activePage($scope.page);
        };

        $scope.activePage = function(page){
            angular.forEach($scope.sense.contents, function(item){
                if(item.active){
                    item.active = false;
                }
            });
            page.active = true;
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
