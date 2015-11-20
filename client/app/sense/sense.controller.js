'use strict';

angular.module('html5editorApp')
  .controller('SenseCtrl', function ($scope, Sense) {
    $scope.senses = Sense.query();
    $scope.remove = function(index){
      $scope.senses[index].$remove(function(){
        $scope.senses.splice(index,1);
      });
    };
  });
