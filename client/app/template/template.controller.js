'use strict';

angular.module('html5editorApp')
  .controller('TemplateCtrl', function ($scope, Template) {
    $scope.senses = Template.query();
  });
