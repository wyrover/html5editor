'use strict';

angular.module('html5editorApp')
  .controller('SenseEditCtrl', function ($scope, $state, Sense) {

    var id = $state.params.id;
    
    $scope.init = function(id){
      $scope.sense = new Sense({
        _id:id,
        name: '新场景',
        contents:[{background:{type:'background'},contents:[],active:true}]
      });
    };

    $scope.init($state.params.id);
  });
