'use strict';

angular.module('html5editorApp')
  .directive('actionbar', function ($state) {
    return {
      require: 'ngModel',
      scope: {
        sense: '=ngModel'
      },
      templateUrl: 'app/editor/toolbar/actionbar.html',
      restrict: 'EA',
      controller: function($scope, Modal, Template){
        $scope.save = function(){
          html2canvas(document.getElementById('page'),{
            onrendered: function(canvas){
               var myImage = canvas.toDataURL("image/png");
               $scope.sense.thumb = myImage;
               $scope.sense.$save(function(){
                $state.go('^.edit',{id:$scope.sense._id});
                Modal.alert({value:'保存成功'});
              });
            }
          });
          
        };

        $scope.settings = function(){
          Modal.prompt({title:'设置场景名字',value:$scope.sense.name}).result.then(function(name){
            $scope.sense.name = name;
          });
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
