'use strict';

angular.module('html5editorApp')
  .directive('editorPager', function () {
    return {
      require: 'ngModel',
      scope:{
        page: '=ngModel',
        sense: '=sense'
      },
      templateUrl: 'app/editor/stage/editor-pager.html',
      restrict: 'EA',
      controller: function($scope, Editor){
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
            page.background.active = true;
            $scope.page = page;
            Editor.widget = page.background;
            Editor.page = page;
        };

        $scope.removePage = function($index){
          $scope.sense.contents.splice($scope.sense.contents.length-1, 1);
          $scope.page = $scope.sense.contents[$scope.sense.contents.length-1];
        };

        $scope.sort = function(e, index){
          var tmp = $scope.sense.contents[index];
          if(e.deltaX<0){
            $scope.sense.contents[index]=$scope.sense.contents[index-1];
            $scope.sense.contents[index-1] = tmp;
          }
          else{
            $scope.sense.contents[index]=$scope.sense.contents[index+1];
            $scope.sense.contents[index+1] = tmp;
          }
          $scope.activePage(tmp);
        };

        $scope.snapshot = function(e){
          var el = e.target;
          html2canvas(document.getElementById('page'),{
            onrendered: function(canvas){
               Canvas2Image.saveAsPNG(canvas, 320, 480);
            }
          });
        };
      },
      link: function (scope, element, attrs, ngModel) {
        
      }
    };
  });
