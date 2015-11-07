'use strict';

angular.module('html5editorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('template', {
        url: '/template',
        templateUrl: 'app/template/template.html',
        controller: 'TemplateCtrl'
      });
  });
