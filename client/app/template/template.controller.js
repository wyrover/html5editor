'use strict';

angular.module('html5editorApp')
  .controller('TemplateCtrl', function ($scope, Template) {
    $scope.templates = Template.query();
  });
