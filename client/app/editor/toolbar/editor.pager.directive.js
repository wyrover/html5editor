'use strict';

angular.module('html5editorApp')
  .directive('editorPager', function () {
    return {
      require: 'ngModel',
      scope:{
        page: '=ngModel',
        sense: '=sense'
      },
      templateUrl: 'app/editor/toolbar/editor-pager.html',
      restrict: 'EA',
      controller: function($scope){
        $scope.insertPage = function($index){
            $scope.page = {background:{type:'background'},contents:[]};
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
            $scope.page = page;
        };

        $scope.removePage = function($index){
          $scope.sense.contents.splice($scope.sense.contents.length-1, 1);
          $scope.page = $scope.sense.contents[$scope.sense.contents.length-1];
        };
      },
      link: function (scope, element, attrs, ngModel) {
        element.on('click', function(event){
          var target = angular.element(event.target);
          var list = element.find('li');
          angular.forEach(list, function(item,i){
            
          })
        });
      }
    };
  });
