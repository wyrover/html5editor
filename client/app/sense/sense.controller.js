'use strict';

angular.module('html5editorApp')
  .controller('SenseCtrl', function ($scope, $modal, Sense, Modal) {
    $scope.senses = Sense.query();
    $scope.remove = function(index){
      Modal({
        title:'确认删除？'
      }, function(){
        console.log(arguments)
      });
      return;
      $scope.senses[index].$remove(function(){
        $scope.senses.splice(index,1);
      });
    };
  });
