'use strict';

angular.module('html5editorApp')
  .controller('TemplateEditCtrl', function ($scope, $state, Sense, Template) {

    var id = $state.params.id;
    
    $scope.init = function(id){
      $scope.sense = new Template({
        _id:id,
        name: '新场景',
        contents:[{background:{type:'background'},contents:[],active:true}]
      });
    };

    $scope.init($state.params.id);
  });
