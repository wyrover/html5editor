'use strict';

angular.module('html5editorApp')
  .controller('SenseEditCtrl', function ($scope, $state, Sense) {
    
    $scope.init = function(id){
      $scope.sense = new Sense();

      if(id){
        $scope.sense._id = id;
        $scope.sense.$get();
      }
      else{
        $scope.sense.contents = [{background:{type:'background'},contents:[]}];
      }

    };

    $scope.init($state.params.id);
  });
