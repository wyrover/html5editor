'use strict';

angular.module('html5editorApp')
  .controller('SenseCtrl', function ($scope, $modal, $state, Sense, Modal, TemplateModal) {
    $scope.senses = Sense.query();

    $scope.remove = function(index){
      Modal.confirm({
        title:'确认删除？',
        value:'删除后将无法恢复。'
      }).result.then(function(){
        $scope.senses[index].$remove(function(){
          $scope.senses.splice(index,1);
        });
      });
    };

    $scope.select = function(){
      TemplateModal().result.then(function(template){
        delete template._id;
        Sense.save(template, function(data){
          $state.go('sense.edit',{id:data._id});
        });
      });
    };
  });
