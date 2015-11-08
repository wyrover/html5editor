'use strict';

angular.module('html5editorApp')
  .controller('SenseCtrl', function ($scope, Sense) {
    $scope.senses = Sense.query();
  });
