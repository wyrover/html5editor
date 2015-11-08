'use strict';

angular.module('html5editorApp')
  .controller('SenseEditCtrl', function ($scope, Sense) {
    $scope.sense = new Sense();
  });
