'use strict';

angular.module('html5editorApp')
  .controller('SenseCtrl', function ($scope, Sense, Modal) {
    $scope.senses = Sense.query();
    $scope.remove = function(index){
      Modal();
      return;
      $scope.senses[index].$remove(function(){
        $scope.senses.splice(index,1);
      });
    };
  });
