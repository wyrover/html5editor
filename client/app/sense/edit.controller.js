'use strict';

angular.module('html5editorApp')
  .controller('SenseEditCtrl', function ($scope, $state, Sense) {

    var id = $state.params.id;
    
    $scope.init = function(id){
      $scope.sense = new Sense({
        name: '新场景',
        contents:[{background:{type:'background'},contents:[]}]
      });

      if(id){
        $scope.sense._id = id;
        $scope.sense.$get();
      }

    };

    $scope.init($state.params.id);
  });
