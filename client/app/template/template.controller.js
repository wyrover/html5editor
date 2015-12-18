'use strict';

angular.module('html5editorApp')
  .controller('TemplateCtrl', function ($scope, $state, Template, Sense) {
    $scope.templates = Template.query();

    $scope.remove = function(index){
      $scope.templates[index].$remove(function(){
        $scope.templates.splice(index, 1)
      });
    };

    $scope.select = function(template){
      var sense = template.toJSON();
      delete sense._id;
      Sense.save(sense, function(data){
        $state.go('sense.edit', {id: data._id});
      });
    };

  });
